# Pawhootz System Map Outline

## Recommended Positioning

This should not be framed as a simple "Pawhootz version of the Champs map."

It should be framed as:

**PawHootz System Map: Current Build, Final Architecture, and Cutover Plan**

That title makes the document do three jobs at once:

1. Show the business and technical model.
2. Show what is already built.
3. Show what still must be closed before launch and cutover.

---

## Recommended Page Structure

### 1. Masthead

**Eyebrow:** `PawHootz System Architecture`

**Title:** `Current Build, Final Portal Architecture, and Migration Plan`

**Lead copy:**
This map is the working reference for how PawHootz should operate across the Client Portal, Staff Portal, GoHighLevel, and supporting integrations. It shows what exists now, what the final system should become, and which gaps still need to be closed before cutover away from Gingr.

**Status cards:**

- `Current state`: Partial build exists across Client Portal, Staff Portal, and GHL configuration.
- `Final target`: Client-facing and staff-facing workflows run through a stable PawHootz operating system.
- `Primary constraint`: Some critical logic still depends on GHL configuration, integrations, and unresolved data-model decisions.

---

### 2. Sidebar Navigation

Use these exact anchors:

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

## Section-by-Section Outline

### 3. Section: `overview`

**Eyebrow:** `Project reality`

**Title:** `This needs to function as both a system map and a build-control document`

**Description:**
PawHootz is not starting from zero. There is already active work across the Client Portal, Staff Portal, and GoHighLevel. This map needs to show the real current implementation, the final operating model, and the specific gaps between them.

**Suggested content blocks:**

- `Metric card`: Current build areas in progress
- `Metric card`: Final-state domains to prove
- `Metric card`: High-risk unresolved decisions

**Suggested chips:**

- `Client Portal`
- `Staff Portal`
- `GHL`
- `Gingr migration`
- `Vaccines`
- `Booking`
- `Training`
- `Payments`
- `Webcams`
- `Reporting`

---

### 4. Section: `current-build`

**Eyebrow:** `Current-state build map`

**Title:** `What PawHootz already has in progress today`

**Description:**
This section should inventory the live or partially-built PawHootz system, not the desired future state. The goal is to make the current implementation visible before discussing improvements.

**Subsections:**

- `Client Portal - current state`
- `Staff Portal - current state`
- `GHL - current state`
- `Migration and data work - current state`

**Recommended content for Client Portal - current state:**

- Registration and login exist.
- Household and multi-pet management exist.
- Pet create/edit/delete exists.
- Vaccine upload exists.
- Grooming, boarding, and training booking or request flows exist in some form.
- Daycare is partially implemented as a request-and-follow-up flow rather than a true booking flow.
- Membership/store presence is partial.
- Checkout, report cards, webcam access, and full post-stay flows are not yet complete.

**Recommended content for Staff Portal - current state:**

- Staff login and role-based workflow exist.
- Daily schedule and appointment views exist.
- Staff can move pets through operational statuses.
- Staff can add notes and tasks.
- Vaccine approval and rejection exist.
- Staff can send ad-hoc SMS and email.
- Staff-side reporting/report-card/store fulfillment features appear partial or uneven and should be shown honestly.

**Recommended content for GHL - current state:**

- Some custom fields and objects exist in snapshots.
- Some booking flows are already using appointments.
- Workflow/template proof is incomplete.
- Roles, automations, notifications, deposits, and some pipeline logic remain partly configured or unproven.

**Recommended content for migration and data work - current state:**

- Gingr-to-GHL mapping work exists.
- Product and field comparison work exists.
- Some validation and QA scripts exist.
- Final cutover rules and delta-import plan are still not closed.

---

### 5. Section: `current-evidence`

**Eyebrow:** `Evidence-backed current state`

**Title:** `What is proven, partial, and still unverified`

**Description:**
This section should replace the Champs screenshot-audit approach with a mixed evidence layer: app screens, docs, configuration snapshots, and GHL exports.

**Recommended evidence groups:**

- `Client Portal evidence`
- `Staff Portal evidence`
- `GHL configuration evidence`
- `Migration evidence`

**Card structure for each evidence item:**

- `Title`
- `Artifact`
- `What it proves`
- `Why it matters`
- `Status`: `Proven`, `Partial`, or `Unknown`

**Initial evidence items to include:**

