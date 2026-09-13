/*
  DAFTAR FOTO GALERI
  ===================
  Cara menambah foto baru (setelah kamu approve dari dashboard Netlify Forms):

  1. Upload file foto ke folder: images/gallery/  (lewat GitHub, drag & drop file)
  2. Tambahkan 1 baris baru di array GALLERY_ITEMS di bawah ini, contoh:

     { file: "nama-file-baru.jpg", caption: "Karya dari Ayah Budi" },

  3. Commit perubahan di GitHub -> Netlify otomatis build ulang situsnya.

  Urutan di sini = urutan tampil di galeri (paling atas = paling baru disarankan
  ditaruh paling awal supaya muncul duluan).
*/

const GALLERY_ITEMS = [
  { file: "sample-1.jpg", caption: "Contoh tampilan galeri" },
  { file: "sample-2.jpg", caption: "Contoh tampilan galeri" },
  { file: "sample-3.jpg", caption: "Contoh tampilan galeri" },
  { file: "sample-4.jpg", caption: "Contoh tampilan galeri" },
];
