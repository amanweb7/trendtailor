/* ── Navbar scroll effect ── */
const navbar = document.getElementById("navbar");
const services = document.getElementById("services");

window.addEventListener("scroll", () => {
  const triggerPoint = services.offsetTop - navbar.offsetHeight;

  if (window.scrollY >= triggerPoint) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ── Mobile menu toggle ── */
const toggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("nav-mobile");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");

toggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  iconMenu.style.display = isOpen ? "none" : "block";
  iconClose.style.display = isOpen ? "block" : "none";
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    iconMenu.style.display = "block";
    iconClose.style.display = "none";
  });
});

/* ── Scroll-triggered reveals ── */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

/* ── Footer year ── */
document.getElementById("footer-year").textContent =
  `© ${new Date().getFullYear()} Trend Tailor by Jalpa. All rights reserved.`;
