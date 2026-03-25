# Champ's Dog House System Map - Complete Extracted Content

**Source:** https://champs-system-map.vercel.app/
**Extracted from:** Minified Vite/React bundle (`/assets/index-ho4u9V2Y.js`, ~293KB)

---

## SITE IDENTITY

- **Eyebrow:** Strategics AI / Champ's Dog House
- **Title:** Detailed System Map
- **Lead:** Audited Gingr current state, build-ready HighLevel target architecture, capability constraints, migration mapping, and build sequence before the new sub-account is touched.
- **Status chips:** "Gingr fully audited" | "No GHL build started" | "Pre-build decision packet"
- **Supporting text:** This version is meant to support client review, internal alignment, and technical handoff without forcing people to read the raw markdown packet first.

---

## NAVIGATION (12 sections)

| ID | Label |
|----|-------|
| overview | Overview |
| gingr-screenshots | Gingr Screenshots |
| gingr-current | Current Gingr |
| ui-evidence | UI Evidence |
| highlevel-target | Target HighLevel |
| mapping | Mapping Matrix |
| flows | Journey Flows |
| field-inventory | Field Inventory |
| ownership-qa | Ownership and QA |
| decisions | Capability Decisions |
| roles-ai | Roles and AI |
| sequence | Build Sequence |

---

## SIDEBAR: "What this site is"

- This site is the detailed pre-build system map for Champ's Dog House, not a marketing summary.
- It is based on live Gingr API discovery, authenticated Gingr UI inspection, and current official HighLevel product capability.
- No live HighLevel sub-account has been touched yet. This packet is intentionally build-first, not guess-first.
- The goal is to let a non-technical stakeholder, an operator, and a builder all talk about the same future system without using different mental models.

## SIDEBAR: "What it is not"

- This is not a claim that every kennel-floor function in Gingr should be cloned inside HighLevel.
- This is not the final import execution itself. It is the operating map that should exist before any import or build begins.
- This is not a public brochure. It is a client-facing working dossier for planning, approval, and handoff.

---

## SECTION 1: OVERVIEW (id: overview)

**Eyebrow:** Project reality
**Title:** This needs to operate like a reference dossier
**Description:** The first version was too general. This version exposes the exact current-state surfaces, the hard target-state decisions, and the sequencing rules needed before execution.

### Metrics

| Label | Value | Note |
|-------|-------|------|
| Safe Gingr API coverage | 109 / 109 | All planned safe read-only discovery calls succeeded against Champ's source tenant. |
| Locations validated | 3 active | Marlton, Medford, and Mt. Laurel are confirmed in the source system. |
| Owners and pets | 18,915 / 23,199 | Households and dogs were validated through live discovery, not estimated. |
| Captured forms | 30 / 28 / 10 | Owner, animal, and lead schemas were captured before any field mapping begins. |
| Reservation exposure | 6 API types | Plus broader UI service categories for grooming, training, modifiers, and disabled types. |
| Commercial exposure | 9,711 invoices | Legacy POS history is exposed pre-August 1, 2019; later POS history is not. |

### What is fully grounded

- Live Gingr API discovery against the Champ's tenant
- Authenticated Gingr admin UI audit across operational pages
- Current HighLevel target design constrained by actual platform limits
- Migration logic built before any new sub-account work begins

### What still requires business sign-off

- Invoice and balance scope for day one
- How much history should move versus stay archived
- Whether packages and subscriptions need active carry-forward state
- Final cutover window and freeze posture

---

## SECTION 2: GINGR SCREENSHOTS (id: gingr-screenshots)

**Eyebrow:** Visual audit
**Title:** The Gingr screenshots that prove what is really in scope
**Description:** This is the screenshot-backed layer that should make the current account impossible to hand-wave. These captures come from the authenticated Champ's Gingr admin audit and show why the migration cannot be planned from memory.

### Screenshot Gallery (16 items)

1. **Agreement templates** (Theme: Waivers and documents)
   - Artifact: agreement-templates.png
   - Summary: The live UI showed multiple active agreement templates, including the grooming contract and the broader daycare, boarding, grooming, and training agreement.
   - Why it matters: Day-one HighLevel needs a real documents layer, not a generic checkbox substitute.

2. **Owner form** (Theme: Household intake)
   - Artifact: owner-form.png
   - Summary: The audited owner form is not basic contact capture. It includes emergency contacts, pickup authorization, additional owner fields, opt-outs, login, agreements, and card-related surfaces.
   - Why it matters: Contact architecture and intake sequencing must be designed from this form, not from a generic CRM template.

3. **Animal form** (Theme: Pet readiness and care)
   - Artifact: animal-form.png
   - Summary: The pet form carries medical, behavioral, social, feeding, medication, and operational handling detail that goes far beyond a name-breed-photo profile.
   - Why it matters: The Pets object has to preserve care and readiness context or the migration loses operational truth.

4. **Reservation types and services** (Theme: Service model)
   - Artifact: reservation-types-services.png
   - Summary: The Gingr tenant has a wider live service catalog than the API type list alone suggests, including grooming, group classes, private training, board and train, modifiers, and disabled categories.
   - Why it matters: The future HighLevel booking model has to be mixed by service family, not forced into one calendar type.

5. **Group classes** (Theme: Training delivery)
   - Artifact: group-classes.png
   - Summary: Group classes are a first-class admin surface in Gingr, which confirms class-based scheduling is part of the real operating model.
   - Why it matters: HighLevel class calendars should be treated as a real design requirement, not an optional embellishment.

6. **Areas and lodgings** (Theme: Facility operations)
   - Artifact: manage-areas-lodgings.png
   - Summary: Named areas, specialty spaces, and isolation areas are actively configured in the Gingr facility model.
   - Why it matters: These surfaces should be documented and respected, but not forced into HighLevel as if it were kennel-floor software.

7. **Capacity rules** (Theme: Operational control)
   - Artifact: capacity.png
   - Summary: Capacity groups and date-based overrides were visibly configured for active services.
   - Why it matters: This is one of the strongest proofs that HighLevel should own intake and communication, not pretend to replace operational capacity logic.

8. **Hours of operation** (Theme: Location operations)
   - Artifact: hours-of-operation.png
   - Summary: Hours are not just generic business hours. The page shows reservation-type-specific operational windows.
   - Why it matters: Calendars, reminders, and service availability need location-aware and service-aware rules from day one.

9. **Packages and subscriptions** (Theme: Commerce)
   - Artifact: packages-subscriptions.png
   - Summary: Training packages and recurring commercial structures are visibly configured across locations.
   - Why it matters: Commercial carry-forward cannot be guessed. It needs explicit scope and approval.

10. **Deposits and payment posture** (Theme: Payment rules)
    - Artifact: deposits.png
    - Summary: Deposits are actively configured by service and location, which proves the current revenue model includes reservation-time payment rules.
    - Why it matters: Any HighLevel billing design needs a deliberate decision on what deposit logic survives and what gets retired.

11. **Credit card processing** (Theme: Payments and terminals)
    - Artifact: credit-card-processing.png
    - Summary: The tenant references multiple processors and named terminals, confirming there is real payment infrastructure beyond simple online checkout.
    - Why it matters: We should not sell a fake one-click payment migration path where multiple processors and devices are in play.

12. **Portal customization** (Theme: Client experience)
    - Artifact: portal-customization.png
    - Summary: The current customer portal has explicit links, URL settings, invite code, and visibility toggles for client-facing actions.
    - Why it matters: The future client-facing flow should be intentionally redesigned, not assumed to match the old portal by default.

13. **Reservation request settings** (Theme: Gated access)
    - Artifact: reservation-request-settings.png
    - Summary: Client self-service is heavily gated by readiness conditions, reservation history, profile quality, and immunization checks.
    - Why it matters: Open public booking is the wrong posture for boarding and daycare in the new account.

14. **Lead forms and PreCheck** (Theme: Pre-arrival flows)
    - Artifact: lead-forms.png + precheck.png
    - Summary: Lead Forms are a live surface while PreCheck exists but showed no configured forms in the captured account.
    - Why it matters: HighLevel should rebuild the future-state pre-arrival flow cleanly instead of imitating a weak or unused setup.

15. **System messaging** (Theme: Operational communications)
    - Artifact: system-email.png + system-sms.png
    - Summary: System Email and System SMS are active operating layers in Gingr, not passive leftovers.
    - Why it matters: Template migration and workflow rebuild work is required before any communications are switched on in HighLevel.

