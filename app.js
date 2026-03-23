const siteData = {
  masthead: {
    eyebrow: "PawHootz System Architecture",
    title: "Current Build, Final Portal Architecture, and Migration Plan",
    lead:
      "PawHootz already has meaningful implementation across the Client Portal, Staff Portal, and GoHighLevel. This map is the working reference for what exists now, what the final system should become, and which decisions, integrations, and QA gates still need to be closed before full cutover away from Gingr.",
    chips: [
      "Client Portal",
      "Staff Portal",
      "GHL",
      "Migration",
      "Vaccines",
      "Booking",
      "Training",
      "Webcams",
      "Report Cards",
      "Payments",
      "Cutover",
    ],
  },
  statusCards: [
    {
      label: "Current State",
      text: "Partial but real implementation exists in all three surfaces: Client Portal, Staff Portal, and GHL.",
    },
    {
      label: "Final Target",
      text: "PawHootz runs a coherent client and staff operating system with stable records, gated booking, operational workflows, and migration readiness.",
    },
    {
      label: "Primary Risk",
      text: "The main problem is alignment: schema drift, workflow proof gaps, security cleanup, and launch sequencing.",
    },
    {
      label: "Grounded On",
      text: "Local repo evidence plus a live GHL pull from the provided location on March 23, 2026.",
    },
  ],
  nav: [
    ["overview", "Overview"],
    ["current-build", "Current Build"],
    ["current-evidence", "Current Evidence"],
    ["target-architecture", "Target Architecture"],
    ["comparison", "Comparison"],
    ["journeys", "Journeys"],
    ["data-model", "Data Model"],
    ["ownership", "Ownership"],
    ["decisions", "Decisions"],
    ["sequence", "Sequence"],
    ["launch-readiness", "Launch Readiness"],
  ],
  sidebarSignals: [
    "19 live calendars are already configured in GHL.",
    "8 live objects exist, including reports, pet icons, and veterinarians.",
    "3 pipelines are live today, but broader pipeline coverage is still incomplete.",
    "Workflow, forms, and survey verification remains partial because the current token does not expose every surface.",
  ],
  sections: [],
  comparisonRows: [],
};

siteData.sections.push({
  id: "overview",
  eyebrow: "Project Reality",
  title: "This needs to work as both a system map and a build-control document",
  description:
    "The Champs map was primarily a dossier about the source system and target architecture. PawHootz needs a stronger middle layer because active build work already exists. The map has to show present implementation, final target design, and the gap between them in one place.",
  metrics: [
    {
      value: "19",
      label: "Live GHL Calendars",
      text: "The account is already structured around real facility and service operations, not a generic booking shell.",
    },
    {
      value: "8",
      label: "Live Objects",
      text: "Pets, vaccine records, reports, pet icons, and veterinarians are all real objects in the active location.",
    },
    {
      value: "3",
      label: "Live Pipelines",
      text: "Appointment and training pipeline structure exists, but launch-one operating coverage is still incomplete.",
    },
  ],
  infoCards: [
    {
      title: "What Is Real Today",
      body:
        "The Client Portal, Staff Portal, and GHL account all have live implementation. This is no longer a blank-slate planning exercise.",
    },
    {
      title: "What Is Still Risky",
      body:
        "Security hardening, workflow proof, deposit or payment verification, stay-state modeling, and cutover sequencing remain the main launch blockers.",
    },
  ],
});

siteData.sections.push({
  id: "current-build",
  eyebrow: "Current-State Build Map",
  title: "What PawHootz already has in progress today",
  description:
    "This section documents the real current build before discussing the ideal future state.",
  details: [
    {
      title: "Client Portal",
      status: "proven",
      summary:
        "Real customer-facing flows already exist and write to live GHL structures.",
      bullets: [
        "Registration and login exist.",
        "Multi-pet household management exists.",
        "Pet create, edit, and delete exists against custom_objects.pets.",
        "Vaccine upload exists against custom_objects.vaccine_records.",
        "Grooming booking, boarding booking, and training selection or booking all exist.",
        "Daycare still appears split between request-first and booking patterns.",
        "Webcam UI work exists, including dedicated routes and iDogCam integration code.",
        "Report card UI work exists, but end-to-end delivery proof is incomplete.",
      ],
    },
    {
      title: "Staff Portal",
      status: "proven",
      summary:
        "The staff side is materially real and already supports daily operational actions.",
      bullets: [
        "OAuth-based staff sign-in exists.",
        "Role-based flow exists for front desk and groomer usage.",
        "Daily schedule and shared calendar views exist.",
        "Staff can create, reschedule, and cancel appointments.",
        "Staff can add notes and tasks.",
        "Staff can send ad-hoc SMS and email.",
        "Staff can review and approve or reject vaccine records.",
        "Staff can upload and manage appointment media.",
      ],
    },
    {
      title: "GoHighLevel",
      status: "partial",
      summary:
        "The live account is substantially built out, but some automation surfaces remain only partially verified.",
      bullets: [
        "19 calendars exist in the live location.",
        "8 objects exist in the live location.",
        "3 pipelines exist in the live location.",
        "227 custom fields exist in the live location.",
        "Workflow, forms, and survey verification remains partial with the current token scope.",
      ],
    },
    {
      title: "Migration and Data Work",
      status: "partial",
      summary:
        "The repos already contain a lot of migration and audit work, but cutover is not yet operationalized.",
      bullets: [
        "Gingr-to-GHL mapping work exists.",
        "Custom field comparison work exists.",
        "Product and validation scripts exist.",
        "Data model and journey audits already exist in the portal repo.",
        "Cutover logic is still not an executable launch runbook.",
      ],
    },
  ],
});