- Client login and registration flow
- Pet CRUD workflow
- Vaccine upload workflow
- Grooming booking flow
- Boarding booking flow
- Training selection and booking flow
- Daycare request flow
- Staff schedule dashboard
- Vaccine approval modal
- Staff SMS/email actions
- Current custom fields snapshot
- Current pet object / vaccine object schema snapshot
- Any GHL workflows/templates export you can provide

---

### 6. Section: `target-architecture`

**Eyebrow:** `Final-state architecture`

**Title:** `What the final PawHootz operating system should own`

**Description:**
This section should show the final operating model after cleanup, alignment, and launch readiness. It should focus on ownership and behavior, not just features.

**Recommended architecture domains:**

- `Client account and household identity`
- `Pet profile and safety/compliance`
- `Booking and scheduling`
- `Staff operations`
- `Training academy`
- `Payments, deposits, and packages`
- `Communications and automations`
- `Media, webcams, and report cards`
- `Reporting and reconciliation`
- `Migration archive and external dependencies`

**Recommended “own / translate / keep outside” framing:**

- `Own directly in PawHootz + GHL`
- `Translate carefully before launch`
- `Keep outside core portal stack`

**Examples:**

- Own directly:
  - household profile
  - pet records
  - vaccine status
  - waivers
  - core booking paths
  - staff review tasks
  - client notifications

- Translate carefully:
  - daycare evaluation and group assignment
  - grooming sizing/time logic
  - training enrollment and tier logic
  - stay lifecycle logic
  - deposits and package rules

- Keep outside or integrate lightly:
  - webcams vendor system
  - accounting system of record
  - any facility-specific whiteboard or drag/drop operational layer if GHL is not the right owner

---

### 7. Section: `comparison`

**Eyebrow:** `Current build vs final build`

**Title:** `Where the system stands now and what still separates it from launch-ready`

**Description:**
This should be the center of the PawHootz map. It is the section that makes the document specific to PawHootz instead of a reused Champs artifact.

**Recommended table columns:**

- `Domain`
- `Current build`
- `Final build target`
- `Gap`
- `Priority`
- `Owner`

## Comparison Matrix Content

