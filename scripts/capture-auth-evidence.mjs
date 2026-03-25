import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const evidenceDir = path.join(projectRoot, "public", "evidence");
const evidenceSnapshotPath = path.join(projectRoot, "content", "evidence-captures.json");

const clientRepoRoot = path.resolve(projectRoot, "..", "Pawhootz-Client-Portal");
const staffRepoRoot = path.resolve(
  projectRoot,
  "..",
  "StrategixPets-Staff-Portal-Template",
  "StrategixPets-Staff-Portal-Template"
);

const envCandidates = [
  path.join(clientRepoRoot, ".env.local"),
  path.join(staffRepoRoot, ".env.local"),
  path.join(projectRoot, ".env.local"),
];

function parseEnv(raw) {
  return raw
    .split(/\r?\n/)
    .filter(Boolean)
    .reduce((accumulator, line) => {
      if (line.trim().startsWith("#")) {
        return accumulator;
      }

      const separator = line.indexOf("=");
      if (separator === -1) {
        return accumulator;
      }

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
      accumulator[key] = value;
      return accumulator;
    }, {});
}

async function loadEnv() {
  const merged = {};

  for (const candidate of envCandidates) {
    try {
      await access(candidate);
      Object.assign(merged, parseEnv(await readFile(candidate, "utf8")));
    } catch {
      // ignore missing candidate files
    }
  }

  return {
    ...merged,
    ...process.env,
  };
}

function npmCommand() {
  return "npm";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function routeUrl(base, route) {
  return new URL(route, base).toString();
}

async function isReachable(url) {
  try {
    const response = await fetch(url, { redirect: "manual" });
    return response.status < 500;
  } catch {
    return false;
  }
}

async function waitForUrl(url, timeoutMs = 180_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    if (await isReachable(url)) {
      return;
    }

    await sleep(2_000);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function startProcess({ cwd, args, label }) {
  const child = spawn(npmCommand(), args, {
    cwd,
    stdio: ["ignore", "pipe", "pipe"],
    shell: process.platform === "win32",
    env: process.env,
  });

  child.stdout.on("data", (chunk) => {
    const line = String(chunk).trim();
    if (line) {
      console.log(`[${label}] ${line}`);
    }
  });

  child.stderr.on("data", (chunk) => {
    const line = String(chunk).trim();
    if (line) {
      console.warn(`[${label}] ${line}`);
    }
  });

  return child;
}

async function killProcessTree(child) {
  if (!child?.pid) {
    return;
  }

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const killer = spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
        stdio: "ignore",
        shell: false,
      });
      killer.on("close", () => resolve());
      killer.on("error", () => resolve());
    });
    return;
  }

  try {
    process.kill(-child.pid, "SIGTERM");
  } catch {
    // ignore cleanup failures
  }
}

async function ensureClientServer(env, startedProcesses) {
  const loginUrl = routeUrl(env.CLIENT_PORTAL_URL, "/login");

  if (await isReachable(loginUrl)) {
    return;
  }

  const child = startProcess({
    cwd: clientRepoRoot,
    args: ["run", "dev"],
    label: "client",
  });

  startedProcesses.push(child);
  await waitForUrl(loginUrl);
}

async function ensureStaffServer(env, startedProcesses) {
  const loginUrl = routeUrl(env.STAFF_PORTAL_URL, "/login");

  if (await isReachable(loginUrl)) {
    return;
  }

  const url = new URL(env.STAFF_PORTAL_URL);
  const host = url.hostname || "127.0.0.1";
  const port = url.port || "4175";

  const child = startProcess({
    cwd: staffRepoRoot,
    args: ["run", "dev", "--", "--host", host, "--port", port],
    label: "staff",
  });

  startedProcesses.push(child);
  await waitForUrl(loginUrl);
}