siteData.sections.push({
  id: "current-evidence",
  eyebrow: "Evidence-Backed Current State",
  title: "What is proven, partial, and still unverified",
  description:
    "This section combines repo evidence and live GHL evidence instead of relying on memory or intent.",
  evidenceGroups: [
    {
      title: "Proven Client Portal Evidence",
      status: "proven",
      summary:
        "Customer-side functionality is already visible in code and routes.",
      bullets: [
        "Auth flow exists.",
        "Pet CRUD exists.",
        "Vaccine upload exists.",
        "Grooming booking exists.",
        "Boarding booking exists.",
        "Training selection and booking exists.",
        "Webcam routes and iDogCam pages exist.",
        "Report card page exists.",
      ],
    },
    {
      title: "Proven Staff Portal Evidence",
      status: "proven",
      summary:
        "Operational tools for day-to-day staff usage are already implemented.",
      bullets: [
        "Staff OAuth and role selection exist.",
        "Front desk operational workspace exists.",
        "Shared calendar workspace exists.",
        "Appointment create, reschedule, and cancel exists.",
        "Vaccine approval exists.",
        "SMS and email actions exist.",
        "Photo and media actions exist.",
      ],
    },
    {
      title: "Proven Live GHL Evidence",
      status: "proven",
      summary:
        "The active account already mirrors meaningful service and facility structure.",
      bullets: [
        "Calendars: Grooming Services, Daycare Services, Training Services, Events Calendar, Private Play, Social Yard, Puppy Play, Enrichment Runs, K9 Kottages, Doggie Digs, Rover Runs, CDC Runs, Texas Tails, Labrador Lounge, Bottom or Top Condo, Cat Condos, and personal staff calendars.",
        "Objects: custom_objects.pets, custom_objects.vaccine_records, custom_objects.reports, custom_objects.pet_icons, custom_objects.veterinarians.",
        "Pipelines: Medford Appointments, Mt. Laurel Appointments, Training Sessions.",
      ],
    },
    {
      title: "Partial or Unverified Surfaces",
      status: "unknown",
      summary:
        "These still need direct GHL proof or a broader-scope token.",
      bullets: [
        "Workflow definitions",
        "Forms and surveys",
        "Calendar notification behavior",
        "Deposit enforcement",
        "Report-card delivery loop",
        "Webcam access gating against active stay or check-in",
      ],
    },
  ],
  callouts: [
    {
      type: "warning",
      title: "Critical Repo Risks Already Visible",
      bullets: [
        "Client auth stores and validates a password through a contact custom field.",
        "The client repo still contains a hard-coded OpenAI key inside grooming-time logic.",
        "Status truth is still heavily note-driven in staff workflows.",
        "Old snapshot docs and the live location do not perfectly align.",
      ],
    },
    {
      type: "success",
      title: "What Changed After The Live GHL Pull",
      bullets: [
        "The account is more mature than the older snapshots suggested.",
        "Reports, pet icons, and veterinarians are already modeled as live custom objects.",
        "The map should now focus on alignment and proof, not on inventing the architecture from scratch.",
      ],
    },
  ],
});

