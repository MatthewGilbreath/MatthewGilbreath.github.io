// 1) Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile nav after tapping a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// 2) Highlight the nav link for the section currently in view
const sections = document.querySelectorAll("[data-section]");

const setActiveLink = (id) => {
  navLinks.forEach((a) => {
    const target = a.getAttribute("href");
    a.classList.toggle("active", target === `#${id}`);
  });
};

// Use IntersectionObserver so it’s efficient (no scroll spam)
const observer = new IntersectionObserver(
  (entries) => {
    // Pick the entry that’s most visible
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) setActiveLink(visible.target.id);
  },
  {
    root: null,
    threshold: [0.25, 0.4, 0.6],
  }
);

sections.forEach((s) => observer.observe(s));

// 3) Footer year stamp (unused on this page but kept for completeness)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