16. **Custom configurations** (Theme: Tenant-specific logic)
    - Artifact: custom-configurations.png
    - Summary: Accent color, customer-app CSS and JS, webhook fields, and format controls were all visible in the live tenant.
    - Why it matters: The project has to account for tenant-specific behavior, not just data rows.

---

## SECTION 3: CURRENT GINGR (id: gingr-current)

**Eyebrow:** Current-state source map
**Title:** What Gingr is actually carrying today
**Description:** These are not assumptions. These are the live domains that were verified in the Champ's source tenant and need to influence the new HighLevel design.

### Service Category Chips

Unassigned | Boarding | Board and Train | Daycare | Evaluation | Grooming | Group Training Classes | Other | Private Training | System Modifiers | Disabled Types

### Domain Accordion (9 items)

1. **Tenant and location structure**
   - Summary: The source tenant is genuinely multi-location and location-aware in both data and operations.
   - Three active locations are confirmed: Champ's Marlton, Champ's Medford, and Champ's Mt. Laurel.
   - Location Info exposes address, phone, email, website, hours, latitude, longitude, and enable / portal-enable controls.
   - Hours of Operation is configured by reservation type and hour type rather than one flat business-hours schedule.
   - Location-level operations affect deposits, rates, capacity, payments, staff visibility, and customer-facing behavior.

2. **Owner, animal, and lead intake**
   - Summary: The tenant is using real operational intake structure, not just default placeholder forms.
   - Owner form schema has 30 fields, animal form schema has 28 fields, and lead form schema has 10 fields.
   - Owner and animal forms in the UI expose business-required and customer-required settings.
   - Animal intake includes operational prompts such as color and markings, health questions, crate trained, social history, aggression or resource guarding, feeding schedule, medication schedule, and custom animal icons.
   - Lead Forms exist as a live UI surface, which means intake origin paths are part of the migration scope.

3. **Agreements and document logic**
   - Summary: Champ's uses formal agreement templates that influence readiness to book and serve.
   - Visible agreement templates include Canine Flu Waiver, a combined daycare / boarding / grooming / training agreement, and a Grooming Contract.
   - Agreement templates are location-aware and can be tied to reservation types.
   - This means the target build needs a real document and waiver layer, not just contact notes.

4. **Reservation and service model**
   - Summary: The live service model is broader than the raw API list and must be translated deliberately.
   - API discovery validated reservation types, reservation windows, service catalogs, reservation history, estimates, and location-filtered pulls.
   - The UI adds a broader category truth: boarding, board and train, daycare, evaluation, grooming, group training classes, private training, modifiers, and disabled types.
   - Group Classes has a dedicated management page and should not be collapsed into a generic appointment flow.
   - Future bookings, reservation histories, and multi-service logic are part of the source operating model.

5. **Facility operations and capacity**
   - Summary: Gingr is currently holding a real facility-floor operating layer, not just CRM data.
   - Manage Areas and Lodgings is live with named areas such as Chuck's Alley, Isolation, Nala's Den, Sean's House, Trin's Town, Upstairs Crates, and Upstairs Grooming Bank.
   - Capacity is managed separately by group and by date. In the captured Medford view, daycare / boarding / stay and play capacity and grooming capacity were both configured at 80 with date-based overrides available.
   - Digital Whiteboard has its own admin configuration surface, which confirms back-of-house operational tooling that does not map cleanly to HighLevel.

6. **Commerce, deposits, packages, and payments**
   - Summary: Commercial logic is active and varied; it cannot be assumed to fit one simple HighLevel product model.
   - Packages and Subscriptions are live. Visible examples included monthly Training Session packages priced at 298.00 for Medford and Mt. Laurel.
   - Credit Card Processing references CardConnect, Gingr Payments, and Stripe, with visible terminals for Medford and Marlton.
   - Payment Methods include Gingr Payments, Cash, Check, No Payment, ADMIN - Credit Comped, Captivated, and test.
   - Deposits are configured for Boarding at Marlton and Medford.
   - Check Out Options includes cart-wide promotions, quick checkout with services, promotion behavior, location-limited invoice changes, store-credit restrictions, owner-required transactions, custom cart icons, and incomplete service charging.
   - Promotions are active, with visible records such as sibling50 and 5% PREBOOK.
   - Memberships exists as a feature surface, but the captured page showed no memberships configured.

7. **Customer portal and pre-arrival experience**
   - Summary: Portal behavior is opinionated and guarded. The target build needs to choose what to preserve and what to modernize.
   - Customer Interaction Settings show waitlist access, customer-created option forms, multiple promotions, estimate viewing, new customer registrations, same-day requests, customer-entered weight, next-day cutoff, and owner files visible to customers.
   - Customer self-pay toggles for deposits, invoices, and store-credit purchase were off in the captured configuration.
   - Reservation and appointment request settings require previous reservation history, valid immunizations, valid customer and animal profile, and cancellation reason for self-service cancellations.
   - Gingr PreCheck exists as a feature surface but no configured PreCheck forms were visible in the captured tenant.
   - Portal customization is live, including custom links and portal display controls, which means the public experience is part of scope.

8. **Communications and report cards**
   - Summary: Gingr is acting as an operational communication hub, not merely a data repository.
   - System Email, System SMS, Canned Email Templates, Canned SMS Templates, and Report Card Settings are all active admin surfaces.
   - Email templates cover reservation events, deposits, agreements, lead submission, password reset, welcome flows, immunization reminders, and package or subscription reminders.
   - System SMS is configured with a live two-way number and template structure, confirming outbound and inbound operational messaging.
   - Report Card Settings supports bulk creation, naming, friends label, feeding and medication display, and social sharing configuration.

9. **Users, groups, permissions, and specialties**
   - Summary: The live staff model is group-based, specialty-based, and tied to locations.
   - Users and Groups supports active and inactive users, create user, manage groups, manage specialists, manage lockouts, and bulk user upload.
   - Visible groups include admin, General Managers, Reception, Yard Staff, Groomers, Marlton Employees, Trainers, Mt Laurel, and Grooming Leads.
   - Users are tied to home location, groups, and specialties, which means staffing logic is not generic.
   - Specialties and service assignments must influence the new HighLevel permissions and calendar ownership model.

10. **Integrations, customization, and tenant-specific configuration** (listed as item 10 in the data)
    - Summary: Several integration surfaces exist, but many are blank or only partially configured, so they must be validated before migration.
    - Custom Configurations includes accent color, date format, phone mask, customer app CSS, customer app JS, webhook URL, and webhook signature key.
    - Google Maps API fields were blank in the captured view. Broadly existed, but location ID was blank. Webhook URL and signature were blank. Webcam fields were blank. PrintNode was not set up.
    - Kisi has its own admin page with an API key field, which confirms facility-level vendor surfaces outside core CRM design.
    - Because many vendor fields are blank, these are validate-before-migrate items, not automatic rebuild items.

---

## SECTION 4: UI EVIDENCE (id: ui-evidence)

**Eyebrow:** Audited UI evidence
**Title:** Which Gingr admin pages proved what
**Description:** This layer ties specific admin pages and saved artifacts to the migration consequences they create. It is the bridge between screenshots, JSON captures, and architecture decisions.

### Evidence Cards (18 items)

1. **Agreement Templates** (artifact: agreement-templates.json)
   - Proof: The audit captured active agreement templates including a grooming contract and broader service agreements. Templates were visibly tied to location and reservation-type logic.
   - Migration consequence: The HighLevel build needs a real documents and waiver layer before any service flow goes live.

2. **Customer Interaction Settings** (artifact: customer-interaction-settings.json)
   - Proof: Wait list, new customer registration, same-day requests, customer-created option forms, and estimate viewing were all visible as active controls. Customer-entered weight and owner files visible to customers were also confirmed. Next-day reservation request cutoff was captured as 1800 in the audit artifact.
   - Migration consequence: The HighLevel portal and intake experience should be intentionally rebuilt, not assumed from memory. These toggles define how open or gated the client experience currently is.

3. **Reservation and Appointment Requests** (artifact: reservation-request-settings.json)
   - Proof: Allow requests over capacity was enabled in the captured view. Previous reservation history, valid immunizations, and valid profiles were required before self-service requests. The visible customer-facing request button text was "Request Services".
   - Migration consequence: Boarding and daycare access in HighLevel should be controlled through explicit readiness and qualification flows, not generic public scheduling.

4. **Portal Customization** (artifact: portal-customization.json)
   - Proof: Portal-specific commerce toggles existed for memberships, packages, retail, and subscriptions. Rates, reward points, and webcam visibility had explicit display controls. Custom quick links were visible, including Upload Files and Edit My Account.
   - Migration consequence: The future customer-facing experience needs a documented choice about which self-service actions remain public and which should be moved into guided workflows.

