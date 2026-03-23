# PawHootz System Map Draft

## Working Title

**PawHootz System Map: Current Build, Final Architecture, and Cutover Plan**

This should be the production title unless you want a shorter client-facing variant.

---

## Core Framing

This document should position PawHootz as an active in-flight build, not a hypothetical migration plan.

The document needs to answer four questions clearly:

1. What already exists across the Client Portal, Staff Portal, and GHL?
2. What should the final PawHootz operating system own?
3. What gaps still separate the current build from launch-ready operations?
4. In what order should the remaining work, migration, and cutover happen?

---

## Recommended Navigation

Use these section anchors in the final page:

- `overview`
- `current-build`
- `current-evidence`
- `target-architecture`
- `comparison`
- `journeys`
- `data-model`
- `ownership`
- `decisions`
- `sequence`
- `launch-readiness`

---

## 1. Masthead

**Eyebrow:** `PawHootz System Architecture`

**Title:** `Current Build, Final Portal Architecture, and Migration Plan`

**Lead Copy:**
PawHootz already has meaningful implementation across the Client Portal, Staff Portal, and GoHighLevel. This map is the working reference for what exists now, what the final system should become, and which decisions, integrations, and QA gates still need to be closed before full cutover away from Gingr.

**Status Cards:**

- `Current state`
  Partial but real implementation exists in all three surfaces: Client Portal, Staff Portal, and GHL.

- `Final target`
  PawHootz runs a coherent client and staff operating system with stable records, gated booking, operational workflows, and migration readiness.

- `Primary risk`
  The main problem is no longer lack of concept. The main problem is alignment: schema drift, workflow proof gaps, security cleanup, and launch sequencing.

---

## 2. Section: `overview`

**Eyebrow:** `Project reality`

**Title:** `This needs to work as both a system map and a build-control document`

**Description:**
The Champs map was primarily a dossier about the source system and target architecture. PawHootz needs a stronger middle layer. Because active build work already exists, the map has to show present implementation, final target design, and the gap between them in one place.

**Recommended metrics:**

- `Client Portal`: Real user-facing flows exist today.
- `Staff Portal`: Real operational tooling exists today.
- `GHL`: Live account structure is materially built out, but not fully validated end to end.

**Suggested chips:**

- `Client Portal`
- `Staff Portal`
- `GHL`
- `Migration`
- `Vaccines`
- `Booking`
- `Training`
- `Webcams`
- `Report Cards`
- `Payments`
- `Cutover`

---

## 3. Section: `current-build`

**Eyebrow:** `Current-state build map`

**Title:** `What PawHootz already has in progress today`

**Description:**
This section should document the real current build before discussing the ideal future state.

### Client Portal: Current State

- Registration and login exist.
- Multi-pet household management exists.
- Pet create, edit, and delete exists against `custom_objects.pets`.
- Vaccine upload exists against `custom_objects.vaccine_records`.
- Grooming booking exists.
- Boarding booking exists.
- Training selection and booking exists.
- Daycare appears split between request-first and booking patterns and is not fully settled.
- Webcam UI work exists, including dedicated webcam routes and iDogCam integration code.
- Report card UI work exists, but end-to-end proof is incomplete.
- Membership and package experience exists in partial form.

### Staff Portal: Current State

- OAuth-based staff sign-in exists.
- Role-based flow exists for front desk and groomer usage.
- Daily schedule and shared calendar views exist.
- Staff can create, reschedule, and cancel appointments.
- Staff can add notes and tasks.
- Staff can send ad-hoc SMS and email.
- Staff can review and approve or reject vaccine records.
- Staff can upload and manage appointment media.
- Status progression exists, but current operational truth appears heavily note-driven.

### GHL: Current State

Live GHL evidence from the provided location confirms:

- `19` calendars exist.
- `8` objects exist.
- `3` pipelines exist.
- `227` custom fields exist in the location.

The account is not a bare setup. It already contains real operational structure.

### Migration Work: Current State

- Gingr-to-GHL mapping work exists.
- Custom field comparison work exists.
- Product and validation scripts exist.
- Data model and journey audits already exist in the portal repo.
- Cutover logic is still not fully operationalized into a launch runbook.