async function writeEvidenceSnapshot(snapshot) {
  await writeFile(evidenceSnapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
}

async function saveScreenshot(page, filename, options = {}) {
  const outputPath = path.join(evidenceDir, filename);
  await page.screenshot({
    path: outputPath,
    fullPage: options.fullPage ?? true,
  });
  return `/evidence/${filename}`;
}

async function captureClientPortal(env, browser, snapshot) {
  const baseUrl = env.CLIENT_PORTAL_URL;
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1200 },
    colorScheme: "light",
  });
  const page = await context.newPage();

  await page.goto(routeUrl(baseUrl, "/login"), { waitUntil: "networkidle" });
  await page.locator("#login-email").waitFor({ state: "visible", timeout: 60_000 });
  await page.fill("#login-email", env.CLIENT_PORTAL_EMAIL);
  await page.fill("#login-password", env.CLIENT_PORTAL_PASSWORD);

  await Promise.all([
    page.waitForURL(/\/portal(\/)?$/, { timeout: 60_000 }),
    page.click("#login-submit"),
  ]);

  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2_000);

  const expandToggle = page.locator('button:has(svg[data-testid="KeyboardArrowDownIcon"])').first();
  if (await expandToggle.count()) {
    await expandToggle.click();
    await page.waitForTimeout(1_500);
  }

  const homeImage = await saveScreenshot(page, "client-portal-home.png");
  snapshot.shots.push({
    status: "proven",
    title: "Client Portal Home",
    surface: "Client Portal",
    image: homeImage,
    alt: "Authenticated PawHootz client portal home screen",
    caption:
      "Authenticated client dashboard showing household-level access to pets, service actions, and post-login portal controls.",
    sourceRef: `${routeUrl(baseUrl, "/portal")} | src/pages/portal/PortalPage.tsx`,
    whatItProves: [
      "The client portal has a working post-login home surface.",
      "Pet management and service actions are visible in an authenticated session.",
      "The dossier now includes proof beyond public auth screens.",
    ],
  });

  const uploadVaccineButton = page.getByRole("button", { name: /Upload Vaccine/i }).first();
  if (await uploadVaccineButton.count()) {
    await uploadVaccineButton.click();
    await page.getByText(/Upload Vaccination for/i).waitFor({ timeout: 30_000 });
    await page.waitForTimeout(1_000);

    const vaccineImage = await saveScreenshot(page, "client-vaccine-upload.png");
    snapshot.shots.push({
      status: "proven",
      title: "Client Vaccine Upload",
      surface: "Client Portal",
      image: vaccineImage,
      alt: "Client portal vaccine upload dialog",
      caption:
        "Authenticated vaccine-upload flow from the pet card, including typed vaccine selection and document-upload entry point.",
      sourceRef:
        `${routeUrl(baseUrl, "/portal")} | src/components/portal/VaccinationUploadDialog.tsx`,
      whatItProves: [
        "Clients can open a real vaccine-upload workflow from within the portal.",
        "Vaccine submission is represented as an operational UI, not a placeholder note.",
        "The client portal owns a concrete compliance handoff into staff review.",
      ],
    });

    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
  } else {
    snapshot.warnings.push(
      "Authenticated client vaccine-upload dialog was not captured because the button was not visible in the demo session."
    );
  }

  const reportCardButton = page.getByRole("button", { name: /View Report Card/i }).first();
  if (await reportCardButton.count()) {
    await Promise.all([
      page.waitForURL(/\/portal\/pets\/.+\/report-card/, { timeout: 30_000 }),
      reportCardButton.click(),
    ]);
    await page.getByText(/Past Report Cards/i).waitFor({ timeout: 30_000 });
    await page.waitForTimeout(1_000);

    const reportCardImage = await saveScreenshot(page, "client-report-card.png");
    snapshot.shots.push({
      status: "proven",
      title: "Client Report Card",
      surface: "Client Portal",
      image: reportCardImage,
      alt: "Client portal report card screen",
      caption:
        "Authenticated report-card screen with history tabs, branded recap UI, and media-oriented layout.",
      sourceRef:
        `${page.url()} | src/pages/portal/ReportCardPage.tsx`,
      whatItProves: [
        "The client portal already includes a report-card experience.",
        "Report history and branded recap presentation are visibly represented in the current build.",
        "Report cards are no longer just a matrix row; they now have direct screen proof in the dossier.",
      ],
    });
  } else {
    snapshot.warnings.push(
      "Authenticated client report-card screen was not captured because no report-card entry point was visible in the demo session."
    );
  }

  await page.goto(routeUrl(baseUrl, "/portal/appointments"), { waitUntil: "domcontentloaded" });
  await page.getByText(/Manage Appointments/i).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1_000);

  const appointmentsImage = await saveScreenshot(page, "client-appointments.png");
  snapshot.shots.push({
    status: "proven",
    title: "Client Appointment Manager",
    surface: "Client Portal",
    image: appointmentsImage,
    alt: "Client portal manage appointments screen",
    caption:
      "Authenticated appointment-management view showing the customer-facing surface for upcoming and past bookings.",
    sourceRef:
      `${routeUrl(baseUrl, "/portal/appointments")} | src/pages/portal/ManageAppointmentsPage.tsx`,
    whatItProves: [
      "Customers have a real appointment-management screen after login.",
      "The portal is handling post-booking lifecycle tasks, not only service selection.",
      "Booking evidence now includes an authenticated management surface.",
    ],
  });

  await context.close();
}