| Domain | Current build | Final build target | Gap | Priority | Owner |
|---|---|---|---|---|---|
| Client authentication | Portal login/register exists, but current auth approach needs review and hardening. | Secure production-ready auth with stable account access, reset flows, and role-safe separation. | Replace weak auth assumptions and close security/identity gaps. | Critical | Portal + GHL |
| Household profile | Contact-level account exists with core household data. | Clean household record with onboarding status, waivers, payment readiness, communication preferences, and staff visibility. | Expand field coverage and connect profile truth to workflows. | High | GHL |
| Pet records | Multi-pet CRUD exists with pet object associations. | Stable pet object model used consistently across client portal, staff portal, and GHL automations. | Finalize schema, naming, and required fields. | Critical | Portal + GHL |
| Vet and vaccine management | Vet info and vaccine upload exist; review flow exists in staff portal. | Full vaccine compliance model with approval, rejection, expiry tracking, reminders, and booking gates by service. | Formalize rules, statuses, notifications, and expiry automation. | Critical | Portal + Staff + GHL |
| Waivers and forms | Some onboarding form assumptions exist, but proof of full waiver layer is incomplete. | All required client, grooming, training, and service forms digitized with staff override and completion truth. | Build or verify missing form flows and completion tracking. | High | GHL + Portal |
| Grooming booking | Booking flow exists with estimate logic and service selection. | Production grooming flow with final sizing matrix, duration logic, add-ons, deposits, notifications, and staff overrides. | Replace temporary logic and align to final grooming operating model. | High | Portal + GHL + Staff |
| Boarding booking | Booking flow exists with date selection and appointment creation. | Full boarding flow with eligibility checks, deposits, lodging choices, stay lifecycle, and check-in/check-out logic. | Add deposit enforcement, stay-state handling, and complete customer/staff communications. | Critical | Portal + GHL + Staff |
| Daycare flow | Current portal behaves more like a package/request flow than direct booking. | Clear final model for daycare: request-first or direct booking, with evaluation gating, group assignment, package logic, and follow-up automation. | Resolve product and workflow ambiguity; current approach is not final. | Critical | Business + GHL + Portal |
| Training flow | Product selection and some session booking exist. | Orientation/consultation gate, training tier assignment, package or credit logic, academy content, and progress tracking. | Build prerequisite gating and make training lifecycle coherent end to end. | High | Portal + GHL + Staff |
| Staff operations | Staff can see schedule, update status, add notes, approve vaccines, and send messages. | Staff portal becomes the operational command surface for arrivals, in-service pets, approvals, updates, report cards, and issue handling. | Extend from scheduling tools to full daily operations parity. | Critical | Staff Portal |
| Status tracking | Current status progression is note-driven in staff workflows. | Stable operational state model for booked, arrived, in service, checked out, cancelled, and follow-up states. | Decide whether status lives in notes, fields, tasks, or a stay object. | Critical | Staff + GHL |
| Stay / reservation model | Appointments are doing most of the current booking work. | Clear final decision on whether PawHootz needs a dedicated stay object or can rely on appointments plus structured metadata. | Architectural decision remains open and affects reporting, webcams, daily updates, and report cards. | Critical | Architecture |
| Payments and deposits | Some pricing/deposit assumptions exist, but enforcement is incomplete. | Service-specific deposits, package purchases, memberships, payment profile truth, and reconciliation-ready flows. | Wire real payment logic and accounting-safe handling. | Critical | GHL + Payments |
| Store / memberships / packages | Partial memberships/store presence exists. | Full product strategy for retail, service packages, subscriptions, and membership logic. | Decide what belongs in portal now vs later and connect to accounting rules. | Medium | GHL + Portal |
| Communications | Staff-authored SMS/email exists; automated templates/workflows are not fully proven. | Consistent lifecycle messaging for onboarding, booking, reminders, vaccine notices, stay updates, report cards, and review requests. | Export, audit, and complete workflow/template layer. | Critical | GHL |
| Daily updates and report cards | Mentioned in planning and partially supported on staff side, but not fully proven end to end. | Staff can send scheduled pup-dates, tucked-in updates, and final report cards with client visibility. | Finish workflow loop and define final source of truth for delivery. | High | Staff + GHL |
| Webcams | Desired, but current integration proof is limited. | Webcam access only when a pet is checked in and authorized, with clear vendor integration boundaries. | Confirm vendor method, access rules, and portal UX. | Medium | Integration |
| Custom fields and object schema | Comparison docs and snapshots exist; alignment is incomplete. | Final approved schema for contact, pet, vaccine, training, and possibly stay objects. | Close naming, type, and ownership inconsistencies before more build work accumulates. | Critical | GHL |
| Roles and permissions | Some role patterns exist in portal and staff workflows. | Explicit client, front desk, groomer, trainer, manager, and admin permissions across all surfaces. | Formalize access model and prevent accidental overreach. | High | Portal + Staff + GHL |
| Reporting and reconciliation | End-of-day and business reporting are discussed, not fully proven. | Revenue, attendance, capacity, task, and service reporting with reliable daily operational views. | Reporting model is still underdefined. | Medium | Staff + GHL |
| Migration and cutover | Mapping work and scripts exist; final cutover plan is not closed. | Defined freeze window, delta migration, QA sign-off, staff training, and launch sequence away from Gingr. | Convert migration work into an executable cutover runbook. | Critical | Migration |

**Recommended companion cards under the table:**

- `Critical blockers before launch`
- `High-value items already in progress`
- `Open architectural decisions`

---

### 8. Section: `journeys`

**Eyebrow:** `Operating journeys`

**Title:** `How the final PawHootz experience should behave across services`

**Description:**
This section should show both plain-language journeys and system-language journeys for boarding, daycare, grooming, and training.

**Recommended subsections:**

- `Plain-language client journeys`
- `System-language workflow journeys`

**Exact journey cards to include:**

- `Boarding journey`
- `Daycare journey`
- `Grooming journey`
- `Training journey`
- `Onboarding and compliance journey`
- `Stay update and report-card journey`

**Journey structure:**

- `Audience`
- `Journey title`
- `Summary`
- `Steps`
- `Result`

---

### 9. Section: `data-model`

**Eyebrow:** `Field and object design`

**Title:** `Which records carry truth in the final build`

**Description:**
This section should explain where truth lives in PawHootz so the portals and GHL do not drift.

**Recommended subsections:**

- `Contact / household object`
- `Pet object`
- `Vaccine record object`
- `Training enrollment or package logic`
- `Stay / reservation decision`
- `Appointments vs objects vs tasks`

**Recommended decision table columns:**

- `Record or field group`
- `Current source of truth`
- `Final source of truth`
- `Why`

**Must-cover decision topics:**

- Contact vs pet vs vaccine ownership
- Whether to create a real `STAY` object
- Where grooming-specific logic lives
- Where training tier and credits live
- Which fields are client-editable vs staff-only