5. **Owner Form** (artifact: owner-form.json + form_owner_fields.csv)
   - Proof: The owner intake schema includes contact identity, additional owner details, emergency contacts, authorization to pick up pets, notes, and multiple opt-out flags. Allow Online Login, Legal Agreements, Password, and Credit Card appear as part of the audited owner form footprint.
   - Migration consequence: This directly drives the contact field model, the consent model, and the intake workflow order in HighLevel.

6. **Animal Form** (artifact: animal-form.json + form_animal_fields.csv)
   - Proof: The animal schema includes medical conditions, social history, crate training, resource guarding, aggression prompts, jump-fence behavior, digging behavior, allergies, medication schedule, feeding schedule, and warnings. Operational pet intake is more nuanced than generic pet CRM fields.
   - Migration consequence: The Pets object must include readiness, behavioral, and care-profile detail, and boarding or daycare approval should become a workflow-driven state.

7. **Reservation Types and Services Configuration** (artifact: reservation-types-services.json)
   - Proof: The audited UI confirmed live categories for boarding, board and train, daycare, evaluation, grooming, group training classes, private training, modifiers, disabled types, and more. This is wider than the simple reservation-type list alone.
   - Migration consequence: A single calendar model is not valid. Service lines need separate routing and booking architecture.

8. **Group Classes** (artifact: group-classes.json)
   - Proof: Group Classes exists as its own admin surface rather than a simple appointment subtype. This proves class-based scheduling is part of the real service model.
   - Migration consequence: Group training should use class-aware booking design in HighLevel rather than being flattened into generic meetings.

9. **Manage Areas and Lodgings** (artifact: manage-areas-lodgings.json)
   - Proof: Named facility areas and lodgings were visible, including isolation and specialty areas. This is a true facility-operations surface, not just descriptive metadata.
   - Migration consequence: This should be documented as operational scope that stays outside core HighLevel ownership.

10. **Capacity** (artifact: capacity.json)
    - Proof: Capacity groups and date-based overrides were visible in the audited tenant. Medford capacity groups for daycare, boarding, stay and play, and grooming were captured in the current packet.
    - Migration consequence: HighLevel should not be sold internally as a native replacement for Gingr capacity control.

11. **Hours of Operation** (artifact: hours-of-operation.json)
    - Proof: Hours are configured by reservation type and hour type rather than as a single flat business-hours setting. The captured Medford page showed boarding, daycare, and related service windows.
    - Migration consequence: Location-aware calendars and reminder logic need service-aware timing assumptions from day one.

12. **Packages and Subscriptions** (artifact: packages-subscriptions.json)
    - Proof: Monthly Training Session packages priced at 298.00 were visible for Medford and Mt. Laurel. Package and subscription management is a real commerce surface in the current tenant.
    - Migration consequence: Commercial migration needs an explicit decision on what to rebuild versus archive, especially for training offers and recurring logic.

13. **Deposits** (artifact: deposits.json)
    - Proof: Deposits were visibly configured by service and location in the audited UI. This confirms reservation-time payment rules are part of the live business logic.
    - Migration consequence: Deposit handling in HighLevel should be designed intentionally instead of assumed to map one-to-one from Gingr.

14. **Credit Card Processing** (artifact: credit-card-processing.json)
    - Proof: Stripe, CardConnect, and Gingr Payments processors were visible across locations. Bolt terminals were visible by name for Medford and Marlton. Manual card entry, portal tipping, and convenience fee controls existed in the captured configuration.
    - Migration consequence: The target payment strategy must be selective and deliberate. It should not assume a one-click copy of Gingr payment behavior.

15. **Payment and Purchase Options** (artifact: payment-purchase-options.json)
    - Proof: The portal payment posture was conservative in the captured account, with multiple client self-pay options visibly off. This page proves the future client payment experience can be intentionally redesigned instead of mirrored.
    - Migration consequence: The HighLevel customer-payment experience should be treated as a future-state choice, not a source-system obligation.

16. **System Email and System SMS** (artifact: system-email.json + system-sms.json)
    - Proof: Operational message templates exist for reservations, deposits, agreements, leads, password reset, welcome flows, immunization reminders, and packages. System messaging is a live operating layer, not just a template graveyard.
    - Migration consequence: A template migration workbook and workflow rebuild plan are required before communications are turned on in HighLevel.

17. **Users, Groups, and Custom Configurations** (artifact: auth/index live review + custom-configurations.json)
    - Proof: Groups, specialties, home locations, and role separation were confirmed in the live staff model. Webhook URL and signature were blank in the captured configuration. Accent color, date format, phone mask, and customer-app CSS and JS surfaces were present.
    - Migration consequence: Permissions, calendar ownership, and delta-sync design all need to assume real staffing structure while treating webhooks as optional until proven otherwise.

18. **Location Info** (artifact: location-info.json)
    - Proof: Three active locations were visible in the audited location grid with address, city, region, zip, phone, email, website, hours, latitude, and longitude. Enabled and customer-portal-enabled filters were present on the page.
    - Migration consequence: The new HighLevel account needs location-aware calendars, staffing, dashboards, and reporting assumptions from day one.

19. **PreCheck** (artifact: precheck.json)
    - Proof: The PreCheck feature surface exists, but the captured tenant showed no configured PreCheck forms.
    - Migration consequence: HighLevel should not mirror a rich PreCheck experience that is not visibly in use. Build the future-state pre-arrival workflow cleanly instead.

20. **Lead Forms** (artifact: lead-forms.json)
    - Proof: Lead Forms is a live admin surface in the audited tenant. This proves lead capture is part of the configured system footprint, not a future hypothetical.
    - Migration consequence: Lead capture should be rebuilt natively in HighLevel with source tracking and intake routing from day one.

21. **Digital Whiteboard** (artifact: digital-whiteboard.json)
    - Proof: Digital Whiteboard has a distinct admin surface with hardware guidance, location settings, and customization options. This confirms Champ's current system includes true facility-floor operating views.
    - Migration consequence: This belongs in the outside-HighLevel bucket and should be documented as operational scope that is not being recreated in the CRM.

22. **Pricing Rules** (artifact: pricing-rules.json)
    - Proof: Pricing Rules exists as a dedicated configuration surface in the audited tenant. That confirms commercial logic extends beyond simple service prices.
    - Migration consequence: The commercial design in HighLevel should prioritize future-facing simplicity rather than cloning every legacy pricing mechanic.

---

## SECTION 5: TARGET HIGHLEVEL (id: highlevel-target)

**Eyebrow:** Target-state architecture
**Title:** What the new HighLevel account should own
**Description:** This target design keeps pet fidelity, uses current HighLevel strengths, and avoids unsupported surfaces that would create cleanup later.

### Architecture Principles (7 items)

1. **Contacts remain the household anchor**
   - Owners and households should live as contacts because HighLevel still centers conversations, opportunities, documents, invoices, calendars, and most workflow logic on contacts.
   - One contact per household or owner record
   - Primary dedupe uses gingr_owner_id, email, and mobile phone
   - Contact owns communication, billing follow-up, reviews, and reactivation

2. **Pets become one custom object**
   - The minimal safe custom-object model is a single Pets object that preserves dog-level truth without over-modeling unsupported surfaces.
   - One Pets record per Gingr animal
   - Vaccination summary begins directly on the pet record
   - Use contact-to-pet and opportunity-to-pet associations

3. **Opportunities express service motion**
   - Pipelines should represent intake, consult, qualification, reactivation, and issue resolution rather than trying to make the pet object behave like a booking engine.
   - New Client Intake pipeline
   - Training Sales pipeline
   - Reactivation and Retention pipeline

4. **Calendar architecture must stay mixed**
   - One calendar type will not cover grooming, consults, classes, and onboarding correctly.
   - Meetings for consults, callbacks, evaluations, and front-desk scheduling
   - Class booking calendars for group training
   - Services (v2) for grooming and service-menu-style booking

5. **Documents and readiness gating are mandatory**
   - Waivers, intake completion, vaccine review, and pet readiness need to become explicit future-state assets before public booking is enabled.
   - Use Documents and Contracts for waivers and service consents
   - Use workflows to chase missing pet profile, waiver, and vaccine data
   - Do not mark a pet approved to book without documented readiness logic