siteData.sections.push({
  id: "target-architecture",
  eyebrow: "Final-State Architecture",
  title: "What the final PawHootz operating system should own",
  description:
    "The final architecture should not flatten everything into one CRM surface. Each layer needs a clean job.",
  details: [
    {
      title: "Own Directly In PawHootz + GHL",
      status: "proven",
      summary:
        "These are core operating truths that belong in the system.",
      bullets: [
        "Household identity and client access",
        "Pet profiles and associations",
        "Vaccine compliance and approval truth",
        "Required forms and waivers",
        "Service-specific booking paths",
        "Staff review tasks and internal notes",
        "Operational messaging and reminders",
        "Training enrollment and progress logic",
        "Report card generation and delivery",
      ],
    },
    {
      title: "Translate Carefully Before Launch",
      status: "partial",
      summary:
        "These areas are real, but the current implementation is not yet the final one.",
      bullets: [
        "Daycare evaluation and yard or group assignment",
        "Grooming time logic and coat classification",
        "Deposits and package logic by service line",
        "Stay lifecycle modeling",
        "Status truth for arrived, in service, and checked out",
        "Staff-side operational dashboards",
      ],
    },
    {
      title: "Keep Outside Or Integrate Lightly",
      status: "partial",
      summary:
        "Not every operational surface should be forced into GHL if the fit is weak.",
      bullets: [
        "Webcam vendor infrastructure",
        "Accounting system of record",
        "Highly facility-specific whiteboard behavior if GHL is not the right owner",
      ],
    },
  ],
});

siteData.sections.push({
  id: "comparison",
  eyebrow: "Current Build vs Final Build",
  title: "Where the system stands now and what still separates it from launch-ready",
  description:
    "This is the center of the PawHootz map and should stay the most prominent section on the page.",
});

siteData.sections.push({
  id: "journeys",
  eyebrow: "Operating Journeys",
  title: "How the final PawHootz experience should behave across services",
  description:
    "These journey cards connect the current implementation to the intended business behavior.",
  journeys: [
    {
      audience: "Client + Staff + GHL",
      title: "Onboarding and compliance journey",
      summary:
        "A new client creates an account, adds pets, completes required forms, uploads vaccine records, and becomes eligible only after the right approvals and gates pass.",
      steps: [
        "Client registers and logs in.",
        "Client adds pet and veterinarian details.",
        "Client uploads vaccine documents and any required forms.",
        "Staff reviews and approves records.",
        "GHL updates the account to eligible or still-blocked status.",
      ],
      result:
        "Booking paths open only when compliance truth is clean and staff-visible.",
    },
    {
      audience: "Client + Staff + GHL",
      title: "Boarding journey",
      summary:
        "Boarding should become a real stay lifecycle, not just an appointment write.",
      steps: [
        "Client passes compliance and onboarding gates.",
        "Client selects dates, lodging, and add-ons.",
        "Deposit and confirmation logic runs.",
        "Staff checks the pet in and manages stay-state operationally.",
        "Report cards, updates, and checkout complete the stay.",
      ],
      result:
        "Boarding behaves as an operational stay system, not a loose booking note.",
    },
    {
      audience: "Client + Staff + GHL",
      title: "Daycare journey",
      summary:
        "Daycare needs a clear final model: request-first or direct booking, but not both half-implemented.",
      steps: [
        "Client passes vaccine gates.",
        "Client either requests service or books directly based on the final business rule.",
        "Evaluation and group assignment are applied.",
        "Staff runs arrivals, notes, and updates against the correct operational model.",
      ],
      result:
        "Daycare becomes consistent across packages, schedules, yard assignments, and communications.",
    },
    {
      audience: "Client + Staff + GHL",
      title: "Grooming journey",
      summary:
        "Grooming already books, but the final version needs hardened classification, deposits, and staff override logic.",
      steps: [
        "Client selects service and pet details.",
        "Sizing and time logic is applied from an approved rule set.",
        "Deposit and confirmation rules are enforced.",
        "Staff can adjust operational details without breaking system truth.",
      ],
      result:
        "Grooming becomes predictable, auditable, and launch-safe.",
    },
    {
      audience: "Client + Staff + GHL",
      title: "Training journey",
      summary:
        "Training should extend beyond scheduling into qualification, enrollment, and progress tracking.",
      steps: [
        "Client selects a training path.",
        "Orientation or consultation gates are enforced if required.",
        "Staff assigns tier, credits, or enrollment status.",
        "Academy content and follow-up reporting remain connected to the same pet and household truth.",
      ],
      result:
        "Training becomes a real program lifecycle, not just a calendar event.",
    },
    {
      audience: "Client + Staff + GHL + Vendor",
      title: "Stay updates and webcam access journey",
      summary:
        "Updates, report cards, and webcams should activate only when the pet is in the right state and the stay model supports it cleanly.",
      steps: [
        "Staff marks arrival or in-service state through the final truth model.",
        "Reports and media are attached to the correct service or stay context.",
        "Client receives the correct update or sees the correct webcam access state.",
      ],
      result:
        "Customer-facing visibility becomes controlled, intentional, and supportable.",
    },
  ],
});

