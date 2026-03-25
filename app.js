const revealNodes = document.querySelectorAll(".reveal");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = [...document.querySelectorAll("main .section-card[id]")];
const filterGroups = [...document.querySelectorAll("[data-filter-group]")];

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function setupScrollSpy() {
  if (!("IntersectionObserver" in window) || !sections.length) {
    return;
  }

  const linkMap = new Map(
    navLinks.map((link) => [link.getAttribute("href")?.slice(1), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navLinks.forEach((link) => link.classList.remove("is-active"));
      linkMap.get(visible.target.id)?.classList.add("is-active");
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.1, 0.25, 0.45],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupFilters() {
  filterGroups.forEach((group) => {
    const buttons = [...group.querySelectorAll("[data-filter-value]")];
    const section = group.closest(".section-card");

    if (!section) {
      return;
    }

    const cards = [...section.querySelectorAll(".proof-card[data-status]")];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.filterValue ?? "all";

        buttons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");

        cards.forEach((card) => {
          const matches = value === "all" || card.dataset.status === value;
          card.hidden = !matches;
        });
      });
    });
  });
}

setupReveal();
setupScrollSpy();
setupFilters();