6. **Payments and commerce should be selective**
   - HighLevel should own selected future-facing payment flows, but not every legacy pricing mechanic from Gingr.
   - Use calendar payments for consult and grooming deposits
   - Use invoices and payment plans for training and higher-ticket programs
   - Archive or simplify complex historical package logic where possible

7. **AI belongs on a stable base**
   - AI is a real advantage here, but only when the contact, pet, booking, and document layers are already coherent.
   - Conversation AI first
   - Reviews AI early
   - Workflow-invoked internal agents before deeper voice deployment

8. **Some Gingr functions should stay outside HighLevel**
   - The new account should not be forced to become a kennel-floor operations clone.
   - Areas and lodgings are operational reference, not CRM-native structure
   - Digital whiteboard is a facility tool, not a core HighLevel surface
   - Facility-specific vendors and blank integration pages should not drive architecture

### Schema Foundation

#### Contact field layer
- Owner and household data belongs here, including source IDs, contactability, emergency contacts, and commercial or operational flags.
- Fields: gingr_owner_id, home_location_id, home_location_name, emergency_contact_name, emergency_contact_phone, allow_online_login, opt_out_email, opt_out_sms, opt_out_marketing_email, opt_out_marketing_sms, current_balance_snapshot, last_seen_in_gingr_at

#### Pets custom object layer
- Dog-level identity, care, vaccine, and sync fields should start here so the business can retain pet fidelity without over-extending the schema.
- Fields: gingr_animal_id, gingr_owner_id, pet_name, species, breed, sex, fixed_status, birthday, weight, temperament, feeding_notes, medication_notes, allergies, special_handling_notes, vet_name, rabies_expiration, bordetella_expiration, dhpp_expiration, last_gingr_sync_at, home_location_name

#### Booking and opportunity layer
- Because scheduling is contact-centric, booking context must be copied into opportunities and appointment-linked fields for staff to operate on.
- Fields: gingr_reservation_id, pet_names, pet_gingr_ids, reservation_type_name, services_string, booking_location_id, booking_location_name, vaccine_clearance_status, waiver_status, training_program_name, invoice_status_snapshot, source_system

#### Required associations
- Associations prevent the data model from flattening pet truth into the household or into one overloaded appointment record.
- Contact <-> Pet
- Opportunity <-> Pet
- One household can own multiple pets
- One service opportunity can point to one or more pets
- Do not dedupe pets by name alone

### Calendar Architecture Table

| Use Case | Recommended Feature | Posture | Why | Important Caveat |
|----------|-------------------|---------|-----|-----------------|
| New client calls, evaluation calls, training consults | Meetings calendars | Use now | Stable, fast, and human-friendly for consult and intake scheduling. | Contact-centric only; pet context must be copied in separately. |
| Group training sessions and workshops | Class booking calendars | Use now | Best current fit for shared-session attendance and class-style booking. | Keep class logic separate from pet-object logic. |
| Grooming and menu-style service booking | Services (v2) | Use now | Best current fit for services, add-ons, pricing, and staff-based booking. | Needs disciplined setup; some service features are still evolving. |
| Boarding and daycare intake qualification | Meetings plus pipeline plus pet object | Use now | Best current compromise for readiness, approval, and handoff. | Not a kennel-ops replacement by itself. |
| Pet-native operational scheduling | Force custom objects into calendars | Do not use | Current HighLevel calendars are not custom-object-native. | Trying to force this creates brittle workarounds. |

### Hard Platform Constraints

- HighLevel custom objects are not first-class in conversations, calendars, or payment surfaces.
- HighLevel forms, surveys, and quizzes currently support only one object type at a time when custom or company objects are involved.
- Custom objects do not directly drive invoices or payment logic.
- Contact imports can still merge by email or phone even if duplicate-contact settings are conservative.
- Native AI knowledge access to custom-object data is not a safe foundation for day-one design.
- Gingr transaction history after August 1, 2019 is not exposed through the tested transaction endpoint behavior.
- Webhook URL and signature fields were blank in the audited Gingr tenant, so delta-sync design should not assume webhooks exist.

---

## SECTION 6: MAPPING MATRIX (id: mapping)

**Eyebrow:** Source to target mapping
**Title:** How current Gingr domains translate into the new account
**Description:** This is the working migration matrix for data, documents, booking context, and what should be deferred or archived.

| Gingr Source | HighLevel Target | Recommended Method | Notes |
|-------------|-----------------|-------------------|-------|
| Gingr Owner | HighLevel Contact | API import or upsert after contact fields exist | Preserve gingr_owner_id and let contact remain the communication anchor. |
| Owner custom fields | Contact custom fields | Create target fields before import | Do not guess names; map from captured schema. |
| Gingr Animal | Pets custom object record | Create after contact exists | Preserve gingr_animal_id and associate back to the contact. |
| Animal custom fields | Pets object fields | Flatten onto pet object in phase 1 | Feeding, medication, care, and vaccine status belong on the pet record first. |
| Immunizations | Pets fields | Flatten summary and key expiration dates | Avoid a separate vaccination object until reporting needs prove it necessary. |
| Future reservations | Appointments and opportunities | Contact-centric booking layer plus pet references | Do not force the pet object into unsupported calendar surfaces. |
| Historical reservations | Archive or optional phase-2 visit object | Defer by default | Only bring history into CRM if there is a strong reporting need. |
| Active subscriptions and packages | Selective billing strategy | Phase-2 decision | Depends on whether staff truly need live carry-forward balances or plans in the new system. |
| Open invoices and balances | Invoices or balance snapshot fields | Needs sign-off before migration | This is a business-rule decision, not just a data-transfer decision. |
| Waivers and agreements | Documents and Contracts | Rebuild forward-looking versions | Archive old signed-document history if needed; do not force legacy paperwork into day-one flows. |
| Lead forms | Forms, surveys, contacts, and opportunities | Rebuild natively in HighLevel | Use source-tracking fields so marketing origin remains visible. |

---

## SECTION 7: JOURNEY FLOWS (id: flows)

**Eyebrow:** Operating journeys
**Title:** How the future system should behave in real life
**Description:** This is the missing middle between architecture and build tasks. It explains the same service motion in plain business language and in Gingr-to-HighLevel system language.

### Plain-Language Service Journeys (3 journeys)

#### 1. Boarding and daycare approval
- **Audience:** Plain language
- **Summary:** A family wants daycare or boarding, but the business still has to qualify the household and the dog before self-service should open up.
- **Steps:**
  1. The family asks for service through a form, phone call, chat, or staff referral.
  2. The team identifies the household, the dog, and the correct location.
  3. The family completes intake, uploads vaccines, and signs the right waivers.
  4. Operations reviews behavior, health, and readiness before approving service access.
  5. Once approved, the visit is requested or booked using the right service path.
  6. Reminders, drop-off instructions, and internal handling notes go out before arrival.
  7. After the stay or visit, follow-up and review messaging keeps the client warm.
- **Result:** The business gets safe repeat-booking motion without exposing open public scheduling too early.

#### 2. Grooming booking
- **Audience:** Plain language
- **Summary:** Grooming should feel like a clean service booking flow, not like kennel operations disguised as an appointment.
- **Steps:**
  1. A client selects or requests a grooming service for a specific dog.
  2. The system confirms the right household, dog, location, and service menu.
  3. Add-ons, timing, and any groomer constraints are chosen before confirmation.
  4. Confirmation and prep instructions are sent automatically.
  5. Staff can see coat, behavior, allergy, and handling notes before the appointment.
  6. After service, the client receives follow-up and a prompt to rebook or review.
- **Result:** Grooming becomes a polished appointment experience while dog-specific care data stays visible to staff.

#### 3. Training consult to program
- **Audience:** Plain language
- **Summary:** Training is not just a calendar slot. It starts with goals, evaluation, and a sales decision before the right program is delivered.
- **Steps:**
  1. A lead or current client asks about private training, classes, or board-and-train.
  2. The consult or evaluation is booked first so the trainer can assess fit and goals.
  3. The team records training goals, dog history, and recommended next steps.
  4. The client is moved through a sales decision, package recommendation, or program approval.
  5. Private sessions, classes, or board-and-train services are then booked through the right channel.
  6. Reminders, homework, and follow-up communication continue after each step.
  7. Reactivation or continuation offers are sent when the current program is ending.
- **Result:** Training revenue, delivery, and follow-up stay connected instead of living in disconnected notes.

### Platform-Language System Journeys (3 journeys)