siteData.sections.push({
  id: "data-model",
  eyebrow: "Field and Object Design",
  title: "Which records carry truth in the final build",
  description:
    "This section defines where truth lives so the portals and GHL do not drift.",
  boundaryCards: [
    {
      label: "Contact",
      title: "Household identity and account truth",
      body:
        "Contact should carry household identity, onboarding truth, waivers, communication preferences, and payment readiness.",
    },
    {
      label: "Pet",
      title: "Core pet operating record",
      body:
        "Pet should hold core identity, service attributes, operational profile, and staff-facing context.",
    },
    {
      label: "Vaccine Record",
      title: "Compliance truth by document and date",
      body:
        "Vaccine records should keep document, type, status, and date-level truth instead of flattening everything onto the pet.",
    },
    {
      label: "Veterinarian",
      title: "Clinic and provider normalization",
      body:
        "The new veterinarians object is a strong candidate for final vet truth if the duplicate contact-field pattern is retired.",
    },
    {
      label: "Report",
      title: "Stay and service updates",
      body:
        "Reports can become the structured source for updates, report cards, and client-facing summaries if the object is activated intentionally.",
    },
    {
      label: "Pet Icon",
      title: "Operational flags and badges",
      body:
        "Pet icons can standardize staff-visible operational badges if tied to real workflows instead of staying decorative.",
    },
  ],
  callouts: [
    {
      type: "warning",
      title: "Main Architecture Decision Still Open",
      bullets: [
        "Does PawHootz need a true Stay object?",
        "If yes, webcam access, daily updates, report cards, check-in, check-out, and room assignment become easier to model cleanly.",
        "If no, appointments, notes, tags, and derived state need to be far more tightly structured than they are today.",
      ],
    },
  ],
});

siteData.sections.push({
  id: "ownership",
  eyebrow: "System Ownership",
  title: "What each surface should own and what should stay outside it",
  description:
    "This section keeps the portals and GHL from duplicating each other.",
  infoCards: [
    {
      title: "Client Portal Owns",
      list: [
        "Self-service entry",
        "Household and pet updates",
        "Document uploads",
        "Client-side booking and requests",
        "Client visibility of updates, reports, and webcams where allowed",
      ],
    },
    {
      title: "Staff Portal Owns",
      list: [
        "Approvals",
        "Daily operational status changes",
        "Note and task management",
        "Appointment operations",
        "Internal communication actions",
        "Exception handling",
      ],
    },
    {
      title: "GHL Owns",
      list: [
        "Records",
        "Tasks",
        "Workflows",
        "Templates",
        "Appointments",
        "Tags",
        "Pipeline truth",
        "CRM data integrity",
      ],
    },
    {
      title: "External Systems Own",
      list: [
        "Webcam vendor infrastructure",
        "Accounting system of record",
        "Any facility-specific tools that are not worth forcing into GHL",
      ],
    },
  ],
});

siteData.sections.push({
  id: "decisions",
  eyebrow: "Current Capability Decisions",
  title: "What must be decided now, later, or outside launch one",
  description:
    "This section makes architectural ambiguity visible before it turns into more implementation drift.",
  details: [
    {
      title: "Decide Now",
      status: "unknown",
      summary:
        "These decisions affect architecture, safety, and launch sequencing.",
      bullets: [
        "Replace current client auth model.",
        "Confirm appointments-only vs stay-object architecture.",
        "Define final daycare operating model.",
        "Define final deposit and payment enforcement model.",
        "Confirm live forms and waiver completion truth.",
        "Confirm how report cards are created and delivered.",
      ],
    },
    {
      title: "Can Defer To Phase Two",
      status: "partial",
      summary:
        "These improve the platform but should not block launch one if core operations are proven.",
      bullets: [
        "Expanded store logic",
        "Deeper analytics and reporting",
        "Broader whiteboard-style operations",
        "More advanced client personalization",
      ],
    },
    {
      title: "Do Not Force Into Launch One Without Proof",
      status: "unknown",
      summary:
        "These will create fragility if shipped on assumption instead of evidence.",
      bullets: [
        "Webcam behavior beyond what the vendor path safely supports",
        "Accounting workflows that are not reconciliation-safe",
        "Speculative AI features beyond narrow operational assistance",
      ],
    },
  ],
});

