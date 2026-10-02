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
  // { url: "https://www.youtube.com/watch?v=GANTI_DENGAN_ID_VIDEO", title: "Judul video pertama" },
];
