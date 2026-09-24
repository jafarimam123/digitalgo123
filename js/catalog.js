(function () {
  const LYNK_URL = "https://lynk.id/digitalgo123";

  const bundleGrid = document.getElementById("bundleGrid");
  const seriesGrid = document.getElementById("seriesGrid");
  const chipRow = document.getElementById("chipRow");
  const tabBundle = document.getElementById("tabBundle");
  const tabSeries = document.getElementById("tabSeries");
  const bundleSection = document.getElementById("bundleSection");
  const seriesSection = document.getElementById("seriesSection");

  function seriesByCode(code) {
    return (window.SERIES_ITEMS || []).find((s) => s.code === code);
  }

  function renderBundles() {
    const bundles = window.BUNDLE_ITEMS || [];
    bundleGrid.innerHTML = bundles
      .map((b) => {
        const members = b.seriesCodes.map(seriesByCode).filter(Boolean);
        const icons = members
          .map((s) => {
            const meta = CATEGORY_META[s.category] || {};
            return `<span class="${meta.css || ""}">${meta.emoji || "🎨"}</span>`;
          })
          .join("");
        const list = members.map((s) => `<li>${s.title}</li>`).join("");
        return `
        <a class="bundle-card" href="${LYNK_URL}" target="_blank" rel="noopener">
          <div class="bcount">5 Seri</div>
          <div class="bname">${b.name}</div>
          <div class="bundle-icons">${icons}</div>
          <ul class="bundle-series-list">${list}</ul>
          <div class="cta-hint">Lihat paket ini di Lynk.id →</div>
        </a>`;
      })
      .join("");
  }

  function renderChips() {
    const categories = Object.keys(CATEGORY_META);
    const chips = ["Semua", ...categories];
    chipRow.innerHTML = chips
      .map(
        (c, i) =>
          `<button class="chip${i === 0 ? " active" : ""}" data-cat="${c}" type="button">${
            c === "Semua" ? "Semua" : `${CATEGORY_META[c].emoji} ${c}`
          }</button>`
      )
      .join("");

    chipRow.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        chipRow.querySelectorAll(".chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderSeries(btn.dataset.cat);
      });
    });
  }

  function renderSeries(filterCat) {
    const items = window.SERIES_ITEMS || [];
    const filtered =
      !filterCat || filterCat === "Semua" ? items : items.filter((s) => s.category === filterCat);

    seriesGrid.innerHTML = filtered
      .map((s) => {
        const meta = CATEGORY_META[s.category] || {};
        return `
        <a class="series-card" href="${LYNK_URL}" target="_blank" rel="noopener">
          <div class="cover-wrap">
            <img src="images/catalog/seri-${s.code}.jpg" alt="${s.title}" loading="lazy"
                 onerror="this.onerror=null;this.remove();">
            <div class="cover-ph ${meta.css || ""}">${meta.emoji || "🎨"}</div>
          </div>
          <div class="stitle">${s.title}</div>
          <span class="scat">${s.category}</span>
        </a>`;
      })
      .join("");
  }

  function showTab(which) {
    const isBundle = which === "bundle";
    tabBundle.classList.toggle("active", isBundle);
    tabSeries.classList.toggle("active", !isBundle);
    bundleSection.classList.toggle("active", isBundle);
    seriesSection.classList.toggle("active", !isBundle);
  }

  tabBundle.addEventListener("click", () => showTab("bundle"));
  tabSeries.addEventListener("click", () => showTab("series"));

  renderBundles();
  renderChips();
  renderSeries("Semua");
})();