siteData.sections.push({
  id: "sequence",
  eyebrow: "Build and Cutover Sequence",
  title: "What order the remaining work should happen in",
  description:
    "Sequence is part of the architecture. The remaining work should be shown in dependency order.",
  timeline: [
    {
      phase: "Phase 0",
      title: "Lock the architecture",
      detail:
        "Close the core data-model and systems-of-record decisions before more feature work accumulates.",
      steps: [
        "Confirm the target data model.",
        "Resolve the stay-object decision.",
        "Resolve veterinarian truth model.",
        "Confirm which live GHL objects remain active.",
      ],
    },
    {
      phase: "Phase 1",
      title: "Clean and align GHL",
      detail:
        "The account is already built enough that cleanup and verification matter more than net-new setup.",
      steps: [
        "Finalize fields and object ownership.",
        "Verify forms and surveys.",
        "Verify workflows and templates.",
        "Verify pipelines and calendars.",
      ],
    },
    {
      phase: "Phase 2",
      title: "Harden Client Portal",
      detail:
        "Fix the public-surface risks and align writes to the final data model.",
      steps: [
        "Replace auth model.",
        "Align portal forms, booking gates, and data writes.",
        "Verify webcam and report-card entry points.",
      ],
    },
    {
      phase: "Phase 3",
      title: "Harden Staff Portal",
      detail:
        "Make staff workflows the stable daily operating console instead of a partially note-driven wrapper.",
      steps: [
        "Confirm operational source of truth for statuses.",
        "Align staff workflows to the final lifecycle model.",
        "Close appointment, media, and task gaps.",
      ],
    },
    {
      phase: "Phase 4",
      title: "Prove business-critical workflows",
      detail:
        "Run end-to-end proof against the business paths that matter most.",
      steps: [
        "Onboarding",
        "Vaccine approval",
        "Grooming",
        "Boarding",
        "Daycare",
        "Training",
        "Deposits",
        "Notifications",
        "Report cards",
      ],
    },
    {
      phase: "Phase 5",
      title: "Cutover readiness",
      detail:
        "Only after workflow proof should the migration and launch choreography become active.",
      steps: [
        "Freeze plan",
        "Delta migration",
        "Staff training",
        "Soft launch",
        "Final go-live",
      ],
    },
  ],
  callouts: [
    {
      type: "warning",
      title: "Hard Sequencing Rules",
      bullets: [
        "Do not continue public-facing launch work before auth is fixed.",
        "Do not treat workflows as complete until GHL exports or screenshots prove them.",
        "Do not rely on webcam or report-card promises before the delivery path is verified.",
        "Do not cut over from Gingr until location drift and migration documentation are resolved.",
      ],
    },
  ],
});

siteData.sections.push({
  id: "launch-readiness",
  eyebrow: "Pre-Go-Live Proof",
  title: "What must be true before PawHootz can cut over confidently",
  description:
    "This final section converts the map into a launch standard instead of a concept document.",
  details: [
    {
      title: "Data and Schema Proof",
      status: "partial",
      summary: "The final field map and object model need explicit approval.",
      bullets: [
        "Final field map approved",
        "Object ownership approved",
        "Location drift resolved",
      ],
    },
    {
      title: "Workflow Proof",
      status: "unknown",
      summary:
        "Messaging and workflow proof needs direct GHL verification beyond code intent.",
      bullets: [
        "Booking confirmations proven",
        "Reminder flows proven",
        "Vaccine notifications proven",
        "Report-card and follow-up logic proven",
      ],
    },
    {
      title: "Operational Proof",
      status: "partial",
      summary:
        "Staff should be able to run daily operations without ambiguity about truth or ownership.",
      bullets: [
        "Staff can process arrivals, in-service updates, and completion cleanly",
        "Grooming, daycare, boarding, and training all follow their intended final path",
      ],
    },
    {
      title: "Payment Proof",
      status: "unknown",
      summary:
        "Payment and reconciliation logic still needs live verification.",
      bullets: [
        "Deposits enforced as intended",
        "Payment truth visible to staff",
        "Accounting handoff or reconciliation path defined",
      ],
    },
    {
      title: "Migration Proof",
      status: "partial",
      summary:
        "Planning material exists, but cutover still needs a real runbook.",
      bullets: [
        "Final source mapping approved",
        "Test imports validated",
        "Cutover window and freeze rules agreed",
      ],
    },
    {
      title: "Staff Readiness Proof",
      status: "partial",
      summary:
        "The system is only launch-ready when the staff operating model is aligned to it.",
      bullets: [
        "Staff SOPs aligned to the new system",
        "Training session completed",
        "Soft-launch feedback captured",
      ],
    },
  ],
});

