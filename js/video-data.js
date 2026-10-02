/*
  DAFTAR VIDEO YOUTUBE
  ====================
  Cara menambah video baru:

  1. Buka video di YouTube, salin link-nya (dari tombol Bagikan / address bar).
  2. Tambahkan 1 baris baru di array VIDEO_ITEMS di bawah ini, contoh:

     { url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", title: "Judul video" },

     (link format youtu.be/XXXX, /shorts/XXXX, atau /embed/XXXX juga boleh)

  3. Commit perubahan di GitHub -> Netlify otomatis build ulang.

  Urutan di sini = urutan tampil (paling atas = paling awal muncul).
  Kolom "title" opsional, tapi disarankan supaya rapi.
*/

const VIDEO_ITEMS = [
   { url: "https://www.youtube.com/shorts/RxvX1gAbaeI", title: "DG V01 BRAND INTRO Kenalan dengan Digital Go: Ebook Mewarnai Anak 🌈" },
   { url: "https://www.youtube.com/shorts/q6Xul9V5lUo", title: "DG V02 S07 BEFORE AFTER Kenalkan Si Kecil pada Landmark Dunia Lewat Warna 🖍️" },
   { url: "https://www.youtube.com/shorts/igwjHVwfWdo", title: "Si Kecil Suka Pesawat? Yuk Mewarnai Bareng Digital Go ✈️" },
   { url: "https://www.youtube.com/shorts/HCWrTQTS250", title: "🎁 Satu Bundle, 5 Seri Seru: Bundle Kenal Dunia Sekitar!" },
];