#### 1. Boarding and daycare system flow
- **Audience:** Gingr and HighLevel terms
- **Summary:** Use a gated readiness flow instead of open public booking for services that depend on approval and vaccines.
- **Steps:**
  1. Lead form, phone, or Conversation AI creates or updates the Contact.
  2. A New Client Intake opportunity is opened with source and preferred location fields.
  3. A Pets custom-object record is created or linked to the Contact.
  4. Forms, surveys, and documents collect household intake, pet profile, waivers, and vaccine upload.
  5. Workflow tasks route the record to human review for readiness, behavior, and immunization checks.
  6. Opportunity stage and pet readiness fields are advanced only after staff approval.
  7. Evaluation or trial bookings use Meetings; approved repeat service uses a controlled request or booking path.
  8. Reminder workflows, internal summaries, and post-visit review requests run from the final booking state.
- **Result:** Contact, Opportunity, and Pet records stay synchronized while boarding and daycare access remains controlled.

#### 2. Grooming system flow
- **Audience:** Gingr and HighLevel terms
- **Summary:** Treat grooming as service scheduling in HighLevel, supported by pet context and operational notes.
- **Steps:**
  1. A Contact is created or matched before any booking is confirmed.
  2. The Pets object stores breed, weight, behavior, allergy, and handling context for the selected dog.
  3. A grooming request moves through a lightweight opportunity or booking-intake stage if review is needed.
  4. HighLevel Services is used for the actual appointment menu, duration, add-ons, and booking logic.
  5. Confirmation, reminder, and prep workflows reference both the Contact and the linked Pet.
  6. Internal notes and exception tasks surface to staff when a pet needs special handling.
  7. Post-appointment automation triggers review, rebook, or nurture messaging.
- **Result:** The dog record holds the care data, and Services handles the appointment layer without forcing kennel logic into the calendar.

#### 3. Training system flow
- **Audience:** Gingr and HighLevel terms
- **Summary:** Training should use a consult-to-sale-to-delivery model, not a single generic appointment type.
- **Steps:**
  1. Form, chat, or phone intake creates or updates the Contact and opens a Training Sales opportunity.
  2. The relevant Pet record is associated so trainers can see behavior, history, and care context.
  3. Consults and evaluations are booked on Meetings calendars with the correct trainer or location.
  4. Recommendations, package decisions, and next steps are tracked on the opportunity record.
  5. Private sessions stay on Meetings, while group programs use Class booking calendars.
  6. Board-and-train remains a higher-ticket program flow tied to the opportunity and pet association.
  7. Homework, progress follow-up, renewal prompts, and review requests are workflow-driven.
- **Result:** Training demand, consult work, and ongoing service delivery become one visible pipeline instead of scattered calendar events.

---

## SECTION 8: FIELD INVENTORY (id: field-inventory)

**Eyebrow:** Field and service inventory
**Title:** The intake details that should drive the actual build
**Description:** This layer moves beyond summary bullets. It shows the captured owner and pet form structure plus the service-by-service translation logic for the future account.

### Owner Form Inventory (30 fields)

| Key | Label | Element | Req Admin | Req Public | Hidden |
|-----|-------|---------|-----------|------------|--------|
| system_id | System Id | Hidden | | | True |
| home_location | Home Location | Syncfusion-Location | True | True | |
| referral_source | How Did You Hear About Us? | Dropdown | True | True | |
| first_name | First Name | TextInput | True | True | |
| last_name | Last Name | TextInput | True | True | |
| cell_phone | Mobile Phone | Telephone | True | True | |
| home_phone | Home Phone | Telephone | | | |
| email | Email | Email | True | True | |
| address | Address | AddressAutocomplete | True | True | |
| addl_owner_first_name | Additional Owner First Name | TextInput | | | |
| addl_owner_last_name | Additional Owner Last Name | TextInput | | | |
| additional_owner_cell_phone | Additional Owner Cell Phone | Telephone | | | |
| secondary_email | Additional Owner Email | Email | | | |
| emergency_contact_name | Emergency Contact Name | TextInput | True | True | False |
| emergency_contact_phone | Emergency Contact Phone | Telephone | True | True | |
| people_authorized_to_pick_up_your_pets | Authorized Pickup People | TextInput | | | |
| notes | Notes | TextArea | | | |
| opt_out_email | Opted Out of System Emails | TrueFalse | True | False | |
| opt_out_sms | Opted Out of System SMS | TrueFalse | True | False | |
| opt_out_marketing_email | Opted Out of Marketing Emails | TrueFalse | True | False | |
| opt_out_marketing_sms | Opted Out of Marketing SMS | TrueFalse | True | False | |
| opt_out_photo_sharing | Opted Out of Photo Sharing | TrueFalse | | | |
| opt_out_reminder_email | Opted Out of Reminder Emails | TrueFalse | True | True | |
| opt_out_reminder_sms | Opted Out of Reminder SMS | TrueFalse | True | False | |
| allow_online_login | Allow Online Login | TrueFalse | | | |
| password | Password | Password | False | False | |
| legal_agreements | Legal Agreements | Legal Agreements | | | |
| credit_card | Credit Card | CreditCard | | | |

### Animal Form Inventory (28 fields)

| Key | Label | Element | Req Admin | Req Public | Hidden |
|-----|-------|---------|-----------|------------|--------|
| first_name | Name | TextInput | True | True | |
| species | Species | Dropdown | True | True | |
| breed | Breed | DropdownWithAdd | True | True | |
| color_and_markings_gingr | Color and Markings | TextInput | False | True | |
| gender | Sex | RadioButtons | False | True | |
| fixed | Altered | TrueFalse | False | True | |
| weight | Approx. Weight | TextInput | False | False | |
| birthday | Approx. Date of Birth | DatePicker | False | True | |
| image | Photo | Camera | False | True | |
| veterinarian | Veterinarian | Vet | True | True | |
| medical_conditions_pleae_explain | Known Medical Conditions | TextInput | | | |
| (social_history key) | Social History | Checkboxes | | | |
| (crate_trained key) | Crate Trained | RadioButtons | | | |
| (resource_guarding key) | Resource Guarding | Checkboxes | | | |
| (aggression key) | Known Aggression | Checkboxes | | | |
| (can_jump_fence key) | Can Jump Fence | TrueFalse | | | |
| (likes_to_dig key) | Likes To Dig | TrueFalse | | | |
| allergies | Allergies | TextArea | False | False | |
| medication_schedule | Medication Schedule | Medication Schedule | | | |
| feeding_schedule | Feeding Schedule | Feeding Schedule | | | |
| notes | Animal Notes and Warnings | TextArea | False | False | |
| vip | VIP | TrueFalse | | | |
| pricing_rules_apply | Pricing Rules Apply | TrueFalse | | | |
| banned | Deactivated | TrueFalse | | | |
| system_id | System Id | Hidden | | | True |
| custom_animal_icons | Custom Animal Icons | Custom Animal Icons | | | |
| animal_collar_label_length | Animal Collar / Label Length | AnimalCollar | | | |

### Service-by-Service Translation Table

| Gingr Service Family | Business Meaning | HighLevel Target | Build Note |
|---------------------|-----------------|-----------------|------------|
| Boarding | Overnight or multi-day lodging service | Pipeline plus meetings or gated intake | Use HighLevel for intake, approval, reminders, and communication, not kennel-floor lodging assignment. |
| Daycare | Recurring or one-off day attendance with readiness rules | Pipeline plus meetings or controlled request flow | Keep vaccine and approval checks explicit before public scheduling. |
| Board and Train | Hybrid lodging and training program | Training pipeline plus invoices and documents | Treat as a higher-ticket program, not a simple appointment. |
| Evaluation | Qualification or assessment step before service approval | Meetings calendar plus opportunity stage | This should become part of the intake and approval pipeline. |
| Grooming | Service-menu booking with add-ons, staff, and timing | Services (v2) | Best current fit for service-style bookings and add-ons. |
| Group Training Classes | Shared scheduled sessions | Class booking calendars | Do not flatten into generic appointments. |
| Private Training | One-to-one consult or training session | Meetings calendar plus Training Sales pipeline | Use consult-to-program logic where relevant. |
| System Modifiers | Adjustments, modifiers, or supporting service logic | Service add-ons, workflow flags, or internal fields | Translate functionally instead of cloning the source category. |
| Disabled Types | Retired or inactive service categories | Archive only | Do not carry inactive categories into the new account unless there is a clear business reason. |
| Unassigned / Other | Catch-all or legacy categories | Decision required before migration | Every ambiguous category needs an explicit future-state owner or archive decision. |

### Owner Field to Target Mapping (full table)