---

## 4. Section: `current-evidence`

**Eyebrow:** `Evidence-backed current state`

**Title:** `What is proven, partial, and still unverified`

**Description:**
This section should combine repo evidence and live GHL evidence. It should not rely on memory or intention.

### Proven Client Portal Evidence

- Auth flow exists.
- Pet CRUD exists.
- Vaccine upload exists.
- Grooming booking exists.
- Boarding booking exists.
- Training selection and booking exists.
- Webcam routes and iDogCam pages exist.
- Report card page exists.

### Proven Staff Portal Evidence

- Staff OAuth and role selection exist.
- Front desk operational workspace exists.
- Shared calendar workspace exists.
- Appointment create/reschedule/cancel exists.
- Vaccine approval exists.
- SMS and email actions exist.
- Photo/media actions exist.

### Proven Live GHL Evidence

**Calendars currently live**

- Grooming Services
- Daycare Services
- Training Services
- Events Calendar
- Private Play
- Social Yard
- Puppy Play
- Enrichment Runs
- K9 Kottages
- Doggie Digs
- Rover Runs
- CDC Runs
- Texas Tails
- Labrador Lounge
- Bottom/Top Condo
- Cat Condos
- Personal calendars for named staff users

This is important because it shows the account already reflects actual facility operations, not just a generic booking shell.

**Custom objects currently live**

- `custom_objects.pets`
- `custom_objects.vaccine_records`
- `custom_objects.reports`
- `custom_objects.pet_icons`
- `custom_objects.veterinarians`

This is important because it means the current target-state data model has already evolved beyond the older docs and snapshots.

**Pipelines currently live**

- `Medford Appointments`
- `Mt. Laurel Appointments`
- `Training Sessions`

### Partial or Unverified Evidence

- Workflow definitions could not be fully verified with the provided token.
- Forms and surveys could not be fully verified with the provided token.
- Calendar notification behavior still needs direct proof.
- Deposit enforcement still needs direct proof.
- Report-card delivery loop still needs direct proof.
- Webcam access gating against active stay/check-in still needs direct proof.

---

## 5. Section: `target-architecture`

**Eyebrow:** `Final-state architecture`

**Title:** `What the final PawHootz operating system should own`

**Description:**
The final architecture should not flatten everything into one CRM surface. It should give each layer a clear job.

### PawHootz + GHL should directly own

- Household identity and client account access
- Pet profiles and pet associations
- Vaccine compliance and approval truth
- Required forms and waivers
- Service-specific booking paths
- Staff review tasks and internal notes
- Operational messaging and reminders
- Training enrollment and progress logic
- Report card generation and delivery

### These areas need careful translation

- Daycare evaluation and yard/group assignment
- Grooming time logic and classification
- Deposits and package logic by service line
- Stay lifecycle modeling
- Status truth for arrived / in service / checked out
- Staff-side operational dashboards

### These areas may stay outside the core portal stack

- Webcam vendor infrastructure
- Accounting system of record
- Highly facility-specific whiteboard behavior if GHL is not the right owner

---

## 6. Section: `comparison`

**Eyebrow:** `Current build vs final build`

**Title:** `Where the system stands now and what still separates it from launch-ready`

**Description:**
This is the center of the map. It is the section that makes PawHootz specific and operationally useful.

### Comparison Matrix

