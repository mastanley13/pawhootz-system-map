import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const envPath = path.join(projectRoot, ".env.local");
const snapshotPath = path.join(projectRoot, "content", "live-ghl-summary.json");
const apiBase = "https://services.leadconnectorhq.com";
const fallbackEnvPaths = [
  envPath,
  path.resolve(projectRoot, "..", "Pawhootz-Client-Portal", ".env.local"),
  path.resolve(
    projectRoot,
    "..",
    "StrategixPets-Staff-Portal-Template",
    "StrategixPets-Staff-Portal-Template",
    ".env.local"
  ),
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

function toArray(payload, keys) {
  for (const key of keys) {
    if (Array.isArray(payload?.[key])) {
      return payload[key];
    }
  }

  if (Array.isArray(payload)) {
    return payload;
  }

  return [];
}

function classifyCalendar(name) {
  const normalized = String(name ?? "").toLowerCase();

  if (normalized.includes("staff") || normalized.includes("personal")) {
    return "staff";
  }

  if (
    normalized.includes("yard") ||
    normalized.includes("play") ||
    normalized.includes("run") ||
    normalized.includes("kottage") ||
    normalized.includes("condo") ||
    normalized.includes("digs") ||
    normalized.includes("lounge") ||
    normalized.includes("tails")
  ) {
    return "facility";
  }

  return "service";
}

async function requestJson(url, token, versions = ["2021-07-28", "2021-04-15"]) {
  let lastFailure = null;

  for (const version of versions) {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        Version: version,
      },
    });

    const raw = await response.text();
    let data = null;

    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      data = null;
    }

    if (response.ok) {
      return { ok: true, status: response.status, version, data };
    }

    lastFailure = {
      ok: false,
      status: response.status,
      version,
      data,
      raw: raw?.slice(0, 300),
    };

    if (response.status !== 404 && response.status !== 422) {
      break;
    }
  }

  return lastFailure;
}

async function main() {
  let fileEnv = {};

  for (const candidate of fallbackEnvPaths) {
    try {
      await access(candidate);
      fileEnv = parseEnv(await readFile(candidate, "utf8"));
      break;
    } catch {
      fileEnv = {};
    }
  }

  const locationId = process.env.GHL_LOCATION_ID ?? fileEnv.GHL_LOCATION_ID;
  const token = process.env.GHL_API_TOKEN ?? fileEnv.GHL_API_TOKEN;

  if (!locationId || !token) {
    throw new Error(
      "Missing GHL_LOCATION_ID or GHL_API_TOKEN. Provide them as environment variables or in .env.local."
    );
  }

  const [calendarsRes, objectsRes, pipelinesRes, customFieldsRes, workflowsRes, formsRes] =
    await Promise.all([
      requestJson(`${apiBase}/calendars/?locationId=${locationId}`, token),
      requestJson(`${apiBase}/objects/?locationId=${locationId}`, token),
      requestJson(`${apiBase}/opportunities/pipelines?locationId=${locationId}`, token),
      requestJson(`${apiBase}/locations/${locationId}/customFields`, token),
      requestJson(`${apiBase}/workflows/?locationId=${locationId}`, token),
      requestJson(`${apiBase}/forms/?locationId=${locationId}`, token),
    ]);

  const calendars = toArray(calendarsRes?.data, ["calendars"]).map((calendar) => ({
    name:
      calendar?.name ??
      calendar?.calendarName ??
      calendar?.title ??
      "Unnamed Calendar",
    category: classifyCalendar(calendar?.name ?? calendar?.calendarName ?? calendar?.title),
  }));

  const objects = toArray(objectsRes?.data, ["objects"]).map((object) => ({
    key: object?.key ?? object?.objectKey ?? object?.name ?? "object",
    label: object?.name ?? object?.label ?? object?.objectName ?? object?.key ?? "Object",
  }));

  const pipelines = toArray(pipelinesRes?.data, ["pipelines"]).map((pipeline) => ({
    name: pipeline?.name ?? pipeline?.pipelineName ?? "Pipeline",
  }));

  const customFields = toArray(customFieldsRes?.data, ["customFields", "fields"]);
  const workflows = toArray(workflowsRes?.data, ["workflows"]).map((workflow) => ({
    name:
      workflow?.name ??
      workflow?.workflowName ??
      workflow?.title ??
      workflow?.triggerName ??
      "Workflow",
    status: workflow?.status ?? workflow?.published ?? workflow?.state ?? "",
  }));
  const forms = toArray(formsRes?.data, ["forms"]).map((form) => ({
    name: form?.name ?? form?.title ?? form?.formName ?? "Form",
    type: form?.type ?? form?.formType ?? form?.category ?? "",
  }));
  const customObjects = objects.filter((object) =>
    String(object.key).startsWith("custom_objects.")
  );

  const snapshot = {
    verifiedAt: new Date().toISOString(),
    locationId,
    counts: {
      calendars: calendars.length,
      objects: objects.length,
      customObjects: customObjects.length,
      pipelines: pipelines.length,
      customFields: customFields.length,
      workflows: workflows.length,
      forms: forms.length,
    },
    calendars,
    objects,
    pipelines,
    workflows,
    forms,
    access: {
      workflows: workflowsRes?.ok
        ? {
            status: "proven",
            note: `Workflow endpoint reachable with ${workflows.length} records returned.`,
          }
        : {
            status: "partial",
            note: `Workflow endpoint not fully available (${workflowsRes?.status ?? "no response"}). Export-backed proof is still needed.`,
          },
      forms: formsRes?.ok
        ? {
            status: "proven",
            note: `Forms endpoint reachable with ${forms.length} records returned.`,
          }
        : {
            status: "partial",
            note: `Forms endpoint not fully available (${formsRes?.status ?? "no response"}). Screenshot or export proof is still needed.`,
          },
    },
  };

  await writeFile(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  console.log(`Updated ${path.relative(projectRoot, snapshotPath)}`);
  console.log(
    `Calendars: ${snapshot.counts.calendars} | Objects: ${snapshot.counts.objects} | Pipelines: ${snapshot.counts.pipelines} | Custom fields: ${snapshot.counts.customFields}`
  );
}

main().catch((error) => {
  console.error("Failed to refresh the GHL summary snapshot.");
  console.error(error);
  process.exitCode = 1;
});