| Gingr Field | Target Object | Target Field | Handling | Note |
|-------------|--------------|-------------|---------|------|
| first_name | Contact | First Name | Native field | Keep native for contact identity and dedupe review. |
| last_name | Contact | Last Name | Native field | Keep native for contact identity and reporting. |
| cell_phone | Contact | Phone | Native field | Primary phone for dedupe, conversations, and missed-call text back. |
| home_phone | Contact | home_phone | Custom field | Preserve as secondary phone rather than overwriting primary contactability. |
| email | Contact | Email | Native field | Primary email for dedupe, documents, and workflow eligibility. |
| address | Contact | Address fields | Native field group | Map into native address components where possible. |
| home_location | Contact | home_location_name | Custom field | Use alongside home_location_id for routing and reporting. |
| referral_source | Contact | referral_source | Custom field | Preserve for marketing attribution and reactivation analysis. |
| addl_owner_first_name | Contact | additional_owner_first_name | Custom field | Keep explicit secondary-owner visibility without creating a second contact on day one. |
| addl_owner_last_name | Contact | additional_owner_last_name | Custom field | Paired with additional owner first name. |
| additional_owner_cell_phone | Contact | additional_owner_cell_phone | Custom field | Preserve as operational fallback contact data. |
| secondary_email | Contact | secondary_email | Custom field | Keep separate from primary email to avoid dedupe and delivery confusion. |
| emergency_contact_name | Contact | emergency_contact_name | Custom field | Operationally important for boarding, daycare, and issue handling. |
| emergency_contact_phone | Contact | emergency_contact_phone | Custom field | Should be visible in front-desk and service views. |
| people_authorized_to_pick_up_your_pets | Contact | authorized_pickup_people | Custom field | Operational pickup-control data that should not be lost. |
| notes | Contact | household_notes | Custom field | Preserve as structured intake context, not buried in conversations. |
| opt_out_email | Contact | email_system_opt_out_source | Custom field plus DND policy review | Keep as source-state and reconcile with HighLevel channel-level DND rules. |
| opt_out_sms | Contact | sms_system_opt_out_source | Custom field plus DND policy review | Track source state even though HighLevel enforces channel DND differently. |
| opt_out_marketing_email | Contact | marketing_email_opt_out_source | Custom field | Supports future marketing compliance logic. |
| opt_out_marketing_sms | Contact | marketing_sms_opt_out_source | Custom field | Supports future marketing compliance logic. |
| opt_out_reminder_email | Contact | reminder_email_opt_out_source | Custom field | Reminder workflows should honor this source state in the transition period. |
| opt_out_reminder_sms | Contact | reminder_sms_opt_out_source | Custom field | Reminder workflows should honor this source state in the transition period. |
| allow_online_login | Contact | allow_online_login | Custom field | Useful for portal segmentation and post-cutover access planning. |
| legal_agreements | Contact | legacy_agreement_state | Archive or summary field | Do not try to import legacy agreements as active HighLevel documents; rebuild forward-looking forms instead. |
| credit_card | Contact | legacy_card_on_file_flag | Flag only | Do not migrate raw payment data; preserve only safe operational visibility if needed. |

### Animal Field to Target Mapping (full table)

| Gingr Field | Target Object | Target Field | Handling | Note |
|-------------|--------------|-------------|---------|------|
| first_name | Pets | pet_name | Required custom-object field | Primary display field for the Pets object. |
| species | Pets | species | Custom field | Needed for service eligibility, reporting, and intake logic. |
| breed | Pets | breed | Custom field | Keep as free-text or controlled picklist based on final GHL field strategy. |
| color_and_markings_gingr | Pets | color_and_markings | Custom field | Useful for operational identification. |
| gender | Pets | sex | Custom field | Normalize to a stable picklist. |
| fixed | Pets | fixed_status | Custom field | Keep as operational boolean or picklist. |
| weight | Pets | weight | Custom field | Operationally useful for services and care handling. |
| birthday | Pets | birthday | Custom field | Preserve original date where available; note approximate nature if needed. |
| image | Pets | photo_url or attachment | Optional phase-2 media strategy | Useful, but not a first-wave blocker. |
| veterinarian | Pets | vet_name | Custom field | Vet relationship can stay flattened on day one. |
| medical_conditions_pleae_explain | Pets | medical_conditions_notes | Custom field | Critical for intake review and exception handoff. |
| (social_history) | Pets | social_history | Custom field | Use for daycare and boarding readiness review. |
| (crate_trained) | Pets | crate_trained | Custom field | Operationally important for lodging and daycare handling. |
| (resource_guarding) | Pets | resource_guarding_history | Custom field | Should trigger human review workflows, not AI decisions. |
| (aggression) | Pets | aggression_history | Custom field | Should trigger human review workflows, not AI decisions. |
| (can_jump_fence) | Pets | can_jump_fence | Custom field | Operational handling flag for daycare and yard management. |
| (likes_to_dig) | Pets | likes_to_dig | Custom field | Operational handling flag for daycare and yard management. |
| allergies | Pets | allergy_notes | Custom field | High-value care profile data. |
| medication_schedule | Pets | medication_notes | Custom field | Keep first-wave medication summary on the pet record. |
| feeding_schedule | Pets | feeding_notes | Custom field | Keep first-wave feeding summary on the pet record. |
| notes | Pets | special_handling_notes | Custom field | Should be visible to staff without searching through legacy records. |
| vip | Pets | vip_status | Custom field | Optional but useful as an operational segmentation flag. |
| pricing_rules_apply | Pets | pricing_rules_apply | Custom field | Useful for future billing logic or exception review. |
| banned | Pets | active_status | Custom field | Treat as deactivated or inactive status in the pet record. |
| custom_animal_icons | Pets | legacy_custom_icons | Archive or summary field | Preserve only if staff still depend on icon-based visual cues. |
| animal_collar_label_length | Pets | collar_label_length | Custom field | Operational but low priority compared to care, safety, and readiness fields. |

### Per-Service Workflow Blueprint

| Service | Entry Point | Validation | Booking Model | Automation | Human Handoff |
|---------|------------|-----------|--------------|-----------|--------------|
| Boarding intake | Lead form, conversation AI, phone call, or staff-created contact | Household intake, pet profile, vaccine review, waiver completion, prior-approval logic if needed | Meetings or controlled request flow plus intake opportunity | Confirmation, intake chase, waiver chase, vaccine review handoff, approval-to-book notification | Front desk or operations admin approves readiness before public booking opens wider |
| Daycare intake | Lead form, website chat, phone, or returning-client reactivation | Pet behavior fields, crate training, aggression history, immunizations, evaluation requirement if used | Evaluation or consult calendar first, then approved request or booking path | Readiness reminders, evaluation scheduling, approval tracking, reactivation outreach | Operations review for behavioral or vaccine exceptions |
| Grooming booking | Website booking, receptionist, or conversation AI routing | Pet exists, grooming notes and alerts present, required policies acknowledged | Services (v2) | Booking confirmation, appointment reminders, after-service review request, issue follow-up if needed | Grooming lead handles exceptions, pricing issues, or special handling notes |
| Private training consult | Lead form, inbound call, website chat, referral, or reactivation campaign | Training interest captured, pet profile present, consult prerequisites complete | Meetings calendar plus Training Sales opportunity | Consult confirmation, reminder, post-consult follow-up, invoice or proposal chase | Trainer or sales owner takes over once consult is booked or completed |
| Group training classes | Class interest page, conversation routing, receptionist, or campaign link | Pet and household profile, class fit, waiver or policy completion | Class booking calendar | Enrollment confirmation, class reminders, attendance follow-up, review request or upsell path | Trainer or front desk resolves fit, attendance, or policy exceptions |
| Board and train | Consult or program inquiry | Consult complete, plan approved, deposit or invoice structure defined, documents signed | Training Sales pipeline plus billing and document stack | Consult follow-up, proposal or invoice sequence, deposit confirmation, intake reminder | Trainer and operations lead coordinate scheduling and logistics manually |

### Per-Location Operating Notes

#### Champ's Marlton
- **Current audited state:**
  - Active location with address, website, phone, and email visible in audited location info.
  - Visible in payment processor and terminal footprint.
  - Visible in packages, promotions, and deposit configuration.
- **Build implications:**
  - Needs distinct location-aware calendars and staff visibility.
  - Should retain location labels in contacts, pets, and booking context fields.

#### Champ's Medford
- **Current audited state:**
  - Most captured UI pages were viewed in Medford context.
  - Capacity groups and date overrides were explicitly captured for Medford.
  - Training package examples and payment configuration were visible in Medford context.