| Domain | Current build | Final build target | Gap | Priority | Owner |
|---|---|---|---|---|---|
| Client authentication | Registration and login exist, but the portal currently stores and validates password data through a contact custom field. | Secure production auth with password reset, hardened identity flow, and no CRM-field password dependency. | Replace current auth model before public launch. | Critical | Client Portal |
| Household profile | Core contact-level account exists. Live GHL fields include client type, onboarding status, waivers complete, payment profile on file, membership status, emergency contacts, and vet-related fields. | Household profile becomes the clean client truth for onboarding, communication, forms, and payment readiness. | Normalize field usage and connect profile truth to workflows. | High | GHL |
| Pet model | `custom_objects.pets` is live and used by the portal. | Pet object becomes the stable operating record across client, staff, and GHL workflows. | Finalize required fields, naming, and update ownership. | Critical | Client Portal + GHL |
| Vaccine model | `custom_objects.vaccine_records` is live; upload and approval flows exist. | Service-aware vaccine compliance with proper expiry, approval, rejection, reminder, and booking gate behavior. | Finish automation, reminders, and service-specific gating proof. | Critical | Client Portal + Staff Portal + GHL |
| Veterinarian data | Portal stores vet data; live GHL also now includes `custom_objects.veterinarians`. | Move toward a cleaner veterinarian object strategy rather than duplicate contact-field storage. | Resolve whether vet truth lives in contact fields, custom object, or both. | High | GHL |
| Report cards | Report card UI exists in the client portal; live GHL has `custom_objects.reports`. | Report cards become a real operational loop with staff entry, media, client delivery, and stay linkage. | Connect UI, object model, and delivery automation. | High | Staff Portal + GHL |
| Pet icons / operational flags | Live GHL includes `custom_objects.pet_icons`. | Pet icons become the standardized place for safety and operational badges visible to staff. | Decide how icons relate to status, notes, and staff UI. | Medium | Staff Portal + GHL |
| Grooming booking | Real booking flow exists. Current code still includes a hard-coded grooming-time AI helper that should not survive production. | Production grooming flow with approved sizing logic, duration rules, deposits, notifications, and staff overrides. | Replace temporary logic and formalize the grooming model. | High | Client Portal + GHL + Staff Portal |
| Boarding booking | Real booking flow exists and creates appointments. Live calendars show multiple boarding/lodging structures. | Boarding flow handles eligibility, lodging options, add-ons, deposits, stay state, check-in/check-out, and customer communications. | Finish stay-state, deposits, messaging, and operational handoff. | Critical | Client Portal + Staff Portal + GHL |
| Daycare flow | Current implementation appears split between request-first behavior and direct scheduling concepts. Live calendars show social, private, and puppy-play structures. | Final daycare model should clearly define request vs booking, evaluation, yard/group assignment, package logic, and follow-up workflow. | Resolve the product and workflow model; current build is not final. | Critical | Business + GHL + Client Portal |
| Training flow | Training selection and session booking exist. Live GHL has a dedicated Training Sessions pipeline. | Training should include orientation/consultation gating, tier assignment, credits or packages, academy progress, and report-card behavior. | Complete the lifecycle beyond session booking. | High | Client Portal + Staff Portal + GHL |
| Webcams | Webcam routes, iDogCam service code, and dedicated pages exist. | Webcam access should be production-gated to eligible pets during active stays only. | Verify vendor flow, gating rules, and client-safe access control. | High | Client Portal + Integration |
| Staff scheduling | Staff portal supports schedule views and calendar management. | Staff portal becomes the main daily operating console, not just a calendar wrapper. | Expand from appointment management to full floor operations alignment. | High | Staff Portal |
| Staff status tracking | Current status progression appears to rely on `[STATUS]` notes for Arrived, In Service, and Completed. | Final operational state should be structured and reliable for reporting, reporting cards, webcam access, and service lifecycle logic. | Decide whether truth lives in notes, fields, tasks, or a stay object. | Critical | Staff Portal + GHL |
| Appointments vs stay model | The current build leans heavily on appointments. Older docs debated a true stay object; live GHL now includes reports and pet-icons but no proven stay object. | Final system needs an explicit decision: appointments-only plus metadata, or a dedicated stay object for boarding/daycare operations. | This is still a real architecture decision and affects multiple downstream features. | Critical | Architecture |
| Payments and deposits | Payment profile fields exist in GHL; portal flows mention deposits, but enforcement is not yet fully proven. | Service-specific payment logic, deposits, package handling, and reconciliation-ready flows. | Prove the actual payment architecture before launch. | Critical | GHL + Payments |
| Memberships, packages, and store | Membership/store work exists in partial form. | Clean product strategy across retail, memberships, subscriptions, service packages, and accounting behavior. | Decide launch-one scope vs later phases. | Medium | GHL + Client Portal |
| Communications | Staff-authored SMS/email exists. Automated workflows, forms, and templates were not fully accessible with the provided token. | Consistent lifecycle messaging for onboarding, booking, reminders, vaccines, stay updates, report cards, and follow-up. | Export or verify workflows and templates directly in GHL. | Critical | GHL |
| Forms and waivers | Embedded-form logic exists and some required-form behavior is documented, but full live proof is incomplete. | Every required onboarding, grooming, training, and service form is digitized, tracked, and tied to booking gates. | Verify which forms are live, which are missing, and how completion truth is stored. | High | GHL + Client Portal |
| Pipelines | Live GHL has three pipelines: Medford Appointments, Mt. Laurel Appointments, and Training Sessions. | Final operating model may require broader pipeline coverage for onboarding, stays, store orders, and follow-up. | Pipeline strategy is partially implemented, not complete. | Medium | GHL |
| Reporting and reconciliation | Live account structure suggests operational intent, but end-of-day financial and operational reporting proof remains limited. | Reliable reporting for attendance, revenue, capacity, tasks, updates, and reconciliation. | Reporting model is still underdefined in execution terms. | Medium | Staff Portal + GHL |
| Migration and cutover | Mapping, comparison docs, and scripts exist. Some repo docs still reference an older location snapshot than the live account. | A clean cutover runbook with freeze window, delta migration, QA sign-off, staff training, and rollback posture. | Resolve location drift, finalize source-of-truth docs, and convert planning into execution. | Critical | Migration |