siteData.comparisonRows.push(
  {
    domain: "Client authentication",
    current:
      "Registration and login exist, but the portal currently stores and validates password data through a contact custom field.",
    target:
      "Secure production auth with password reset, hardened identity flow, and no CRM-field password dependency.",
    gap: "Replace current auth model before public launch.",
    priority: "Critical",
    owner: "Client Portal",
  },
  {
    domain: "Household profile",
    current:
      "Core contact-level account exists. Live GHL fields already include client type, onboarding status, waivers complete, payment profile on file, membership status, emergency contacts, and vet-related fields.",
    target:
      "Household profile becomes the clean client truth for onboarding, communication, forms, and payment readiness.",
    gap: "Normalize field usage and connect profile truth to workflows.",
    priority: "High",
    owner: "GHL",
  },
  {
    domain: "Pet model",
    current: "custom_objects.pets is live and used by the portal.",
    target:
      "Pet object becomes the stable operating record across client, staff, and GHL workflows.",
    gap: "Finalize required fields, naming, and update ownership.",
    priority: "Critical",
    owner: "Client Portal + GHL",
  },
  {
    domain: "Vaccine model",
    current:
      "custom_objects.vaccine_records is live; upload and approval flows exist.",
    target:
      "Service-aware vaccine compliance with proper expiry, approval, rejection, reminder, and booking gate behavior.",
    gap: "Finish automation, reminders, and service-specific gating proof.",
    priority: "Critical",
    owner: "Client Portal + Staff Portal + GHL",
  },
  {
    domain: "Veterinarian data",
    current:
      "Portal stores vet data, and live GHL now includes custom_objects.veterinarians.",
    target:
      "Move toward a cleaner veterinarian object strategy rather than duplicate contact-field storage.",
    gap: "Resolve whether vet truth lives in contact fields, custom object, or both.",
    priority: "High",
    owner: "GHL",
  },
  {
    domain: "Report cards",
    current:
      "Report card UI exists in the client portal; live GHL has custom_objects.reports.",
    target:
      "Report cards become a real operational loop with staff entry, media, client delivery, and stay linkage.",
    gap: "Connect UI, object model, and delivery automation.",
    priority: "High",
    owner: "Staff Portal + GHL",
  },
  {
    domain: "Pet icons and operational flags",
    current: "Live GHL includes custom_objects.pet_icons.",
    target:
      "Pet icons become the standardized place for safety and operational badges visible to staff.",
    gap: "Decide how icons relate to status, notes, and staff UI.",
    priority: "Medium",
    owner: "Staff Portal + GHL",
  },
  {
    domain: "Grooming booking",
    current:
      "Real booking flow exists. Current code still includes a hard-coded grooming-time AI helper that should not survive production.",
    target:
      "Production grooming flow with approved sizing logic, duration rules, deposits, notifications, and staff overrides.",
    gap: "Replace temporary logic and formalize the grooming model.",
    priority: "High",
    owner: "Client Portal + GHL + Staff Portal",
  },
  {
    domain: "Boarding booking",
    current:
      "Real booking flow exists and creates appointments. Live calendars show multiple boarding and lodging structures.",
    target:
      "Boarding handles eligibility, lodging options, add-ons, deposits, stay state, check-in, check-out, and customer communications.",
    gap: "Finish stay-state, deposits, messaging, and operational handoff.",
    priority: "Critical",
    owner: "Client Portal + Staff Portal + GHL",
  },
  {
    domain: "Daycare flow",
    current:
      "Current implementation appears split between request-first behavior and direct scheduling concepts. Live calendars show social, private, and puppy-play structures.",
    target:
      "Final daycare model clearly defines request vs booking, evaluation, yard or group assignment, package logic, and follow-up workflow.",
    gap: "Resolve the product and workflow model; current build is not final.",
    priority: "Critical",
    owner: "Business + GHL + Client Portal",
  }
);