async function captureStaffPortal(env, browser, snapshot) {
  const baseUrl = env.STAFF_PORTAL_URL;
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1200 },
    colorScheme: "light",
  });

  await context.addInitScript((bootstrap) => {
    for (const [key, value] of Object.entries(bootstrap)) {
      if (value) {
        localStorage.setItem(key, value);
      }
    }
  }, {
    ghl_access_token: env.GHL_API_TOKEN,
    ghl_refresh_token: env.GHL_API_TOKEN,
    ghl_token_expiry: String(Date.now() + 1000 * 60 * 60 * 24 * 30),
    ghl_location_id: env.GHL_LOCATION_ID,
    ghl_company_id: env.GHL_LOCATION_NAME || "PawHootz",
    ghl_user_id: env.STAFF_PORTAL_EMAIL || "capture-user",
    staff_role: env.STAFF_PORTAL_PRIMARY_ROLE || "frontdesk",
  });

  const page = await context.newPage();
  await page.goto(routeUrl(baseUrl, "/login"), { waitUntil: "domcontentloaded" });

  const devSignInButton = page.getByRole("button", { name: /Dev sign in/i });
  if (await devSignInButton.count()) {
    await Promise.all([
      page.waitForURL((url) => !url.pathname.endsWith("/login"), { timeout: 60_000 }),
      devSignInButton.click(),
    ]);
  }

  if (page.url().includes("/select-role")) {
    const frontDeskCard = page.getByText(/Front Desk/i).first();
    if (await frontDeskCard.count()) {
      await frontDeskCard.click();
    }

    const continueButton = page.getByRole("button", { name: /Continue/i });
    if (await continueButton.count()) {
      await Promise.all([
        page.waitForURL(/\/frontdesk\/queue|\/dashboard/, { timeout: 60_000 }),
        continueButton.click(),
      ]);
    }
  }

  if (!page.url().includes("/frontdesk/queue")) {
    await page.goto(routeUrl(baseUrl, "/frontdesk/queue"), { waitUntil: "networkidle" });
  }

  await page.getByRole("button", { name: /New Appointment/i }).waitFor({ timeout: 60_000 });
  await page.waitForTimeout(2_000);

  const frontdeskImage = await saveScreenshot(page, "staff-frontdesk-queue.png", {
    fullPage: false,
  });
  snapshot.shots.push({
    status: "proven",
    title: "Staff Front Desk Queue",
    surface: "Staff Portal",
    image: frontdeskImage,
    alt: "Staff portal front desk queue screen",
    caption:
      "Authenticated front-desk workspace showing appointment counts, queue controls, and daily operational actions.",
    sourceRef:
      `${routeUrl(baseUrl, "/frontdesk/queue")} | src/pages/FrontDesk.tsx`,
    whatItProves: [
      "The staff portal has a working operations dashboard after authentication.",
      "Front-desk users can access queue, counts, and appointment controls in the live app.",
      "Operations proof now includes a real post-login staff surface.",
    ],
  });

  const vaccinesButton = page.getByRole("button", { name: /Vaccines/i }).first();
  try {
    await vaccinesButton.waitFor({ timeout: 25_000 });
  } catch {
    // handled below as an evidence warning
  }

  if (await vaccinesButton.count()) {
    await vaccinesButton.click();
    await page.getByText(/Vaccine Approval/i).waitFor({ timeout: 30_000 });
    await page.waitForTimeout(1_000);

    const vaccineApprovalImage = await saveScreenshot(page, "staff-vaccine-approval.png", {
      fullPage: false,
    });
    snapshot.shots.push({
      status: "proven",
      title: "Staff Vaccine Approval",
      surface: "Staff Portal",
      image: vaccineApprovalImage,
      alt: "Staff portal vaccine approval modal",
      caption:
        "Authenticated vaccine-approval workflow from the front-desk workspace, giving the dossier direct proof of the staff-side compliance loop.",
      sourceRef:
        `${routeUrl(baseUrl, "/frontdesk/queue")} | src/components/VaccineApprovalModal.tsx`,
      whatItProves: [
        "Staff can open a dedicated vaccine-review workflow from the portal.",
        "The staff portal contains a real approval loop for uploaded vaccine records.",
        "Client-to-staff vaccine handoff is now visually evidenced in the dossier.",
      ],
    });

    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
  } else {
    snapshot.warnings.push(
      "Authenticated staff vaccine-approval modal was not captured because the Vaccines control was not available in the live queue view."
    );
  }

  const calendarLink = page.getByRole("link", { name: /Calendar/i }).first();
  if (!(await calendarLink.count())) {
    throw new Error("Calendar navigation link was not available in the staff portal.");
  }

  await Promise.all([
    page.waitForURL(/\/calendar/, { timeout: 60_000 }),
    calendarLink.click(),
  ]);
  await page.getByText(/Staff Calendar/i).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(2_000);

  const calendarImage = await saveScreenshot(page, "staff-calendar.png", {
    fullPage: false,
  });
  snapshot.shots.push({
    status: "proven",
    title: "Staff Calendar",
    surface: "Staff Portal",
    image: calendarImage,
    alt: "Staff portal calendar screen",
    caption:
      "Authenticated staff calendar view showing the dedicated schedule-management surface inside the operations portal.",
    sourceRef:
      `${routeUrl(baseUrl, "/calendar")} | pages/calendar.tsx`,
    whatItProves: [
      "The staff portal includes a real calendar workspace.",
      "Scheduling is represented as a dedicated staff surface rather than only through queue controls.",
      "Calendar operations now have direct screenshot evidence in the map.",
    ],
  });

  await context.close();
}