---

### 10. Section: `ownership`

**Eyebrow:** `System ownership`

**Title:** `What each surface should own and what should stay outside it`

**Description:**
This section prevents overlap and duplication across Client Portal, Staff Portal, GHL, and external tools.

**Recommended ownership groups:**

- `Client Portal owns`
- `Staff Portal owns`
- `GHL owns`
- `External systems own`

**Example ownership rules:**

- Client Portal owns self-service entry, household updates, pet updates, uploads, and customer-facing requests or bookings.
- Staff Portal owns approvals, daily operations, statuses, notes, internal actions, and exception handling.
- GHL owns records, workflows, messaging, appointments, tasks, and CRM truth.
- External systems own webcams and possibly accounting, unless a stronger integration path is proven.

---

### 11. Section: `decisions`

**Eyebrow:** `Current capability decisions`

**Title:** `What must be decided now, later, or not inside the first launch`

**Description:**
This section should make unresolved decisions visible so the build does not continue on assumptions.

**Recommended decision cards:**

- `Decide now`
- `Can defer to phase two`
- `Do not force into launch one`

**High-priority decisions to list explicitly:**

- Does PawHootz need a real `STAY` object?
- Is daycare request-first or direct-booking?
- How are deposits enforced by service line?
- What is the final payment and accounting model?
- What is the webcam integration method?
- How will report cards and daily updates be delivered?
- Which workflows are required before public launch?

---

### 12. Section: `sequence`

**Eyebrow:** `Build and cutover sequence`

**Title:** `What order the remaining work should happen in`

**Description:**
Sequence is part of architecture. This section should show the dependency order from schema cleanup through cutover.

**Recommended phases:**

- `Phase 0`: Confirm architecture and schema
- `Phase 1`: Lock GHL fields, objects, calendars, roles, and forms
- `Phase 2`: Align Client Portal to final data model
- `Phase 3`: Align Staff Portal to final operations model
- `Phase 4`: Complete workflows, deposits, messaging, and reporting
- `Phase 5`: Migration QA, cutover rehearsal, and launch

**Suggested hard sequencing rules:**

- Do not continue feature buildout before the final schema is approved.
- Do not expose public booking until vaccine gates, notifications, and deposit rules are verified.
- Do not promise webcam/report-card flows before vendor and workflow proof exists.
- Do not cut over from Gingr before delta migration and staff training are scheduled.

---

### 13. Section: `launch-readiness`

**Eyebrow:** `Pre-go-live proof`

**Title:** `What must be true before PawHootz can cut over confidently`

**Description:**
This final section should convert the map into a launch standard.

**Recommended launch-readiness categories:**

- `Data and schema proof`
- `Workflow and messaging proof`
- `Operational proof`
- `Payments and reconciliation proof`
- `Migration proof`
- `Staff readiness proof`

**Examples of readiness checks:**

- New client can register, add pet, upload vaccines, and complete required forms.
- Staff can review and approve vaccines.
- Grooming, boarding, daycare, and training each follow the intended final path.
- Deposits and notifications work correctly.
- Daily updates/report-card logic works if in scope for launch.
- Cutover plan, freeze date, and rollback posture are documented.

---

## Recommended Visual Framing

The Champs map was dossier-style. PawHootz should keep that tone, but the visual emphasis should shift toward comparison and readiness.

**Recommended visual patterns:**

- `Current build` cards use a muted operational color.
- `Final build` cards use a stronger forward-state color.
- `Gap` or `risk` cards use a distinct warning color.
- `Proven / Partial / Unknown` chips appear throughout the page.
- Comparison matrix should be a prominent scrollable table, not buried.

---

## Recommended Opening Summary Copy

Use something close to this at the top of the map:

PawHootz already has meaningful build progress across the Client Portal, Staff Portal, and GoHighLevel. The problem is no longer defining a vision from scratch. The problem is aligning the current build to the final operating model, closing the missing architecture decisions, and sequencing the remaining work so launch and cutover can happen without operational drift.

---

## Recommended Immediate Next Inputs

To sharpen this from strong draft to final map content, the highest-value references would be:

1. Live PawHootz Client Portal access or screen captures.
2. Live Staff Portal access or screen captures.
3. GHL exports or screenshots for:
   - custom fields
   - custom objects
   - calendars
   - workflows
   - forms
   - templates
   - pipelines
4. Any current cutover or migration checklist you are actually using.

