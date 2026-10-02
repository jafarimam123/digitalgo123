(function () {
  const PAGE_SIZE = 9;
  let shown = 0;

  const grid = document.getElementById("videoGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const emptyState = document.getElementById("emptyState");

  // Ambil 11 karakter ID video dari berbagai bentuk link YouTube
  function getVideoId(url) {
    const m = String(url || "").match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/
    );
    return m ? m[1] : null;
  }

  // Ubah teks judul jadi aman (cegah karakter < > & merusak HTML)
  function esc(text) {
    const d = document.createElement("div");
    d.textContent = text == null ? "" : text;
    return d.innerHTML;
  }

  // Saat thumbnail diklik: ganti dengan player YouTube yang langsung main
  function playVideo(box, id, title) {
    box.innerHTML = `<iframe
      src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
      title="${esc(title)}"
      allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowfullscreen></iframe>`;
  }

  function renderNextBatch() {
    const all = typeof VIDEO_ITEMS !== "undefined" ? VIDEO_ITEMS : [];
    const items = all.filter((v) => getVideoId(v.url));
    const next = items.slice(shown, shown + PAGE_SIZE);

    next.forEach((item) => {
      const id = getVideoId(item.url);
      const title = item.title || "Video Digital Go";

      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <button class="video-thumb" type="button" aria-label="Putar video: ${esc(title)}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${esc(title)}" loading="lazy">
          <span class="play-badge">▶</span>
        </button>
        <div class="cap">${esc(title)}</div>
        <a class="yt-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Buka di YouTube ↗</a>
      `;

      const thumb = card.querySelector(".video-thumb");
      thumb.addEventListener("click", () => playVideo(thumb, id, title));
      grid.appendChild(card);
    });

    shown += next.length;

    loadMoreBtn.style.display = shown >= items.length ? "none" : "inline-flex";
    if (items.length === 0) {
      emptyState.style.display = "block";
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", renderNextBatch);
  renderNextBatch();
})();