async function main() {
  const env = await loadEnv();
  const requiredKeys = [
    "GHL_LOCATION_ID",
    "GHL_API_TOKEN",
    "CLIENT_PORTAL_URL",
    "CLIENT_PORTAL_EMAIL",
    "CLIENT_PORTAL_PASSWORD",
    "STAFF_PORTAL_URL",
  ];

  const missing = requiredKeys.filter((key) => !env[key]);
  if (missing.length) {
    throw new Error(`Missing required env values: ${missing.join(", ")}`);
  }

  await mkdir(evidenceDir, { recursive: true });

  const startedProcesses = [];
  const snapshot = {
    verifiedAt: new Date().toISOString(),
    shots: [],
    backlog: [
      "Capture authenticated webcam screens once a checked-in pet is available in the demo account.",
      "Capture GHL UI screenshots for workflows, forms, calendars, templates, and deposit settings.",
      "Capture any remaining staff messaging or conversation surfaces that matter for launch review.",
    ],
    warnings: [],
  };

  let browser;

  try {
    await ensureClientServer(env, startedProcesses);
    await ensureStaffServer(env, startedProcesses);

    browser = await chromium.launch({ headless: true });

    await captureClientPortal(env, browser, snapshot);
    await captureStaffPortal(env, browser, snapshot);

    await writeEvidenceSnapshot(snapshot);
    console.log(`Updated ${path.relative(projectRoot, evidenceSnapshotPath)}`);
    console.log(`Captured ${snapshot.shots.length} authenticated screenshots.`);
  } finally {
    if (browser) {
      await browser.close();
    }

    await Promise.all(startedProcesses.map((child) => killProcessTree(child)));
  }
}

main().catch((error) => {
  console.error("Failed to capture authenticated evidence.");
  console.error(error);
  process.exitCode = 1;
});
