(() => {
  const themeToggle = document.querySelector(".theme-toggle");

  const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  };

  try {
    const savedTheme = localStorage.getItem("relevie-portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  } catch {
    // The default light theme still works when storage is unavailable.
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("relevie-portfolio-theme", nextTheme);
    } catch {
      // Keep the selected theme for this visit if storage is unavailable.
    }
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;

        links.forEach((link) => {
          if (link.hash === `#${current.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
