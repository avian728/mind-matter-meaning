(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) root.dataset.theme = storedTheme;

  const themeButton = document.querySelector(".theme-toggle");
  themeButton?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("#nav-links");
  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  const progress = document.querySelector("#reading-progress");
  const topButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    topButton?.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });

  topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const searchInput = document.querySelector("#search-input");
  const searchResults = document.querySelector("#search-results");
  if (searchInput && searchResults) {
    const baseUrl = window.MMM_BASEURL || "";
    fetch(baseUrl + "/search.json")
      .then((response) => response.json())
      .then((items) => {
        searchInput.addEventListener("input", () => {
          const query = searchInput.value.trim().toLowerCase();
          if (!query) {
            searchResults.innerHTML = "";
            return;
          }
          const matches = items.filter((item) =>
            [item.title, item.subtitle, item.category, item.excerpt]
              .join(" ")
              .toLowerCase()
              .includes(query)
          ).slice(0, 20);
          searchResults.innerHTML = matches.map((item) => `
            <article class="post-card">
              <p class="eyebrow">${item.category || "Article"}</p>
              <h3><a href="${item.url}">${item.title}</a></h3>
              <p>${item.excerpt}</p>
            </article>
          `).join("") || "<p>No matching articles found.</p>";
        });
      });
  }
})();
