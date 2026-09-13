(function () {
  const PAGE_SIZE = 12;
  let shown = 0;

  const grid = document.getElementById("galleryGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const emptyState = document.getElementById("emptyState");

  function renderNextBatch() {
    const items = window.GALLERY_ITEMS || [];
    const next = items.slice(shown, shown + PAGE_SIZE);

    next.forEach((item) => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.innerHTML = `
        <img src="images/gallery/${item.file}" alt="${item.caption || "Karya mewarnai anak"}" loading="lazy">
        <div class="cap">${item.caption || "Karya Ceria"}</div>
      `;
      grid.appendChild(card);
    });

    shown += next.length;

    if (shown >= items.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }

    if (items.length === 0) {
      emptyState.style.display = "block";
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", renderNextBatch);
  renderNextBatch();
})();