### Critical Launch Blockers

- Current client auth model is not launch-safe.
- Workflow and template layer is still not fully proven.
- Deposit/payment behavior is not fully verified.
- Status truth is still structurally weak.
- Appointments vs stay-object decision is still not fully closed.
- Migration/cutover plan is not yet an executable runbook.

### High-Value Work Already Done

- Real client-facing flows exist.
- Real staff-facing operations tooling exists.
- Live GHL account structure is materially built.
- Webcam, report-card, veterinarian, and operational-icon concepts are already present in code or GHL.

---

## 7. Section: `journeys`

**Eyebrow:** `Operating journeys`

**Title:** `How the final PawHootz experience should behave across services`

**Description:**
This section should show business journeys in plain language and then connect them to the system surfaces.

### Required Journey Cards

- `Onboarding and compliance journey`
- `Boarding journey`
- `Daycare journey`
- `Grooming journey`
- `Training journey`
- `Stay updates and report-card journey`
- `Webcam access journey`

### Journey Format

- `Audience`
- `Summary`
- `Steps`
- `System surfaces involved`
- `Result`

---

## 8. Section: `data-model`

**Eyebrow:** `Field and object design`

**Title:** `Which records carry truth in the final build`

**Description:**
This section should define where truth lives so the portals and GHL do not drift.

### Recommended Truth Model

- `Contact`
  Household identity, onboarding truth, waivers, communication preferences, payment readiness.

- `Pet`
  Core pet identity, operational profile, service attributes, staff-facing safety context.

- `Vaccine Record`
  Vaccine-specific document, type, status, dates, and approval flow.

- `Veterinarian`
  Standardized clinic and provider information if the new custom object is kept as the source of truth.

- `Report`
  Stay- and service-related updates, notes, and client-facing summaries if the report object becomes active.

- `Pet Icon`
  Operational flags and visual badges if adopted as a real staff workflow element.

### Main Data-Model Decision Still Open

Does PawHootz need a real `Stay` object?

If yes:

- webcam access
- daily updates
- report cards
- check-in/check-out
- room assignment
- service lifecycle reporting

all become easier to model cleanly.

If no:

- appointments, tags, notes, and derived logic will need to be very carefully structured.

---

## 9. Section: `ownership`

**Eyebrow:** `System ownership`

**Title:** `What each surface should own and what should stay outside it`

**Description:**
This section should prevent duplicated logic across the portals and GHL.

### Client Portal Owns

- self-service entry
- household and pet updates
- document uploads
- client-side booking and requests
- client visibility of updates, reports, and webcams where allowed

### Staff Portal Owns

- approvals
- daily operational status changes
- note and task management
- appointment operations
- internal communication actions
- exception handling

### GHL Owns

- records
- tasks
- workflows
- templates
- appointments
- tags
- pipeline truth
- CRM data integrity