- **Build implications:**
  - Likely the best first location for validating workflow logic because it is the most fully audited in the current artifact set.
  - Capacity and service differences suggest Medford should not be treated as a generic clone of the other locations.

#### Champ's Mt. Laurel
- **Current audited state:**
  - Active location confirmed in location info and payment processor records.
  - Visible in subscription examples for Training Session offers.
- **Build implications:**
  - Needs explicit inclusion in training-related billing and service availability design.
  - Should be represented in location-aware reporting and future dashboards from day one.

---

## SECTION 9: OWNERSHIP AND QA (id: ownership-qa)

**Eyebrow:** Cutover control
**Title:** What HighLevel should own, what stays outside it, and what must be proven
**Description:** This section forces the migration out of vague planning language. It makes ownership, wave planning, and pre-go-live proof visible before the first real build sprint.

### Operational Ownership Matrix (14 domains)

| Operating Domain | Current Source | Day-1 Owner | Posture | Why |
|-----------------|---------------|-------------|---------|-----|
| Household identity and communications | Gingr owner records, portal login, SMS and email settings | HighLevel Contact plus contact custom fields | Own in HighLevel | Household identity, communication consent, and follow-up must live in the CRM anchor from day one. |
| Pet profile and care readiness | Gingr animal form, animal detail, behavior and care notes | Pets custom object | Own in HighLevel | Operational pet context is too rich to flatten onto the household alone. |
| Lead capture and intake | Lead forms, owner form, animal form, PreCheck surface | HighLevel Forms, Surveys, Documents, Workflows | Own in HighLevel | This is part of the future client experience and should be rebuilt deliberately. |
| Evaluations and consults | Evaluation categories and training-intake behaviors in Gingr | Meetings calendars plus intake and sales opportunities | Translate carefully | The business meaning should survive, but the future build should use HighLevel-native consult flows. |
| Grooming appointments and add-ons | Gingr grooming service categories and modifiers | HighLevel Services | Own in HighLevel | This is the strongest current HighLevel fit for service-style booking. |
| Group class enrollment | Gingr group classes | HighLevel Class booking calendars | Own in HighLevel | Group classes should stay group-aware instead of being flattened into generic appointments. |
| Boarding and daycare request control | Reservation request settings, portal gating, immunization checks | Opportunities, pet readiness fields, gated scheduling logic | Translate carefully | HighLevel can own the approval flow, but it should not be presented as kennel-operations software. |
| Agreements and waivers | Gingr agreement templates and reservation-type rules | HighLevel Documents, forms, and workflows | Own in HighLevel | Forward-looking documents should be rebuilt in the target account. |
| Reminder and follow-up messaging | System Email, System SMS, canned templates | HighLevel workflows and templates | Own in HighLevel | Operational communication should move into the automation platform that will run the new account. |
| Open balances, deposits, packages, and subscriptions | Invoices, deposits, packages, subscriptions, promotions | Selective HighLevel billing layer only if approved | Decision required | This is a business-scope choice, not an automatic migration assumption. |
| Facility areas, lodgings, and isolation spaces | Manage Areas and Lodgings | Outside HighLevel | Keep outside | These are facility-operations constructs with no clean HighLevel equivalent. |
| Capacity by date and whiteboard operations | Capacity, date overrides, Digital Whiteboard | Outside HighLevel | Keep outside | Trying to recreate date-based operational capacity inside HighLevel would be fragile and misleading. |
| Payment terminals and vendor-specific integrations | CardConnect, Gingr Payments, Stripe, Bolt terminals, webcam and PrintNode surfaces | Selective external ownership | Keep outside unless justified | Vendor hardware and niche facility integrations should not be migrated by default. |
| Historical reservations, POS history, retired promos, inactive categories | Legacy Gingr history | Archive reference set | Archive by default | History can remain searchable without polluting the day-one CRM and booking experience. |

### Migration Waves (5 waves)

#### Wave 0: Design lock and account shell
- Before any import, lock the field names, associations, calendars, permission model, and public intake posture.
- Included: Business profile and defaults; Contact, opportunity, and Pets schema; Pipelines, calendar model, and permission roles; Forms, documents, and baseline workflow plan
- Ready when: The account shape is stable enough that imports will not force renames or rebuilds.

#### Wave 1: Operational master data
- Move the core records needed to make the new account operational for staff and clients.
- Included: Live household contacts; Pet records and associations; Key consent, readiness, and service-eligibility fields; Required document and waiver structure
- Ready when: Spot-checked records show correct dedupe, pet association, and field parity.

#### Wave 2: Forward-looking activity
- Only migrate what the team must actively operate after cutover, not every historical event.
- Included: Future bookings and consults; Open opportunities and active intake cases; Reminder, chase, and follow-up workflows tied to those records; Location-aware routing and calendar ownership
- Ready when: Sample migrated bookings behave correctly across reminders, handoffs, and calendar ownership.

#### Wave 3: Selective commercial carry-forward
- Only include billing elements that the business explicitly decides must remain live in the new account.
- Included: Approved open balances or balance snapshots; Approved active packages or subscriptions; Approved deposit logic and payment settings; Future-facing offers that staff will continue selling
- Ready when: Finance and operations both sign off on what HighLevel should own versus what remains archived.

#### Archive: History and reference-only material
- Keep deep history accessible without forcing it into day-one workflows, reports, or calendars.
- Included: Historical reservations and old POS detail; Legacy invoices and retired promotions; Inactive service categories and old templates; Source screenshots, JSON captures, and mapping artifacts
- Ready when: The team can retrieve history when needed without letting it distort the live operating system.

### Pre-Go-Live QA Gates (10 gates)

| Gate | What to Verify | Pass State | Owner |
|------|---------------|------------|-------|
| Household dedupe | Imported households do not create obvious duplicate Contacts for the same primary owner. | Sample imports match expected household counts and duplicate rules are documented. | Migration lead plus operations reviewer |
| Pet association integrity | Each migrated Pet links to the correct Contact and keeps the right care-profile data. | Spot-checks confirm pet count, associations, and key handling fields are intact. | Migration lead plus front-desk operations |
| Location routing | Contacts, opportunities, calendars, and reminders honor Marlton, Medford, and Mt. Laurel routing rules. | Location-specific records land in the correct workflows, calendars, and user views. | Operations admin |
| Readiness and service eligibility | Boarding and daycare do not become openly bookable before human approval and vaccine checks. | Public-facing paths remain gated until readiness fields and reviews are complete. | Operations admin plus service lead |
| Booking model accuracy | Consults, grooming, and classes each land in the correct HighLevel calendar type. | Meetings, Services, and Class calendars are used only for their intended service families. | Build lead |
| Documents and waivers | The right agreement or form is required before the right service can move forward. | Waiver completion is visible to staff and blocks downstream flow where required. | Build lead plus operations reviewer |
| Reminder and handoff behavior | Confirmation, reminder, and follow-up workflows fire on the right triggers and leave useful internal summaries. | Message timing and internal notes are reviewed against sample records for each service family. | Automation lead |
| Permission scoping | Admins, reception, groomers, and trainers see what they need without broad unnecessary access. | Role-based account review is signed off by operations before go-live. | Account admin |
| AI safety | AI does not promise availability, approval, pricing, or policy exceptions beyond documented rules. | Test transcripts prove AI routes correctly and hands off on medical, behavioral, or dispute cases. | AI owner plus operations reviewer |
| Financial scope sign-off | Everyone agrees what invoice, balance, package, and subscription data is actually live in HighLevel on day one. | Commercial carry-forward is either implemented intentionally or deferred intentionally. | Executive sponsor plus operations admin |

---

## SECTION 10: CAPABILITY DECISIONS (id: decisions)

**Eyebrow:** Current capability decisions
**Title:** What HighLevel should be used for now, later, or not yet
**Description:** These decisions are based on current platform behavior, not what would be ideal in theory.

### Use/Don't-Use Decision Table (11 rows)

