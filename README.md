# Galeri Karya Anak — Digital Go

Website statis (HTML/CSS/JS biasa, tanpa framework) untuk:
1. Menampilkan galeri hasil karya mewarnai anak-anak (`index.html`)
2. Form upload karya baru dari pengguna (`upload.html`), pakai fitur **Netlify Forms**
3. Halaman terima kasih setelah submit (`thanks.html`)

## Cara Deploy (sekali di awal)

1. Buat repository baru di GitHub, upload semua file/folder di sini ke repo tersebut
   (drag & drop lewat website GitHub juga bisa, tidak perlu command line).
2. Login ke netlify.com, klik "Add new site" -> "Import an existing project" ->
   pilih repository GitHub yang baru dibuat.
3. Biarkan setting default (tidak perlu build command, karena ini situs statis biasa),
   klik Deploy.
4. Di menu Domain settings, ganti subdomain jadi `digitalgo123` supaya alamatnya jadi
   `digitalgo123.netlify.app`.
5. Buka tab **Forms** di dashboard Netlify -> pastikan form bernama `karya-anak`
   sudah terdeteksi (biasanya otomatis terdeteksi begitu situs pertama kali di-deploy).
6. Di tab **Forms > Form notifications**, klik "Add notification" -> "Email
   notification" -> masukkan email `digitalgo123.id@gmail.com` supaya kamu dapat
   email tiap ada yang submit karya.

## Alur Kerja Sehari-hari (setelah ada yang submit karya)

1. Kamu dapat email notifikasi dari Netlify (atau cek langsung di dashboard
   Netlify, tab Forms -> pilih form `karya-anak`).
2. Klik submission untuk lihat detail: nama pengirim, seri e-book, dan link foto
   yang di-upload.
3. Download foto tersebut, cek apakah pantas untuk ditampilkan publik.
4. **Kalau di-approve:**
   - Upload file foto itu ke folder `images/gallery/` di repo GitHub
     (buka repo di github.com, masuk folder `images/gallery`, klik "Add file" ->
     "Upload files", drag foto ke situ, commit).
   - Buka file `js/gallery-data.js` di GitHub, klik ikon pensil (edit),
     tambahkan 1 baris baru di dalam array `GALLERY_ITEMS`, contoh:
     ```js
     { file: "nama-file-foto.jpg", caption: "Karya dari Bunda Sari & Kayla" },
     ```
   - Commit perubahan. Netlify otomatis build ulang situsnya (biasanya kurang
     dari 1 menit), foto baru langsung muncul di galeri.
5. **Kalau tidak di-approve:** cukup diabaikan saja, tidak perlu tindakan apapun.

## Struktur File

```
index.html          -> halaman galeri (menampilkan foto-foto)
upload.html          -> halaman form upload karya baru
thanks.html          -> halaman terima kasih setelah submit
css/style.css        -> semua styling (warna, font, layout)
js/gallery.js        -> logika tampil galeri + tombol "Muat Lebih Banyak"
js/gallery-data.js   -> DAFTAR FOTO -- ini yang kamu edit tiap ada foto baru
images/gallery/      -> folder tempat semua file foto yang sudah di-approve
```

## Catatan

- 4 foto contoh (`sample-1.jpg` s/d `sample-4.jpg`) di folder `images/gallery/`
  cuma placeholder demo supaya kamu bisa lihat tampilan galerinya. Hapus baris
  yang bersangkutan di `gallery-data.js` (dan hapus file gambarnya) begitu sudah
  ada karya asli untuk ditampilkan.
- Kalau nanti volume submission sudah ramai dan proses approve manual mulai
  terasa merepotkan, alur ini bisa ditingkatkan jadi lebih otomatis (perlu
  dibangun ulang dengan database dan halaman admin) — tapi untuk skala awal,
  cara manual ini paling simpel dan tidak butuh biaya tambahan.