siteData.comparisonRows.push(
  {
    domain: "Training flow",
    current:
      "Training selection and session booking exist. Live GHL has a dedicated Training Sessions pipeline.",
    target:
      "Training includes orientation or consultation gating, tier assignment, credits or packages, academy progress, and report-card behavior.",
    gap: "Complete the lifecycle beyond session booking.",
    priority: "High",
    owner: "Client Portal + Staff Portal + GHL",
  },
  {
    domain: "Webcams",
    current:
      "Webcam routes, iDogCam service code, and dedicated pages exist.",
    target:
      "Webcam access is production-gated to eligible pets during active stays only.",
    gap: "Verify vendor flow, gating rules, and client-safe access control.",
    priority: "High",
    owner: "Client Portal + Integration",
  },
  {
    domain: "Staff scheduling",
    current:
      "Staff portal supports schedule views and calendar management.",
    target:
      "Staff portal becomes the main daily operating console, not just a calendar wrapper.",
    gap: "Expand from appointment management to full floor operations alignment.",
    priority: "High",
    owner: "Staff Portal",
  },
  {
    domain: "Staff status tracking",
    current:
      "Current status progression appears to rely on [STATUS] notes for Arrived, In Service, and Completed.",
    target:
      "Final operational state is structured and reliable for reporting, report cards, webcam access, and service lifecycle logic.",
    gap: "Decide whether truth lives in notes, fields, tasks, or a stay object.",
    priority: "Critical",
    owner: "Staff Portal + GHL",
  },
  {
    domain: "Appointments vs stay model",
    current:
      "The current build leans heavily on appointments. Older docs debated a true stay object; live GHL now includes reports and pet icons but no proven stay object.",
    target:
      "Final system makes an explicit decision: appointments-only plus metadata, or a dedicated stay object for boarding and daycare operations.",
    gap: "This is still a real architecture decision and affects multiple downstream features.",
    priority: "Critical",
    owner: "Architecture",
  },
  {
    domain: "Payments and deposits",
    current:
      "Payment profile fields exist in GHL; portal flows mention deposits, but enforcement is not yet fully proven.",
    target:
      "Service-specific payment logic, deposits, package handling, and reconciliation-ready flows.",
    gap: "Prove the actual payment architecture before launch.",
    priority: "Critical",
    owner: "GHL + Payments",
  },
  {
    domain: "Memberships, packages, and store",
    current: "Membership or store work exists in partial form.",
    target:
      "Clean product strategy across retail, memberships, subscriptions, service packages, and accounting behavior.",
    gap: "Decide launch-one scope vs later phases.",
    priority: "Medium",
    owner: "GHL + Client Portal",
  },
  {
    domain: "Communications",
    current:
      "Staff-authored SMS and email exists. Automated workflows, forms, and templates were not fully accessible with the provided token.",
    target:
      "Consistent lifecycle messaging for onboarding, booking, reminders, vaccines, stay updates, report cards, and follow-up.",
    gap: "Export or verify workflows and templates directly in GHL.",
    priority: "Critical",
    owner: "GHL",
  },
  {
    domain: "Forms and waivers",
    current:
      "Embedded-form logic exists and some required-form behavior is documented, but full live proof is incomplete.",
    target:
      "Every required onboarding, grooming, training, and service form is digitized, tracked, and tied to booking gates.",
    gap: "Verify which forms are live, which are missing, and how completion truth is stored.",
    priority: "High",
    owner: "GHL + Client Portal",
  },
  {
    domain: "Pipelines",
    current:
      "Live GHL has three pipelines: Medford Appointments, Mt. Laurel Appointments, and Training Sessions.",
    target:
      "Final operating model may require broader pipeline coverage for onboarding, stays, store orders, and follow-up.",
    gap: "Pipeline strategy is partially implemented, not complete.",
    priority: "Medium",
    owner: "GHL",
  },
  {
    domain: "Reporting and reconciliation",
    current:
      "Live account structure suggests operational intent, but end-of-day financial and operational reporting proof remains limited.",
    target:
      "Reliable reporting for attendance, revenue, capacity, tasks, updates, and reconciliation.",
    gap: "Reporting model is still underdefined in execution terms.",
    priority: "Medium",
    owner: "Staff Portal + GHL",
  },
  {
    domain: "Migration and cutover",
    current:
      "Mapping, comparison docs, and scripts exist. Some repo docs still reference an older location snapshot than the live account.",
    target:
      "A clean cutover runbook with freeze window, delta migration, QA sign-off, staff training, and rollback posture.",
    gap: "Resolve location drift, finalize source-of-truth docs, and convert planning into execution.",
    priority: "Critical",
    owner: "Migration",
  }
);

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderBulletList(items, className = "detail-list") {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderStatusChip(status) {
  const labelMap = { proven: "Proven", partial: "Partial", unknown: "Unknown" };
  return `<span class="status-chip status-${status}">${labelMap[status] || status}</span>`;
}

function renderPriorityChip(priority) {
  const tone = priority.toLowerCase();
  return `<span class="priority-chip priority-${tone}">${escapeHtml(priority)}</span>`;
}

function renderMasthead() {
  $("#masthead-copy").innerHTML = `
    <span class="eyebrow">${escapeHtml(siteData.masthead.eyebrow)}</span>
    <h1>${escapeHtml(siteData.masthead.title)}</h1>
    <p class="lead">${escapeHtml(siteData.masthead.lead)}</p>
    <div class="chip-cloud">
      ${siteData.masthead.chips
        .map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`)
        .join("")}
    </div>
  `;

  $("#masthead-status").innerHTML = siteData.statusCards
    .map(
      (card) => `
        <article class="detail-card">
          <p class="artifact-label">${escapeHtml(card.label)}</p>
          <p>${escapeHtml(card.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderSidebar() {
  $("#sidebar-nav").innerHTML = siteData.nav
    .map(
      ([id, label]) =>
        `<a class="sidebar-link" href="#${escapeHtml(id)}">${escapeHtml(label)}</a>`
    )
    .join("");

  $("#sidebar-signals").innerHTML = `
    <p class="sidebar-label">Live Signals</p>
    ${renderBulletList(siteData.sidebarSignals, "signal-list")}
  `;
}

function renderSectionHeader(section) {
  return `
    <header class="section-header">
      <span class="eyebrow">${escapeHtml(section.eyebrow)}</span>
      <h2>${escapeHtml(section.title)}</h2>
      <p>${escapeHtml(section.description)}</p>
    </header>
  `;
}

function renderOverview(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="metric-grid">
        ${section.metrics
          .map(
            (metric) => `
              <article class="metric-card">
                <p class="metric-value">${escapeHtml(metric.value)}</p>
                <h3 class="metric-label">${escapeHtml(metric.label)}</h3>
                <p>${escapeHtml(metric.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="info-grid">
        ${section.infoCards
          .map(
            (card) => `
              <article class="info-card">
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDetailCards(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="card-grid">
        ${section.details
          .map(
            (item) => `
              <article class="detail-card">
                ${renderStatusChip(item.status)}
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.summary)}</p>
                ${renderBulletList(item.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderEvidence(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="accordion-grid">
        ${section.evidenceGroups
          .map(
            (group, index) => `
              <details class="domain-card" ${index < 2 ? "open" : ""}>
                <summary>
                  ${renderStatusChip(group.status)}
                  <h3>${escapeHtml(group.title)}</h3>
                  <p>${escapeHtml(group.summary)}</p>
                </summary>
                <div class="summary-copy">
                  ${renderBulletList(group.bullets)}
                </div>
              </details>
            `
          )
          .join("")}
      </div>
      <div class="callout-grid">
        ${section.callouts
          .map(
            (card) => `
              <article class="callout-card ${escapeHtml(card.type)}">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderBulletList(card.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderComparison(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="comparison-wrap">
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Current Build</th>
              <th>Final Build Target</th>
              <th>Gap</th>
              <th>Priority</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            ${siteData.comparisonRows
              .map(
                (row) => `
                  <tr>
                    <td><span class="comparison-domain">${escapeHtml(
                      row.domain
                    )}</span></td>
                    <td>${escapeHtml(row.current)}</td>
                    <td>${escapeHtml(row.target)}</td>
                    <td>${escapeHtml(row.gap)}</td>
                    <td>${renderPriorityChip(row.priority)}</td>
                    <td>${escapeHtml(row.owner)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <p class="comparison-note">
        The comparison table should remain the visual center of the finished map. It is the part that makes PawHootz specific instead of feeling like a renamed Champs artifact.
      </p>
    </section>
  `;
}

function renderJourneys(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="journey-grid">
        ${section.journeys
          .map(
            (journey) => `
              <article class="journey-card">
                <p class="journey-audience">${escapeHtml(journey.audience)}</p>
                <h4>${escapeHtml(journey.title)}</h4>
                <p>${escapeHtml(journey.summary)}</p>
                <ol class="compact-list">
                  ${journey.steps
                    .map((step) => `<li>${escapeHtml(step)}</li>`)
                    .join("")}
                </ol>
                <p class="journey-result"><strong>Result:</strong> ${escapeHtml(
                  journey.result
                )}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderBoundarySection(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="boundary-grid">
        ${section.boundaryCards
          .map(
            (card) => `
              <article class="boundary-card">
                <p class="boundary-label">${escapeHtml(card.label)}</p>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="callout-grid">
        ${section.callouts
          .map(
            (card) => `
              <article class="callout-card ${escapeHtml(card.type)}">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderBulletList(card.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderOwnership(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="info-grid">
        ${section.infoCards
          .map(
            (card) => `
              <article class="info-card">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderBulletList(card.list)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSequence(section) {
  return `
    <section id="${section.id}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="timeline-grid">
        ${section.timeline
          .map(
            (phase) => `
              <article class="timeline-card">
                <p class="timeline-phase">${escapeHtml(phase.phase)}</p>
                <h3>${escapeHtml(phase.title)}</h3>
                <p>${escapeHtml(phase.detail)}</p>
                ${renderBulletList(phase.steps, "compact-list")}
              </article>
            `
          )
          .join("")}
      </div>
      <div class="callout-grid">
        ${section.callouts
          .map(
            (card) => `
              <article class="callout-card ${escapeHtml(card.type)}">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderBulletList(card.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSections() {
  const fragments = siteData.sections.map((section) => {
    switch (section.id) {
      case "overview":
        return renderOverview(section);
      case "current-build":
      case "target-architecture":
      case "decisions":
      case "launch-readiness":
        return renderDetailCards(section);
      case "current-evidence":
        return renderEvidence(section);
      case "comparison":
        return renderComparison(section);
      case "journeys":
        return renderJourneys(section);
      case "data-model":
        return renderBoundarySection(section);
      case "ownership":
        return renderOwnership(section);
      case "sequence":
        return renderSequence(section);
      default:
        return "";
    }
  });

  $("#main-content").innerHTML = fragments.join("");
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  nodes.forEach((node) => observer.observe(node));
}

renderMasthead();
renderSidebar();
renderSections();
setupReveal();