| Use Case | Feature | Use Now? | Why | Important Caveat |
|----------|---------|----------|-----|-----------------|
| Owner CRM | Contacts | Yes | Best native anchor for communication, billing, calendars, docs, and workflows. | CSV imports dedupe by email or phone regardless of duplicate toggle. |
| Pet records | Custom object: Pets | Yes | Current HighLevel supports custom objects in workflows, forms, reporting, APIs, and SmartLists. | Pets are not natively available in conversations, calendars, or payments. |
| Pipeline tied to a pet | Opportunity to Pet association | Yes | This preserves service motion without collapsing dog data into a contact. | Documentation around some API surfaces is still evolving. |
| Front-desk booking calls | Meetings calendars | Yes | Stable and human-friendly for consult and intake scheduling. | Still contact-centric, not pet-native. |
| Group training | Class booking calendar | Yes | Best fit for recurring or multi-attendee classes. | Should stay separate from grooming or consult booking logic. |
| Grooming or service scheduling | Services (v2) | Yes | Supports multi-service bookings, add-ons, staff and location rules. | Requires careful setup and testing before public release. |
| Signed waivers | Documents and Contracts | Yes | Mature enough for production and workflow-driven completion. | Recipient order and document flow need intentional setup. |
| Training billing | Invoices and payment plans | Yes | Best fit for installment and higher-ticket program billing. | Pet object data does not directly drive invoicing. |
| Review requests and replies | Reputation plus Reviews AI | Yes | Fast win for multi-location service quality loops. | Timing and exception handling must vary by service line. |
| AI website booking | Conversation AI | Yes | Good current fit for first response and multi-calendar intent routing. | Prompt must explain services clearly, not just calendar names. |
| AI phone booking | Voice AI | Later in rollout | High-value for after-hours and overflow once the human path is proven. | Do not launch before booking logic and handoffs are human-tested. |
| Pet-aware native AI knowledge lookup | AI knowledge on custom object data | Not yet | Promising future direction, but not a present-day design assumption. | Do not design the build around a capability that is not current. |

### Boundary Cards (3)

#### Rebuild directly in HighLevel (Posture: Own in the new account)
- These are the client-facing and revenue-driving experiences that HighLevel should absolutely own.
- lead capture and intake
- owner and pet profile structure
- waivers and agreements
- selected booking flows
- review requests, follow-up, and reactivation

#### Translate carefully instead of cloning (Posture: Model the logic, not the old screen)
- These areas need current-feature-safe design, not a one-to-one mimic of Gingr.
- grooming scheduling
- group class booking
- training consult pipelines
- packages, deposits, and future-facing billing
- AI-assisted booking and handoff logic

#### Archive or keep outside HighLevel (Posture: Do not force the wrong tool to own this)
- These areas are real, but rebuilding them inside HighLevel would create more fragility than value.
- areas and lodgings
- digital whiteboard configuration
- webcams, PrintNode, and facility-vendor surfaces
- blank or inactive vendor integrations
- facility-specific dashboard shortcuts from Gingr

---

## SECTION 11: ROLES AND AI (id: roles-ai)

**Eyebrow:** Permissions and AI
**Title:** Who should control the account and how AI should be rolled out
**Description:** AI and permissions both need narrow ownership. This is one of the highest-risk places to get casual.

### Permission Roles (4 roles)

#### Executive Admin
- A very small admin surface for ownership, lead operators, and the people who should control settings and money.
- Access: Full sub-account admin; Payments and integrations; Workflows and AI settings; Calendars, custom objects, documents, and reputation

#### Operations Admin
- Operations leads should run day-to-day intake and booking without holding the entire account.
- Access: Contacts, conversations, calendars, opportunities, documents, pet records, dashboards, and reputation; Limited or no access to payment gateway settings and agency-level controls; Candidate role for selected AI and workflow oversight

#### Front Desk
- Reception and customer service should be able to book, communicate, and operate, but not redesign the account.
- Access: Contacts, conversations, appointments, opportunities, documents; Pet record read or update only where operationally needed; No workflow editing, no AI builder access, no schema access

#### Trainer and Grooming roles
- Service-line roles should see only what they need, preferably with Only Assigned Data where it works operationally.
- Access: Training calendars, training pipeline, training conversations, training documents; Grooming service calendars, assigned conversations, selected dashboards, pet profile read access; No billing settings, no broad admin rights

### AI Rollout Order (3 phases)

#### AI Phase 1: Conversation AI, Reviews AI, one internal agent
- Start where automation produces speed without introducing operational risk.
- Conversation AI for lead qualification and booking routing
- Reviews AI for response acceleration
- One workflow-invoked internal QA agent for intake summaries or issue triage

#### AI Phase 2: Voice AI receptionist and internal Ask AI mapping
- Only after the human booking path, calendars, and handoff rules are proven.
- Voice AI for after-hours and overflow phone handling
- Ask AI mapped to approved internal agents
- More structured service recovery and internal summary agents

#### AI Phase 3: Voice widget and deeper agent orchestration
- This is the optimization layer, not the foundation layer.
- Optional Voice AI chat widget on high-intent pages
- Deeper workflow orchestration
- Broader internal agent coverage once staff SOPs are stable

### AI Guardrails (5 rules)

- Never promise service availability until booking is actually confirmed.
- Never state a pet is approved without intake and vaccine checks completed.
- Never invent pricing, discounts, or policy exceptions.
- Always hand off on medical, behavioral, vaccine, refund, or dispute topics.
- Always leave a usable internal summary for human staff when AI hands off.

---

## SECTION 12: BUILD SEQUENCE (id: sequence)

**Eyebrow:** Build and cutover sequence
**Title:** What order this should happen in
**Description:** Sequence is part of the architecture. If the build order is wrong, the account becomes expensive to clean up.

### Build Phases (10 phases)

#### Phase 0: Before the sub-account exists
- Lock source mapping, schema decisions, calendars, AI posture, permissions, and QA expectations before a new account is touched.
- Steps: Finalize source mapping from Gingr; Finalize contact, pet, and opportunity field plan; Finalize pipelines, calendar strategy, AI rollout, and permissions model

#### Phase 1: Day-0 sub-account setup
- Stand up the business profile, baseline settings, and only the smallest necessary admin surface.
- Steps: Business profile, timezone, logo, phone, email, website; Duplicate-contact posture and defaults; Core users only: owner or executive admin, operations admin, front-desk lead

#### Phase 2: Schema foundation
- Build the data model before any workflow or import work starts.
- Steps: Create contact custom fields; Create opportunity custom fields; Create Pets custom object and fields; Create contact-to-pet and opportunity-to-pet associations

#### Phase 3: CRM and pipeline structure
- Create the operating pipelines and their board logic before booking flows are exposed.
- Steps: New Client Intake pipeline; Training Sales pipeline; Reactivation pipeline; Stage automations and board views

#### Phase 4: Calendar system
- Create the smallest real calendar set that covers operations cleanly.
- Steps: Meetings calendars; Class booking calendars; Services (v2) structure where needed; Reminder, conflict, and payment rules

#### Phase 5: Intake assets and documents
- Build the client-facing readiness stack before public booking goes live.
- Steps: Lead capture form; Household intake form; Pet profile flow; Vaccine upload step; Waivers and documents

#### Phase 6: Core automations
- Build the operating workflows that make the account usable for staff.
- Steps: Lead acknowledgement; Booking confirmations and reminders; Intake completion chase; Waiver chase and vaccine review handoff; Review request and reactivation workflows

#### Phase 7: AI deployment
- Layer AI onto a stable human-tested operating model.
- Steps: Conversation AI; Reviews AI; One internal agent; Voice AI and deeper internal agent mapping later

#### Phase 8: Billing, reporting, and snapshot
- Commercial and reporting layers come after the operating core is stable.
- Steps: Payment gateway integration; Calendar payment rules and invoice setup; Executive, front-desk, and pet compliance dashboards; Selective reusable snapshot after stability

#### Phase 9: Migration readiness and sample transfer
- Only after the account shape is final should the sample migration start.
- Steps: Validate field map and dedupe posture; Sample contact import; Sample pet import and associations; Sample future booking import and QA sign-off

### Hard Sequencing Rules

- Do not build workflows before field names are finalized.
- Do not import contacts before dedupe logic is reviewed.
- Do not import pets before the Pets object and associations are stable.
- Do not launch AI booking before calendars are tested by humans.
- Do not expose public booking or chat widgets until reminder and handoff workflows are active.
- Do not snapshot too early.

### Phase-0 Business Decisions

- Are we migrating only live operational data, or also deep historical reservation history?
- Are invoices and balances truly in scope for day one?
- Do active subscriptions and package balances need to survive visibly in HighLevel?
- Will multiple pets share one household-level booking motion in the new system, and where does that break down?
- What is the final cutover date and the freeze window for near-term booking changes?

---

## DESIGN SYSTEM (from CSS)

- **Fonts:** Fraunces (serif, headings) + Manrope (sans-serif, body)
- **Accent color:** #b55b29
- **Moss color:** #3b6a56
- **Responsive breakpoints:** 1180px, 840px
- **Layout:** sidebar + main column doc layout
