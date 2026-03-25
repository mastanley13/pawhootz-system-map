function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderList(items, className = "bullet-list") {
  if (!items?.length) {
    return "";
  }

  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderStatusChip(status) {
  const labelMap = {
    proven: "Proven",
    partial: "Partial",
    unknown: "Unverified",
    critical: "Critical",
    high: "High",
    medium: "Medium",
    blocked: "Blocked",
  };

  return `<span class="status-chip status-chip--${escapeHtml(
    status
  )}">${escapeHtml(labelMap[status] ?? status)}</span>`;
}

function renderPriorityChip(priority) {
  const tone = priority.toLowerCase();
  return `<span class="priority-chip priority-chip--${escapeHtml(
    tone
  )}">${escapeHtml(priority)}</span>`;
}

function renderSectionHeader(section) {
  return `
    <header class="section-header">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h2>${escapeHtml(section.title)}</h2>
      <p>${escapeHtml(section.description)}</p>
    </header>
  `;
}

function renderHero(hero) {
  return `
    <header class="hero reveal" id="top">
      <section class="hero-copy">
        <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
        <h1>${escapeHtml(hero.title)}</h1>
        <p class="hero-lead">${escapeHtml(hero.lead)}</p>
        <div class="chip-row">
          ${hero.chips
            .map((chip) => `<span class="tag-chip">${escapeHtml(chip)}</span>`)
            .join("")}
        </div>
        <div class="hero-pulse">
          ${hero.pulseCards
            .map(
              (card) => `
                <article class="pulse-card">
                  <p class="pulse-value">${escapeHtml(card.value)}</p>
                  <p class="pulse-label">${escapeHtml(card.label)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
      <aside class="hero-visual">
        <div class="hero-image-card">
          <p class="eyebrow eyebrow--ghost">${escapeHtml(hero.imageBadge)}</p>
          <img src="${escapeHtml(hero.image.src)}" alt="${escapeHtml(hero.image.alt)}" />
          <p class="hero-caption">${escapeHtml(hero.image.caption)}</p>
        </div>
        <div class="status-grid">
          ${hero.statusCards
            .map(
              (card) => `
                <article class="status-card">
                  <p class="status-label">${escapeHtml(card.label)}</p>
                  <h3>${escapeHtml(card.value)}</h3>
                  <p>${escapeHtml(card.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </aside>
    </header>
  `;
}

function renderSidebar(sidebar, sections) {
  return `
    <aside class="sidebar">
      <section class="sidebar-card reveal">
        <p class="sidebar-heading">${escapeHtml(sidebar.title)}</p>
        <nav class="sidebar-nav">
          ${sections
            .map(
              (section) => `
                <a class="sidebar-link" href="#${escapeHtml(section.id)}" data-nav-link>
                  ${escapeHtml(section.navLabel)}
                </a>
              `
            )
            .join("")}
        </nav>
      </section>
      <section class="sidebar-card reveal">
        <p class="sidebar-heading">${escapeHtml(sidebar.signalsTitle)}</p>
        ${renderList(sidebar.signals, "sidebar-list")}
      </section>
      <section class="sidebar-card reveal">
        <p class="sidebar-heading">${escapeHtml(sidebar.artifactsTitle)}</p>
        ${renderList(sidebar.artifacts, "sidebar-list")}
      </section>
    </aside>
  `;
}

function renderOverview(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="metric-grid">
        ${section.metrics
          .map(
            (metric) => `
              <article class="metric-card">
                <p class="metric-value">${escapeHtml(metric.value)}</p>
                <h3>${escapeHtml(metric.label)}</h3>
                <p>${escapeHtml(metric.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="narrative-grid">
        ${section.narrativeCards
          .map(
            (card) => `
              <article class="panel-card">
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="artifact-grid">
        <article class="panel-card artifact-card">
          <h3>${escapeHtml(section.artifacts[0].title)}</h3>
          <figure class="artifact-figure">
            <img src="${escapeHtml(section.artifacts[0].image.src)}" alt="${escapeHtml(
    section.artifacts[0].image.alt
  )}" />
            <figcaption>${escapeHtml(section.artifacts[0].caption)}</figcaption>
          </figure>
        </article>
        <article class="panel-card">
          <h3>${escapeHtml(section.artifacts[1].title)}</h3>
          ${renderList(section.artifacts[1].items, "artifact-list")}
          <div class="feature-stack">
            ${section.featureList
              .map((item) => `<p class="feature-pill">${escapeHtml(item)}</p>`)
              .join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderSurfaceGrid(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="surface-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="surface-card">
                ${renderStatusChip(card.status)}
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.summary)}</p>
                ${renderList(card.bullets)}
                <p class="source-ref"><span>Source</span>${escapeHtml(card.sourceRef)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderEvidenceGallery(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="gallery-grid">
        ${section.shots
          .map(
            (shot) => `
              <article class="gallery-card">
                <div class="gallery-frame">
                  <a href="${escapeHtml(shot.image)}" target="_blank" rel="noreferrer">
                    <img src="${escapeHtml(shot.image)}" alt="${escapeHtml(shot.alt)}" />
                  </a>
                </div>
                <div class="gallery-copy">
                  <div class="proof-card-top">
                    ${renderStatusChip(shot.status)}
                    <span class="confidence-chip">${escapeHtml(shot.surface)}</span>
                  </div>
                  <h3>${escapeHtml(shot.title)}</h3>
                  <p>${escapeHtml(shot.caption)}</p>
                  ${renderList(shot.whatItProves)}
                  <p class="source-ref"><span>Capture source</span>${escapeHtml(
                    shot.sourceRef
                  )}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="access-grid">
        ${section.ledgerCards
          .map(
            (card) => `
              <article class="access-card">
                ${renderStatusChip(card.status)}
                <p class="metric-inline">${escapeHtml(card.metric)}</p>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
                ${renderList(card.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
      <article class="callout-card callout-card--warning">
        <h3>Evidence backlog</h3>
        ${renderList(section.backlog)}
      </article>
    </section>
  `;
}

function renderProofLedger(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="filter-row" data-filter-group="proof">
        ${section.filters
          .map(
            (filter, index) => `
              <button class="filter-chip${index === 0 ? " is-active" : ""}" type="button" data-filter-value="${escapeHtml(
                filter.value
              )}">
                ${escapeHtml(filter.label)}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="proof-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="proof-card" data-status="${escapeHtml(card.status)}">
                <div class="proof-card-top">
                  ${renderStatusChip(card.status)}
                  <span class="confidence-chip">${escapeHtml(card.confidence)} confidence</span>
                </div>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.summary)}</p>
                ${renderList(card.bullets)}
                <dl class="proof-meta">
                  <div><dt>Source type</dt><dd>${escapeHtml(card.sourceType)}</dd></div>
                  <div><dt>Source ref</dt><dd><code>${escapeHtml(card.sourceRef)}</code></dd></div>
                  <div><dt>Last verified</dt><dd>${escapeHtml(card.lastVerified)}</dd></div>
                </dl>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSnapshot(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="snapshot-grid">
        ${section.groups
          .map(
            (group) => `
              <article class="panel-card">
                <p class="panel-label">${escapeHtml(group.label)}</p>
                <h3>${escapeHtml(group.title)}</h3>
                <p>${escapeHtml(group.body)}</p>
                ${renderList(group.items)}
              </article>
            `
          )
          .join("")}
      </div>
      <div class="access-grid">
        ${section.accessCards
          .map(
            (card) => `
              <article class="access-card">
                ${renderStatusChip(card.status)}
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

function renderComparison(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="comparison-wrap">
        <table class="comparison-table">
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
            ${section.rows
              .map(
                (row) => `
                  <tr>
                    <td class="domain-cell">${escapeHtml(row.domain)}</td>
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
      <p class="comparison-note">${escapeHtml(section.note)}</p>
    </section>
  `;
}

function renderJourneys(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="journey-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="journey-card">
                <p class="panel-label">${escapeHtml(card.audience)}</p>
                <h3>${escapeHtml(card.title)}</h3>
                <p><strong>Current:</strong> ${escapeHtml(card.current)}</p>
                <p><strong>Target:</strong> ${escapeHtml(card.target)}</p>
                <p><strong>Closure:</strong> ${escapeHtml(card.closure)}</p>
                <ol class="step-list">
                  ${card.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
                </ol>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderBoundaries(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="boundary-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="panel-card">
                <p class="panel-label">${escapeHtml(card.label)}</p>
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
              <article class="callout-card callout-card--${escapeHtml(card.type)}">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderList(card.bullets)}
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
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="ownership-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="panel-card">
                <h3>${escapeHtml(card.title)}</h3>
                ${renderList(card.bullets)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDecisions(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="decision-grid">
        ${section.cards
          .map(
            (card) => `
              <article class="decision-card">
                ${renderStatusChip(card.status)}
                <h3>${escapeHtml(card.title)}</h3>
                <p><strong>Recommendation:</strong> ${escapeHtml(card.recommendation)}</p>
                <p><strong>Why it matters:</strong> ${escapeHtml(card.consequence)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTimeline(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="timeline-grid">
        ${section.phases
          .map(
            (phase) => `
              <article class="timeline-card">
                <p class="panel-label">${escapeHtml(phase.phase)}</p>
                <h3>${escapeHtml(phase.title)}</h3>
                <p>${escapeHtml(phase.detail)}</p>
                ${renderList(phase.steps)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLaunch(section) {
  return `
    <section id="${escapeHtml(section.id)}" class="section-card reveal">
      ${renderSectionHeader(section)}
      <div class="readiness-grid">
        ${section.readinessCards
          .map(
            (card) => `
              <article class="readiness-card readiness-card--${escapeHtml(card.state)}">
                <p class="panel-label">${escapeHtml(card.state)}</p>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="callout-grid">
        <article class="callout-card callout-card--warning">
          <h3>Immediate blockers</h3>
          ${renderList(section.blockers)}
        </article>
        <article class="callout-card callout-card--success">
          <h3>Next actions</h3>
          ${renderList(section.nextActions)}
        </article>
      </div>
    </section>
  `;
}

function renderSection(section) {
  switch (section.kind) {
    case "overview":
      return renderOverview(section);
    case "surface-grid":
      return renderSurfaceGrid(section);
    case "evidence-gallery":
      return renderEvidenceGallery(section);
    case "proof-ledger":
      return renderProofLedger(section);
    case "snapshot":
      return renderSnapshot(section);
    case "comparison":
      return renderComparison(section);
    case "journeys":
      return renderJourneys(section);
    case "boundaries":
      return renderBoundaries(section);
    case "ownership":
      return renderOwnership(section);
    case "decisions":
      return renderDecisions(section);
    case "timeline":
      return renderTimeline(section);
    case "launch":
      return renderLaunch(section);
    default:
      return "";
  }
}

export function renderDocument(siteData) {
  const sectionsHtml = siteData.sections.map(renderSection).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(siteData.meta.description)}" />
    <title>${escapeHtml(siteData.meta.title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="page-shell">
      ${renderHero(siteData.hero)}
      <div class="page-layout">
        ${renderSidebar(siteData.sidebar, siteData.sections)}
        <main class="main-column">
          ${sectionsHtml}
        </main>
      </div>
    </div>
    <noscript>
      <div class="noscript-banner">This page works without JavaScript for reading, but enhanced filters and navigation highlights require JavaScript.</div>
    </noscript>
    <script type="module" src="./app.js"></script>
  </body>
</html>`;
}
