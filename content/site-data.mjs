function formatDateLabel(value) {
  const date = value ? new Date(value) : new Date("2026-03-23T09:00:00-04:00");

  if (Number.isNaN(date.getTime())) {
    return "March 23, 2026";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function normalizeSnapshot(snapshot = {}) {
  const calendars = Array.isArray(snapshot.calendars) ? snapshot.calendars : [];
  const objects = Array.isArray(snapshot.objects) ? snapshot.objects : [];
  const pipelines = Array.isArray(snapshot.pipelines) ? snapshot.pipelines : [];
  const workflows = Array.isArray(snapshot.workflows) ? snapshot.workflows : [];
  const forms = Array.isArray(snapshot.forms) ? snapshot.forms : [];
  const counts = snapshot.counts ?? {};
  const customObjects = objects.filter((object) =>
    String(object.key ?? "").startsWith("custom_objects.")
  );

  return {
    verifiedAt: snapshot.verifiedAt ?? "2026-03-23T09:00:00-04:00",
    locationId: snapshot.locationId ?? "dSMazNc3NkiqdkOVHX1x",
    counts: {
      calendars: counts.calendars ?? calendars.length,
      objects: counts.objects ?? objects.length,
      customObjects: counts.customObjects ?? customObjects.length,
      pipelines: counts.pipelines ?? pipelines.length,
      customFields: counts.customFields ?? 0,
      workflows: counts.workflows ?? workflows.length,
      forms: counts.forms ?? forms.length,
    },
    calendars,
    objects,
    customObjects,
    pipelines,
    workflows,
    forms,
    access: snapshot.access ?? {},
  };
}

function normalizeEvidenceCapture(snapshot = {}) {
  return {
    verifiedAt: snapshot.verifiedAt ?? null,
    shots: Array.isArray(snapshot.shots) ? snapshot.shots : [],
    backlog: Array.isArray(snapshot.backlog) ? snapshot.backlog : [],
    warnings: Array.isArray(snapshot.warnings) ? snapshot.warnings : [],
  };
}

function findCalendars(calendars, category) {
  return calendars
    .filter((calendar) => calendar.category === category)
    .map((calendar) => calendar.name);
}

function joinNames(items, fallback, limit = 4) {
  if (!items.length) {
    return fallback;
  }

  return items.slice(0, limit).join(" | ");
}

export function createSiteData(snapshot, evidenceSnapshot = {}) {
  const live = normalizeSnapshot(snapshot);
  const capture = normalizeEvidenceCapture(evidenceSnapshot);
  const verifiedLabel = formatDateLabel(live.verifiedAt);
  const captureVerifiedLabel = formatDateLabel(capture.verifiedAt ?? live.verifiedAt);
  const serviceCalendars = findCalendars(live.calendars, "service");
  const facilityCalendars = findCalendars(live.calendars, "facility");
  const staffCalendars = findCalendars(live.calendars, "staff");
  const customObjectKeys = live.customObjects.map(
    (object) => object.key ?? object.label ?? "custom object"
  );
  const pipelineNames = live.pipelines.map((pipeline) => pipeline.name ?? "Pipeline");
  const workflowNames = live.workflows.map((workflow) => workflow.name ?? "Workflow");
  const formNames = live.forms.map((form) => form.name ?? "Form");
  const defaultEvidenceBacklog = [
    "Capture authenticated client portal surfaces: portal home, pet card, bookings, report cards, and webcams.",
    "Capture authenticated staff portal surfaces: front desk, calendar, vaccine approval, and messaging.",
    "Capture GHL UI screenshots for workflows, forms, calendars, templates, and deposit settings.",
  ];
  const evidenceGalleryShots = [
    {
      status: "proven",
      title: "Client Portal Login",
      surface: "Client Portal",
      image: "/evidence/client-login.png",
      alt: "PawHootz client portal login screen",
      caption:
        "Public auth surface from the client portal. Confirms the branded login experience is a real runnable screen rather than a planned route.",
      sourceRef: "http://127.0.0.1:5000/login | src/pages/auth/LoginPage.tsx",
      whatItProves: [
        "Branded client auth UI is already live locally.",
        "The portal has a real front door for existing clients.",
        "This surface is ready to be cited as visual evidence in the map.",
      ],
    },
    {
      status: "proven",
      title: "Client Portal Registration",
      surface: "Client Portal",
      image: "/evidence/client-register.png",
      alt: "PawHootz client portal registration screen",
      caption:
        "Registration capture from the same client app, showing the account-creation surface that anchors first-time onboarding.",
      sourceRef: "http://127.0.0.1:5000/register | src/pages/auth/RegisterPage.tsx",
      whatItProves: [
        "First-time household onboarding is represented in the live app.",
        "The client portal is more than a login shell.",
        "Auth and onboarding now have both code proof and visual proof.",
      ],
    },
    {
      status: "proven",
      title: "Staff Portal Login",
      surface: "Staff Portal",
      image: "/evidence/staff-login.png",
      alt: "PawHootz staff portal login screen",
      caption:
        "Staff-side auth surface captured from the runnable Vite app. This gives the map a direct visual anchor for the operations-facing system as well.",
      sourceRef: "http://127.0.0.1:4175/login | components/StaffLogin.tsx",
      whatItProves: [
        "The staff portal is a real branded surface, not just a codebase reference.",
        "Staff auth has a dedicated interface separate from the client portal.",
        "The two-portal model is now visually evidenced inside the dossier.",
      ],
    },
    ...capture.shots,
    {
      status: "proven",
      title: "Combined System Map Artifact",
      surface: "Project Artifact",
      image: "/assets/combined-mind-map.png",
      alt: "Combined PawHootz system map artifact",
      caption:
        "The broader planning artifact from the client repo remains useful supporting proof: the dossier page is building on top of existing system-mapping work, not inventing it retroactively.",
      sourceRef: "docs/Combined Mind Map.png",
      whatItProves: [
        "The project already had systems-level planning before this dossier build.",
        "The new page is extending an existing strategy artifact.",
        "There is continuity between earlier planning and current implementation evidence.",
      ],
    },
  ];
  const evidenceBacklog = capture.backlog.length
    ? [...capture.backlog, ...capture.warnings]
    : defaultEvidenceBacklog;
  const authenticatedCaptureCard = capture.shots.length
    ? [
        {
          status: "proven",
          title: "Authenticated portal proof",
          metric: `${capture.shots.length} authenticated captures`,
          body: `Authenticated client and staff portal screens were captured on ${captureVerifiedLabel}, so the dossier now shows post-login proof rather than only public entry screens.`,
          bullets: capture.shots.slice(0, 6).map((shot) => shot.title),
        },
      ]
    : [];

  return {
    meta: {
      title: "PawHootz System Map",
      description:
        "PawHootz system map covering the current build, evidence-backed status, final architecture, comparison gaps, and cutover sequence.",
    },
    hero: {
      eyebrow: "PawHootz System Map",
      title: "Current Build, Final Portal Architecture, and the Gap Between Them",
      lead:
        "PawHootz already has meaningful implementation across the Client Portal, Staff Portal, and GoHighLevel. This map is the operating reference for what exists now, what the final system should become, and which proof gaps, schema decisions, and launch controls still need to close before full cutover away from Gingr.",
      chips: [
        "Client Portal",
        "Staff Portal",
        "GoHighLevel",
        "Migration",
        "Vaccines",
        "Boarding",
        "Daycare",
        "Grooming",
        "Training",
        "Webcams",
        "Report Cards",
        "Cutover",
      ],
      statusCards: [
        {
          label: "Current Reality",
          value: "Live partial build",
          text:
            "All three surfaces are real already. This is not a blank-slate architecture exercise.",
        },
        {
          label: "Primary Constraint",
          value: "Alignment over invention",
          text:
            "The main work is reducing drift across portal code, GHL configuration, and the future operating model.",
        },
        {
          label: "Last Verified",
          value: verifiedLabel,
          text:
            "Repo evidence plus a live GHL pull were used to ground the current-state sections.",
        },
        {
          label: "Open Proof Gap",
          value: "Templates + deposits",
          text:
            "Workflow and forms endpoints are reachable now, but template detail, notification behavior, and deposit enforcement still need to be folded into the dossier.",
        },
      ],
      pulseCards: [
        {
          value: String(live.counts.calendars),
          label: "Live Calendars",
        },
        {
          value: String(live.counts.objects),
          label: "Live Objects",
        },
        {
          value: String(live.counts.customFields),
          label: "Custom Fields",
        },
      ],
      image: {
        src: "/assets/pawhootz-training-academy.jpeg",
        alt: "PawHootz Training Academy sign",
        caption:
          "Brand anchor from the live PawHootz assets. The map now uses PawHootz colors and dossier framing instead of a Champs reskin.",
      },
      imageBadge: "PawHootz Brand Direction",
    },
    sidebar: {
      title: "Map Index",
      signalsTitle: "Signals To Keep In View",
      signals: [
        `${live.counts.calendars} live calendars already exist in the active GHL location.`,
        `${live.counts.customObjects} custom objects already exist, including ${joinNames(
          customObjectKeys,
          "pets, vaccine records, and reports",
          3
        )}.`,
        `${live.counts.pipelines} pipelines are live today, but broader operating coverage is still incomplete.`,
        `${live.counts.workflows || "Live"} workflows and ${live.counts.forms || "live"} forms are now reachable through the GHL API.`,
      ],
      artifactsTitle: "Source Dossier",
      artifacts: [
        "Pawhootz Client Portal repo audit",
        "StrategixPets Staff Portal repo audit",
        "Live GoHighLevel location pull",
        "Journey audit and communications inventory docs",
        "Branding spec and existing visual assets",
      ],
    },
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        kind: "overview",
        eyebrow: "Project Posture",
        title: "This map has to function as both a strategy document and a build-control document",
        description:
          "The Champs system map was primarily a source-to-target dossier. PawHootz needs a stronger middle layer because meaningful implementation already exists. The map has to show present implementation, final target design, proof quality, and unresolved gaps in one place.",
        metrics: [
          {
            value: String(live.counts.calendars),
            label: "Live GHL Calendars",
            text:
              "The account already reflects real service lines, boarding inventory, and team scheduling rather than a generic booking shell.",
          },
          {
            value: String(live.counts.customObjects),
            label: "Custom Objects In Use",
            text:
              "Pets, vaccine records, reports, pet icons, and veterinarians are not hypothetical. They are live schema decisions.",
          },
          {
            value: String(live.counts.pipelines),
            label: "Pipelines Live Today",
            text:
              "Appointment and training pipeline structure exists, but launch-one operating coverage is still incomplete.",
          },
        ],
        narrativeCards: [
          {
            title: "Why This Version Is Different",
            body:
              "PawHootz already has code, live calendars, live objects, and partial operating logic. The system map therefore needs to be a control board for delivery, not just a polished architecture narrative.",
          },
          {
            title: "Definition Of Done",
            body:
              "A finished version is not just prettier. It has source-backed proof, an explicit comparison matrix, clear system boundaries, and an executable cutover sequence.",
          },
          {
            title: "What Makes It Credible",
            body:
              "Every major claim should show its evidence source, confidence level, and last verification date. That is the fastest way to close the trust gap between a planning artifact and an operational one.",
          },
        ],
        featureList: [
          `Live snapshot verified ${verifiedLabel}`,
          `Key service calendars: ${joinNames(
            serviceCalendars,
            "Grooming Services | Daycare Services | Training Services | Events Calendar"
          )}`,
          `Facility calendars: ${joinNames(
            facilityCalendars,
            "Private Play | Social Yard | Puppy Play | K9 Kottages",
            5
          )}`,
          `Staff calendar signal: ${joinNames(
            staffCalendars,
            "personal staff calendars are also present",
            2
          )}`,
        ],
        artifacts: [
          {
            type: "image",
            title: "Existing Working Context",
            caption:
              "A visual artifact already exists in the client repo. It helps anchor the new dossier page in the broader system-thinking work rather than starting from scratch.",
            image: {
              src: "/assets/combined-mind-map.png",
              alt: "Combined PawHootz mind map artifact",
            },
          },
          {
            type: "text",
            title: "Primary Source Set",
            items: [
              "docs/pawhootz-client-journeys.md",
              "docs/journey-audit/pawhootz-communications-inventory.md",
              "docs/ghl_automation_workflow_build_guide_01-24-26.md",
              "docs/pawhootz-checklist-progress-report.md",
              "pawhootz-BRANDING.MD",
            ],
          },
        ],
      },
      {
        id: "current-build",
        navLabel: "Current Build",
        kind: "surface-grid",
        eyebrow: "Current-State Surface Map",
        title: "What PawHootz already has in progress today",
        description:
          "These surfaces are grounded in actual code or live account evidence rather than wishlist planning.",
        cards: [
          {
            status: "proven",
            title: "Client Portal",
            summary:
              "Real customer-facing flows already exist and write to live GHL structures.",
            sourceRef:
              "Client Portal: src/App.tsx, src/components/portal/PetCard.tsx, src/components/portal/VaccinationUploadDialog.tsx",
            bullets: [
              "Registration and login exist.",
              "Multi-pet household management exists.",
              "Pet create, edit, and delete exists against custom_objects.pets.",
              "Vaccine upload exists against custom_objects.vaccine_records.",
              "Grooming booking, boarding booking, and training flows exist.",
              "Daycare appears to remain a request-first flow rather than a full self-serve booking flow.",
              "Webcam routes and iDogCam integration work exist.",
              "Report card UI work exists, but end-to-end delivery proof is still incomplete.",
            ],
          },
          {
            status: "proven",
            title: "Staff Portal",
            summary:
              "The staff side is materially real and already supports daily operational actions.",
            sourceRef:
              "Staff Portal: pages/dashboard.tsx, components/EventCard.tsx, services/staff-api.service.ts",
            bullets: [
              "OAuth-based staff sign-in exists.",
              "Role-aware front desk and calendar workflows exist.",
              "Shared calendar and schedule management views exist.",
              "Staff can create, reschedule, and cancel appointments.",
              "Staff can add notes, tasks, media, and operational status changes.",
              "Staff can send ad-hoc SMS and email through GHL Conversations.",
              "Staff can review and approve or reject vaccine records.",
            ],
          },
          {
            status: "partial",
            title: "GoHighLevel",
            summary:
              "The live account is substantially built out, but some automation surfaces remain partially verified.",
            sourceRef: "Live GHL pull: calendars, objects, pipelines, custom fields",
            bullets: [
              `${live.counts.calendars} calendars exist in the live location.`,
              `${live.counts.objects} objects exist in the live location.`,
              `${live.counts.pipelines} pipelines exist in the live location.`,
              `${live.counts.customFields} custom fields exist in the live location.`,
              "Workflow and forms endpoints are reachable, but template-level proof and payment behavior still need capture.",
            ],
          },
          {
            status: "partial",
            title: "Migration And Data Work",
            summary:
              "The repos already contain substantial mapping and audit work, but cutover is not yet operationalized.",
            sourceRef:
              "Local docs: field comparisons, journey audits, workflow guides, and progress reports",
            bullets: [
              "Gingr-to-GHL mapping work exists.",
              "Custom field comparison work exists.",
              "Journey audits and contradiction docs already exist.",
              "Migration logic is documented but not yet an executable runbook.",
            ],
          },
        ],
      },
      {
        id: "evidence-gallery",
        navLabel: "Screenshots",
        kind: "evidence-gallery",
        eyebrow: "Screenshot + Proof Gallery",
        title: "Real UI captures now sit beside the evidence ledger",
        description:
          `This layer makes the dossier more inspectable. The screenshots below were captured from the live local portal apps and paired with source references so the map can show what is actually present today. Latest authenticated capture set: ${captureVerifiedLabel}.`,
        shots: evidenceGalleryShots,
        ledgerCards: [
          ...authenticatedCaptureCard,
          {
            status: live.access.workflows?.status ?? "partial",
            title: "Live workflow proof",
            metric: `${live.counts.workflows} workflows reachable`,
            body:
              live.access.workflows?.note ??
              "Workflow access is reachable and should now be folded into the evidence ledger with specific names and screenshots.",
            bullets: workflowNames.length
              ? workflowNames.slice(0, 6)
              : ["Workflow names will populate after the next GHL refresh."],
          },
          {
            status: live.access.forms?.status ?? "partial",
            title: "Live forms proof",
            metric: `${live.counts.forms} forms reachable`,
            body:
              live.access.forms?.note ??
              "Forms access is reachable and should now be folded into the evidence ledger with exact form names and screenshots.",
            bullets: formNames.length
              ? formNames.slice(0, 6)
              : ["Form names will populate after the next GHL refresh."],
          },
        ],
        backlog: evidenceBacklog,
      },
      {
        id: "evidence-ledger",
        navLabel: "Evidence",
        kind: "proof-ledger",
        eyebrow: "Evidence Ledger",
        title: "What is proven, what is partial, and what still needs direct export proof",
        description:
          "This is the section that closes the trust gap. Every card shows the source surface, verification date, and confidence level rather than asking the reader to trust a narrative summary.",
        filters: [
          { value: "all", label: "All Proof" },
          { value: "proven", label: "Proven" },
          { value: "partial", label: "Partial" },
          { value: "unknown", label: "Unverified" },
        ],
        cards: [
          {
            status: "proven",
            confidence: "High",
            title: "Client auth and route structure are real",
            summary:
              "The client app has explicit login, register, protected routes, and portal pages in the codebase.",
            sourceType: "Code",
            sourceRef:
              "src/App.tsx, src/pages/auth/LoginPage.tsx, src/pages/auth/RegisterPage.tsx, src/contexts/AuthContext.tsx",
            lastVerified: verifiedLabel,
            bullets: [
              "Login route exists.",
              "Register route exists.",
              "Protected portal routes exist.",
              "The auth model is functional but still needs security redesign before launch.",
            ],
          },
          {
            status: "proven",
            confidence: "High",
            title: "Portal booking flows already write operational data",
            summary:
              "Booking dialogs, appointment payloads, contact notes, and tasks are already implemented for multiple service lines.",
            sourceType: "Code + docs",
            sourceRef:
              "src/components/portal/PetCard.tsx, TestGroomingCalendar.tsx, BoardingBookingCalendar.tsx, TrainingBookingCalendar.tsx, docs/journey-audit/pawhootz-communications-inventory.md",
            lastVerified: verifiedLabel,
            bullets: [
              "Grooming bookings create appointments.",
              "Boarding bookings create appointments.",
              "Training selections and bookings create notes, tasks, and appointments.",
              "Daycare currently behaves more like package selection plus staff follow-up than full booking.",
            ],
          },
          {
            status: "proven",
            confidence: "High",
            title: "Staff portal supports daily front-desk operations",
            summary:
              "The staff surface is not theoretical. It already exposes appointment management, messaging, and vaccine-review flows.",
            sourceType: "Code",
            sourceRef:
              "pages/dashboard.tsx, components/CalendarView.tsx, components/EventCard.tsx, services/staff-api.service.ts",
            lastVerified: verifiedLabel,
            bullets: [
              "Create, update, and cancel appointment endpoints are implemented.",
              "Ad-hoc SMS and email are implemented through conversations/messages.",
              "Calendar and event views already support high-volume schedule handling.",
            ],
          },
          {
            status: "proven",
            confidence: "High",
            title: "Vaccine submission and review loop exists across both portals",
            summary:
              "Clients can upload vaccine records and staff can review or reject them using the same underlying object model.",
            sourceType: "Code",
            sourceRef:
              "src/components/portal/VaccinationUploadDialog.tsx, services/staff-api.service.ts, VaccineApprovalModal.tsx",
            lastVerified: verifiedLabel,
            bullets: [
              "custom_objects.vaccine_records is actively used.",
              "Client uploads trigger review-oriented follow-up.",
              "Staff approval and rejection actions are implemented.",
            ],
          },
          {
            status: "proven",
            confidence: "Medium",
            title: "The live GHL account is more mature than older planning docs implied",
            summary:
              "The live location already contains multi-surface schema and scheduling structure rather than a sparse prototype configuration.",
            sourceType: "Live GHL pull",
            sourceRef:
              `Location ${live.locationId}: calendars, objects, pipelines, custom fields`,
            lastVerified: verifiedLabel,
            bullets: [
              `${joinNames(serviceCalendars, "Service calendars are present", 4)}.`,
              `${joinNames(customObjectKeys, "Custom objects are present", 5)}.`,
              `${joinNames(pipelineNames, "Live pipelines are present", 3)}.`,
            ],
          },
          {
            status: "unknown",
            confidence: "Low",
            title: "Template behavior, notification rules, and deposit enforcement still need direct proof",
            summary:
              "These are launch-critical surfaces, but they are not yet fully reflected inside the current dossier.",
            sourceType: "Needs GHL export",
            sourceRef:
              "Workflow templates, form messaging settings, notification rules, and payment/deposit rules",
            lastVerified: verifiedLabel,
            bullets: [
              "Calendar confirmation and reminder templates need proof.",
              "Deposit enforcement needs direct verification.",
              "Form submission behavior is reachable in GHL, but the page still needs the exact message and rule evidence.",
              "Report-card delivery and webcam access gating still need a proven loop.",
            ],
          },
        ],
      },
      {
        id: "live-ghl",
        navLabel: "GHL Snapshot",
        kind: "snapshot",
        eyebrow: "Live GHL Snapshot",
        title: "What the active location already contains",
        description:
          "The live account is now important enough to treat as its own surface. This section makes the page feel operational instead of hand-wavy.",
        groups: [
          {
            title: "Service Calendar Layer",
            label: "Scheduling",
            body:
              "Client-facing services are already represented as distinct calendar concepts in the location.",
            items: serviceCalendars.length
              ? serviceCalendars
              : [
                  "Grooming Services",
                  "Daycare Services",
                  "Training Services",
                  "Events Calendar",
                ],
          },
          {
            title: "Facility + Yard Inventory",
            label: "Capacity",
            body:
              "Boarding and daycare physical-space concepts are already modeled in calendars rather than only in notes or tribal knowledge.",
            items: facilityCalendars.length
              ? facilityCalendars
              : [
                  "Private Play",
                  "Social Yard",
                  "Puppy Play",
                  "K9 Kottages",
                  "Doggie Digs",
                ],
          },
          {
            title: "Custom Object Layer",
            label: "Schema",
            body:
              "The account already reflects an opinionated object model instead of forcing everything into contact fields.",
            items: customObjectKeys.length
              ? customObjectKeys
              : [
                  "custom_objects.pets",
                  "custom_objects.vaccine_records",
                  "custom_objects.reports",
                  "custom_objects.pet_icons",
                  "custom_objects.veterinarians",
                ],
          },
          {
            title: "Pipeline + Field Layer",
            label: "Operations",
            body:
              "Pipeline structure exists, and field count confirms that the account is not early-stage configuration anymore.",
            items: [
              `${live.counts.pipelines} live pipelines`,
              `${live.counts.customFields} live custom fields`,
              pipelineNames.length
                ? joinNames(pipelineNames, "Appointment pipelines present", 3)
                : "Medford Appointments | Mt. Laurel Appointments | Training Sessions",
            ],
          },
        ],
        accessCards: [
          {
            status: live.access.workflows?.status ?? "partial",
            title: "Workflows",
            body:
              live.access.workflows?.note ??
              "Workflow definitions remain only partially verified with the current API access. Export or broader scope is still needed.",
          },
          {
            status: live.access.forms?.status ?? "partial",
            title: "Forms + Surveys",
            body:
              live.access.forms?.note ??
              "Form and survey proof is still incomplete. Customer-facing messaging and completion rules need direct screenshots or export artifacts.",
          },
          {
            status: "unknown",
            title: "Payments + Deposits",
            body:
              "Deposit rules are described in docs, but payment enforcement still needs direct GHL or checkout proof before it can be treated as launch-ready.",
          },
        ],
      },
      {
        id: "comparison",
        navLabel: "Comparison",
        kind: "comparison",
        eyebrow: "Current Vs Final Matrix",
        title: "The comparison matrix is the center of gravity for the finished PawHootz map",
        description:
          "This is the layer that makes the page PawHootz-specific rather than a renamed Champs artifact. It shows exactly where the current build is ahead, behind, or structurally different from the intended launch state.",
        note:
          "The most important columns are not Current and Target. The most important columns are Gap, Priority, and Owner lane.",
        rows: [
          {
            domain: "Client Auth",
            current:
              "Functional login and registration exist, but password logic still relies on a contact custom field pattern.",
            target:
              "Launch-ready auth with proper credential handling, reset flow, and clear household identity model.",
            gap:
              "Replace contact-field password handling and define the final auth boundary before launch.",
            priority: "Critical",
            owner: "Portal engineering + product",
          },
          {
            domain: "Household + Pet Records",
            current:
              "Client portal and staff portal both use pets as a real custom object with CRUD and associations.",
            target:
              "One stable household-to-pet source of truth with explicit ownership and no field drift across surfaces.",
            gap:
              "Close schema drift and ensure every required field is intentionally owned and synchronized.",
            priority: "High",
            owner: "Portal engineering + GHL config",
          },
          {
            domain: "Vaccines",
            current:
              "Upload and staff review flows exist using custom_objects.vaccine_records.",
            target:
              "Canonical vaccine policy, reliable expiry logic, notification rules, and gating across every relevant journey.",
            gap:
              "Finish policy normalization, reminder logic, and proof for gate behavior in every service line.",
            priority: "High",
            owner: "Product + GHL config",
          },
          {
            domain: "Boarding",
            current:
              "Boarding booking exists with lodging and run logic, but stay-state operating design is still not fully closed.",
            target:
              "Boarding flow with deposits, forms, communications, and clear staff-operating states.",
            gap:
              "Resolve whether appointments alone are enough or whether a true stay object or equivalent state model is required.",
            priority: "Critical",
            owner: "Product + portal engineering + GHL config",
          },
          {
            domain: "Daycare",
            current:
              "Daycare behaves mostly like package selection and staff follow-up rather than full self-serve booking.",
            target:
              "Intentional daycare operating model with evaluation, approval, package logic, scheduling, and payment flow.",
            gap:
              "Decide the final daycare model before pushing deeper UI polish or automation work.",
            priority: "Critical",
            owner: "Product + operations",
          },
          {
            domain: "Grooming",
            current:
              "Self-serve grooming booking exists with service and add-on logic in the client portal.",
            target:
              "Production grooming flow with final matrix rules, form gating, deposits, and reminder templates.",
            gap:
              "Verify duration matrix, form requirements, and payment or deposit behavior in live GHL configuration.",
            priority: "High",
            owner: "Portal engineering + GHL config",
          },
          {
            domain: "Training",
            current:
              "Selection and booking flows exist, plus note or task writeback and a training pipeline.",
            target:
              "Closed-loop sales, scheduling, payment, and reminder model for training packages and sessions.",
            gap:
              "Training sales workflow and payment logic remain partially operational rather than fully explicit.",
            priority: "High",
            owner: "Product + GHL config",
          },
          {
            domain: "Report Cards + Media",
            current:
              "UI and object foundations exist, but the end-to-end content creation and client delivery loop is not fully proven.",
            target:
              "Staff-generated report cards with media, customer delivery, and searchable history per pet.",
            gap:
              "Prove creation workflow, customer delivery behavior, and source-of-truth ownership for report content.",
            priority: "High",
            owner: "Portal engineering + staff workflow",
          },
          {
            domain: "Webcams",
            current:
              "Webcam routes and iDogCam integration work exist in the client portal.",
            target:
              "Controlled webcam access based on the correct live boarding or daycare state, with cleaner UX and supportability.",
            gap:
              "Tie access rules to a stable stay or attendance state instead of a brittle manual pattern.",
            priority: "Medium",
            owner: "Portal engineering",
          },
          {
            domain: "Staff Operations",
            current:
              "Staff portal already supports calendar operations, messaging, notes, media, and vaccine review.",
            target:
              "One coherent operational workspace with status truth, task discipline, and launch-ready SOP alignment.",
            gap:
              "Reduce note-driven state handling and formalize the source of truth for operational status.",
            priority: "High",
            owner: "Operations + staff portal engineering",
          },
          {
            domain: "Automations + Messaging",
            current:
              "Docs and code show intended messaging triggers, but many customer-facing templates still depend on unverified GHL configuration.",
            target:
              "Export-backed workflow inventory with confirmed reminders, confirmations, cancellations, and follow-up paths.",
            gap:
              "Capture workflow exports, template names, and notification settings into the dossier.",
            priority: "Critical",
            owner: "GHL config",
          },
          {
            domain: "Cutover",
            current:
              "Migration and mapping docs exist, but there is no executable cutover runbook yet.",
            target:
              "Dry-run-ready launch sequence with data freeze rules, rollback posture, QA gates, and owner sign-off.",
            gap:
              "Translate planning docs into an operational cutover checklist with dates, owners, and test evidence.",
            priority: "Critical",
            owner: "Project lead + QA + operations",
          },
        ],
      },
      {
        id: "journeys",
        navLabel: "Journeys",
        kind: "journeys",
        eyebrow: "Journey Lanes",
        title: "The journey view keeps the architecture tied to real service operations",
        description:
          "System decisions only matter if they improve the real client and staff journeys. These lanes show where the current build already carries weight and where the operating model still needs closure.",
        cards: [
          {
            audience: "New Household",
            title: "Onboarding, pets, vet info, and vaccine readiness",
            current:
              "Clients can register, log in, add pets, manage household data, and upload vaccine documents.",
            target:
              "A closed-loop onboarding path with application completion, policy gates, vaccine readiness, and clear next-step messaging.",
            closure:
              "Tie new-client application proof, waiver status, and payment profile requirements into the same readiness model.",
            steps: [
              "Register household account",
              "Add pet and veterinarian information",
              "Upload vaccine records",
              "Complete required application or waivers",
              "Unlock service-specific booking gates",
            ],
          },
          {
            audience: "Boarding Client",
            title: "Boarding selection, eligibility, and stay lifecycle",
            current:
              "Clients can move through boarding service selection and appointment creation, but the final stay-state model is still unresolved.",
            target:
              "A boarding flow with deposits, forms, lodging logic, pre-arrival readiness, in-stay visibility, and clean check-out follow-up.",
            closure:
              "Close the stay-model decision before tying webcams, report cards, and communications tightly to boarding state.",
            steps: [
              "Pass boarding eligibility and form gates",
              "Select lodging and add-ons",
              "Create the correct booking or stay record",
              "Expose staff-operating states during the stay",
              "Deliver departure follow-up and recap",
            ],
          },
          {
            audience: "Daycare Client",
            title: "Evaluation-first daycare model",
            current:
              "Daycare currently behaves more like package selection plus staff follow-up than a finished self-serve flow.",
            target:
              "An intentional evaluation, approval, package, payment, and attendance model that matches how PawHootz actually operates.",
            closure:
              "Choose whether daycare remains request-first or becomes partially self-serve after evaluation approval.",
            steps: [
              "Express interest or select package",
              "Trigger evaluation and readiness checks",
              "Approve yard or attendance eligibility",
              "Collect payment and package state",
              "Allow the correct scheduling path",
            ],
          },
          {
            audience: "Grooming + Training Client",
            title: "Service booking with reminders, payment, and follow-up",
            current:
              "Grooming and training booking flows already exist and push real operational payloads.",
            target:
              "Production service flows with final pricing logic, reminder templates, deposits, and post-service follow-up.",
            closure:
              "Export and prove the GHL-side reminder, deposit, and follow-up behaviors instead of assuming they are configured correctly.",
            steps: [
              "Choose service or package",
              "Validate readiness and eligibility",
              "Book the correct calendar slot",
              "Send confirmations and reminders",
              "Close the loop with notes, payment, and service recap",
            ],
          },
        ],
      },
      {
        id: "data-model",
        navLabel: "Data Model",
        kind: "boundaries",
        eyebrow: "Data Model + System Boundaries",
        title: "The final build needs explicit ownership by object, not just by page",
        description:
          "This is where the map moves from UI inventory to system architecture. Each record type needs a clear home and a clear rule for who is allowed to mutate it.",
        cards: [
          {
            label: "Household",
            title: "Contact remains the household anchor",
            body:
              "Primary client identity, communication preferences, payment readiness, and household-level onboarding state should live here. Avoid burying operational pet state inside contact notes or ad-hoc fields.",
          },
          {
            label: "Pet",
            title: "Pets are the canonical pet profile",
            body:
              "Breed, size, service attributes, behavioral notes, icons, and service eligibility should resolve through the pet object rather than duplicated field clusters.",
          },
          {
            label: "Vaccine",
            title: "Vaccine records stay document-centric",
            body:
              "Each vaccine should preserve type, dates, document source, and review status so the approval and expiry loop remains auditable.",
          },
          {
            label: "Appointment",
            title: "Appointments should own the scheduled service instance",
            body:
              "Use appointments for confirmed scheduling. Do not overload them with every operational fact if the stay or attendance model becomes more complex.",
          },
          {
            label: "Report",
            title: "Reports should own service recap content",
            body:
              "Report cards, photos, and narrative recap content should have one explicit home, one creation workflow, and one client-delivery path.",
          },
          {
            label: "Reference",
            title: "Veterinarians and pet icons are already useful support objects",
            body:
              "These live objects show that PawHootz is already beyond a single-object CRM design. Keep using that advantage intentionally.",
          },
        ],
        callouts: [
          {
            type: "warning",
            title: "Major Boundary Decision Still Open",
            bullets: [
              "Boarding and possibly daycare still need a clear decision on whether appointments are sufficient or whether a true stay or attendance record is needed.",
              "That decision affects webcams, report cards, operational status, and launch reporting.",
            ],
          },
          {
            type: "success",
            title: "What Is Already Working In Our Favor",
            bullets: [
              "The live location already uses custom objects instead of flattening everything into contact fields.",
              "That gives us a cleaner path to a durable operating system if we keep the boundaries disciplined.",
            ],
          },
        ],
      },
      {
        id: "governance",
        navLabel: "Ownership",
        kind: "ownership",
        eyebrow: "Governance + QA Ownership",
        title: "The map needs named owner lanes even if individual names are added later",
        description:
          "Without owner lanes, the system map stays descriptive. These lanes make it executable.",
        cards: [
          {
            title: "Product + Operations",
            bullets: [
              "Own final service policies, gating rules, daycare model, and stay-model decisions.",
              "Approve SOP alignment for staff workflows and launch sequencing.",
              "Decide what is mandatory for go-live versus phase-two polish.",
            ],
          },
          {
            title: "Portal Engineering",
            bullets: [
              "Own auth redesign, portal consistency, booking-flow closure, webcam and report-card integration, and UI evidence capture.",
              "Keep schema usage aligned with the live GHL object model.",
            ],
          },
          {
            title: "GHL Configuration",
            bullets: [
              "Own workflows, templates, forms, surveys, calendars, deposit rules, and field governance.",
              "Provide export-backed proof so the map can show configuration truth instead of assumptions.",
            ],
          },
          {
            title: "QA + Cutover",
            bullets: [
              "Own launch checklist, dry-run evidence, migration validation, rollback posture, and readiness sign-off.",
              "Convert documentation into a date-bound operational runbook.",
            ],
          },
        ],
      },
      {
        id: "decisions",
        navLabel: "Decisions",
        kind: "decisions",
        eyebrow: "Decision Register",
        title: "These are the decisions worth closing before spending too much more effort on polish",
        description:
          "The highest-risk architecture gaps are not visual. They are control decisions that affect every downstream build choice.",
        cards: [
          {
            status: "critical",
            title: "Replace the current client auth model",
            recommendation:
              "Move away from contact-field password handling and adopt a proper credential pattern with reset and security hygiene.",
            consequence:
              "Without this change, the client portal remains functionally impressive but structurally unsafe for launch.",
          },
          {
            status: "critical",
            title: "Close the appointments-versus-stay decision",
            recommendation:
              "Use appointments for scheduling, then add a durable stay or attendance state model if boarding and daycare operations need more than time slots.",
            consequence:
              "This decision controls webcams, report cards, operational status, and reporting clarity.",
          },
          {
            status: "critical",
            title: "Define the final daycare operating model",
            recommendation:
              "Keep daycare request-first until evaluation, approval, package state, and payment rules are explicitly documented.",
            consequence:
              "If this stays fuzzy, the portal will keep oscillating between self-serve and staff-managed logic.",
          },
          {
            status: "high",
            title: "Prove deposit and payment enforcement",
            recommendation:
              "Capture direct GHL or checkout proof for deposit logic before treating any service flow as launch-ready.",
            consequence:
              "Docs may say deposits exist, but the launch risk lives in what the system actually enforces.",
          },
          {
            status: "high",
            title: "Formalize status truth in staff operations",
            recommendation:
              "Reduce note-driven status handling and define which surface owns operational truth for appointments, stays, and completion states.",
            consequence:
              "If status is not disciplined, downstream automation and reporting will remain brittle.",
          },
        ],
      },
      {
        id: "sequence",
        navLabel: "Sequence",
        kind: "timeline",
        eyebrow: "Cutover Sequence",
        title: "The map should end in an executable sequence, not just an architecture ideal",
        description:
          "A Champs-level artifact needs to show not only where the system is heading, but how it gets there without creating confusion during launch.",
        phases: [
          {
            phase: "Phase 1",
            title: "Freeze the operating model decisions",
            detail:
              "Close auth direction, daycare model, stay-state design, and payment or deposit posture so the build stops branching in multiple directions.",
            steps: [
              "Approve final auth approach",
              "Approve daycare operating model",
              "Approve stay-state ownership",
              "Confirm deposit rules by service line",
            ],
          },
          {
            phase: "Phase 2",
            title: "Lock configuration truth and evidence",
            detail:
              "Capture GHL exports, screenshot proof, and source references so the map reflects what is actually configured.",
            steps: [
              "Export workflows and templates",
              "Capture form and calendar notification settings",
              "Attach screenshot or export proof to each open evidence gap",
              "Refresh the live GHL summary snapshot",
            ],
          },
          {
            phase: "Phase 3",
            title: "Harden launch-critical surfaces",
            detail:
              "Focus engineering and configuration work on security, state discipline, and service flows that would break trust during launch.",
            steps: [
              "Replace insecure auth handling",
              "Close report-card and webcam gating loops",
              "Finalize payment and deposit enforcement",
              "Reduce note-driven operational truth where possible",
            ],
          },
          {
            phase: "Phase 4",
            title: "Run cutover rehearsal and sign-off",
            detail:
              "Treat launch like an operating event, not just a deployment. Prove the runbook before committing to the final switchover.",
            steps: [
              "Create dry-run migration checklist",
              "Run staff acceptance walk-throughs",
              "Capture rollback posture and owner approvals",
              "Set launch freeze and go-live checkpoints",
            ],
          },
        ],
      },
      {
        id: "launch-readiness",
        navLabel: "Readiness",
        kind: "launch",
        eyebrow: "Launch Readiness",
        title: "What is close, what is blocked, and what should happen next",
        description:
          "The page should be honest about readiness instead of rewarding optimism. This final section makes the next work explicit.",
        readinessCards: [
          {
            state: "partial",
            title: "Portal UX Surfaces",
            body:
              "Client and staff portals are materially real and visually credible, but launch-grade hardening and consistency work is still required.",
          },
          {
            state: "partial",
            title: "GHL Configuration",
            body:
              "Core calendars, objects, and fields are real. Workflow, forms, surveys, and payment enforcement still need export-backed proof.",
          },
          {
            state: "blocked",
            title: "Security + State Discipline",
            body:
              "Auth handling and the final operational source of truth still need direct corrective work before launch confidence is justified.",
          },
          {
            state: "blocked",
            title: "Cutover Runbook",
            body:
              "Migration planning exists, but there is not yet an executable cutover checklist with owner sign-off and rollback posture.",
          },
        ],
        blockers: [
          "Replace the current client auth model.",
          "Export and document workflows, templates, forms, and deposit rules.",
          "Close the stay-state and daycare-model decisions.",
          "Translate migration and QA docs into an operational cutover checklist.",
        ],
        nextActions: [
          "Capture screenshot-backed evidence from client portal, staff portal, and GHL surfaces.",
          "Refresh the live GHL snapshot whenever configuration changes materially.",
          "Use this page as the canonical comparison board during delivery, not just as a presentation artifact.",
        ],
      },
    ],
  };
}