### External Systems Own

- webcam vendor infrastructure
- accounting system of record
- any facility-specific tools not worth forcing into GHL

---

## 10. Section: `decisions`

**Eyebrow:** `Current capability decisions`

**Title:** `What must be decided now, later, or outside launch one`

**Description:**
This section should make architectural ambiguity visible before it turns into more implementation drift.

### Decide Now

- Replace current client auth model.
- Confirm appointments-only vs stay-object architecture.
- Define final daycare operating model.
- Define final deposit and payment enforcement model.
- Confirm live forms and waiver completion truth.
- Confirm how report cards are created and delivered.

### Can Defer to Phase Two

- Expanded store logic
- deeper analytics and reporting
- broader whiteboard-style operations
- more advanced client personalization

### Do Not Force Into Launch One Without Proof

- webcam behavior beyond what the vendor path safely supports
- accounting workflows that are not reconciliation-safe
- speculative AI features beyond narrow operational assistance

---

## 11. Section: `sequence`

**Eyebrow:** `Build and cutover sequence`

**Title:** `What order the remaining work should happen in`

**Description:**
Sequence is part of architecture. The remaining work should be shown in dependency order.

### Phase 0: Lock the architecture

- confirm the target data model
- resolve stay-object decision
- resolve veterinarian truth model
- confirm which live GHL objects remain active

### Phase 1: Clean and align GHL

- finalize fields and object ownership
- verify forms and surveys
- verify workflows and templates
- verify pipelines and calendars

### Phase 2: Harden Client Portal

- replace auth model
- align portal forms, booking gates, and data writes
- verify webcam and report-card entry points

### Phase 3: Harden Staff Portal

- confirm operational source of truth for statuses
- align staff workflows to the final lifecycle model
- close any appointment/media/task gaps

### Phase 4: Prove business-critical workflows

- onboarding
- vaccine approval
- grooming
- boarding
- daycare
- training
- deposits
- notifications
- report cards

### Phase 5: Cutover readiness

- freeze plan
- delta migration
- staff training
- soft launch
- final go-live

### Hard Sequencing Rules

- Do not continue public-facing launch work before auth is fixed.
- Do not treat workflows as complete until GHL exports or screenshots prove them.
- Do not rely on webcam or report-card promises before the delivery path is verified.
- Do not cut over from Gingr until location drift and migration documentation are resolved.

---

## 12. Section: `launch-readiness`

**Eyebrow:** `Pre-go-live proof`

**Title:** `What must be true before PawHootz can cut over confidently`

**Description:**
This final section should convert the map into a go-live standard.

### Data and Schema Proof

- final field map approved
- object ownership approved
- location drift resolved

### Workflow Proof

- booking confirmations proven
- reminder flows proven
- vaccine notifications proven
- report-card and follow-up logic proven

### Operational Proof

- staff can process arrivals, in-service updates, and completion cleanly
- grooming, daycare, boarding, and training all follow their intended final path

### Payment Proof

- deposits enforced as intended
- payment truth visible to staff
- accounting handoff or reconciliation path defined

### Migration Proof

- final source mapping approved
- test imports validated
- cutover window and freeze rules agreed

### Staff Readiness Proof

- staff SOPs aligned to the new system
- training session completed
- soft-launch feedback captured

---

## Live GHL Notes To Explicitly Mention In The Map

These are worth surfacing in the page because they materially change how “current state” should be described:

- The live account is already operating with multiple service and facility calendars.
- The live account already contains `reports`, `pet_icons`, and `veterinarians` objects, which means the account has evolved beyond older snapshots and docs.
- The live account already has appointment pipelines by location and training.
- The provided token did not fully expose workflows/forms/surveys, so those areas still require direct verification in GHL UI or a broader-scope token.

---

## Recommended Final Positioning Sentence

Use something close to this at the top of the finished map:

PawHootz is no longer in the “vision planning” phase. The system already exists in partial form across the Client Portal, Staff Portal, and GoHighLevel. The purpose of this map is to align that current build to the final operating model, expose the remaining architectural and workflow gaps, and make cutover away from Gingr executable instead of theoretical.

