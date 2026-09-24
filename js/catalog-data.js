/*
  DATA KATALOG SERI & BUNDLE
  ===========================
  Sumber data: spreadsheet rotasi-crosssell-digitalgo.xlsx
  (tab "Rotasi Cross-Sell" untuk daftar seri, tab "Referensi Bundle" untuk anggota tiap bundle)

  Cara menambah SERI baru:
  1. Siapkan file cover, kasih nama: seri-XXXX.jpg (XXXX = kode 4 digit, contoh: seri-0031.jpg)
     lalu upload ke folder images/catalog/ (lewat GitHub, drag & drop).
  2. Tambahkan 1 objek baru di array SERIES_ITEMS di bawah, contoh:
     { code: "0031", title: "Nama Seri Baru", category: "Alam/Pemandangan", bundleCode: "BDL-01" },
  3. Masukkan kode serinya ke seriesCodes bundle yang sesuai di BUNDLE_ITEMS
     (pilih bundle yang jumlah anggotanya masih paling sedikit / kategori temanya paling cocok).
  4. Commit di GitHub -> Netlify otomatis build ulang, seri baru langsung muncul di katalog.

  Cara menambah BUNDLE baru: tambah 1 objek baru di BUNDLE_ITEMS dengan 5 kode seri anggotanya.

  Catatan: harga sengaja TIDAK ditampilkan di katalog ini. Semua kartu (seri maupun bundle)
  langsung mengarah ke halaman toko Lynk.id.
*/

const CATEGORY_META = {
  "Alam/Pemandangan": { emoji: "🌿", css: "cat-alam" },
  "Bangunan/Landmark": { emoji: "🏛️", css: "cat-bangunan" },
  "Transportasi": { emoji: "🚗", css: "cat-transportasi" },
  "Objek/Benda Sehari-hari": { emoji: "🧸", css: "cat-objek" },
  "Edukasi Dasar & Sains": { emoji: "🔬", css: "cat-edukasi" },
};

const SERIES_ITEMS = [
  { code: "0001", title: "Pemandangan Alam", category: "Alam/Pemandangan", bundleCode: "BDL-01" },
  { code: "0002", title: "Seri Pesawat Terbang", category: "Transportasi", bundleCode: "BDL-01" },
  { code: "0003", title: "Dunia Buah-buahan", category: "Alam/Pemandangan", bundleCode: "BDL-02" },
  { code: "0004", title: "Mengenal Perabot Rumah", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-03" },
  { code: "0005", title: "Mengenal Bunga", category: "Alam/Pemandangan", bundleCode: "BDL-03" },
  { code: "0006", title: "Mengenal Alat Kerja", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-04" },
  { code: "0007", title: "Mengenal Bangunan", category: "Bangunan/Landmark", bundleCode: "BDL-01" },
  { code: "0008", title: "Mengenal Benda Elektronik", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-03" },
  { code: "0009", title: "Jembatan Terkenal di Dunia", category: "Bangunan/Landmark", bundleCode: "BDL-02" },
  { code: "0010", title: "Mengenal Mobil Sport", category: "Transportasi", bundleCode: "BDL-02" },
  { code: "0011", title: "Mengenal Alat Komunikasi", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-04" },
  { code: "0012", title: "Seri Mobil Antik", category: "Transportasi", bundleCode: "BDL-03" },
  { code: "0013", title: "Dunia Transportasi", category: "Transportasi", bundleCode: "BDL-04" },
  { code: "0014", title: "Seri Bangunan Terkenal Dunia", category: "Bangunan/Landmark", bundleCode: "BDL-03" },
  { code: "0015", title: "Seri Kendaraan Perang", category: "Transportasi", bundleCode: "BDL-01" },
  { code: "0016", title: "Seri Kendaraan Konstruksi", category: "Transportasi", bundleCode: "BDL-02" },
  { code: "0017", title: "Seri Masjid Terkenal di Dunia", category: "Bangunan/Landmark", bundleCode: "BDL-04" },
  { code: "0018", title: "Seri Menjelajahi Dunia", category: "Alam/Pemandangan", bundleCode: "BDL-04" },
  { code: "0019", title: "Seri Permainan di Taman", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-01" },
  { code: "0020", title: "Seri Mengenal Benda-benda di Sekolah", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-02" },
  { code: "0021", title: "Seri Luar Angkasa", category: "Edukasi Dasar & Sains", bundleCode: "BDL-05" },
  { code: "0022", title: "Seri Mengenal Bentang Alam di Bumi", category: "Alam/Pemandangan", bundleCode: "BDL-05" },
  { code: "0023", title: "Seri Mengenal Angka dan Berhitung", category: "Edukasi Dasar & Sains", bundleCode: "BDL-05" },
  { code: "0024", title: "Seri Mengenal Warna", category: "Edukasi Dasar & Sains", bundleCode: "BDL-05" },
  { code: "0025", title: "Seri Mengenal Bentuk dan Pola", category: "Edukasi Dasar & Sains", bundleCode: "BDL-05" },
  { code: "0026", title: "Mengenal Tubuh Kita", category: "Edukasi Dasar & Sains", bundleCode: "BDL-06" },
  { code: "0027", title: "Mengenal Alam dan Cuaca", category: "Alam/Pemandangan", bundleCode: "BDL-06" },
  { code: "0028", title: "Mengenal Makanan Sehat", category: "Objek/Benda Sehari-hari", bundleCode: "BDL-06" },
  { code: "0029", title: "Seri Mengenal Truk dan Container Besar", category: "Transportasi", bundleCode: "BDL-06" },
  { code: "0030", title: "Mengenal Alat-alat Sains", category: "Edukasi Dasar & Sains", bundleCode: "BDL-06" },
];

const BUNDLE_ITEMS = [
  { code: "BDL-01", name: "Bundle Petualangan Dunia", seriesCodes: ["0001", "0007", "0002", "0015", "0019"] },
  { code: "BDL-02", name: "Bundle Jelajah Seru", seriesCodes: ["0003", "0009", "0010", "0016", "0020"] },
  { code: "BDL-03", name: "Bundle Kenal Dunia Sekitar", seriesCodes: ["0005", "0014", "0012", "0004", "0008"] },
  { code: "BDL-04", name: "Bundle Ceria Serba Ada", seriesCodes: ["0018", "0017", "0013", "0006", "0011"] },
  { code: "BDL-05", name: "Bundle Belajar Ceria", seriesCodes: ["0021", "0022", "0023", "0024", "0025"] },
  { code: "BDL-06", name: "Bundle Pengetahuan Seru", seriesCodes: ["0026", "0027", "0028", "0029", "0030"] },
];
