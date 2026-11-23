# Praktikum Bootstrap 5: Company Profile Selaras Coffe

## 1. Tujuan Praktikum

- Menyusun halaman company profile satu halaman menggunakan Bootstrap 5.3.8 lewat CDN.
- Menggunakan komponen Bootstrap seperti navbar, card, alert, modal, dan form.
- Membuat stylesheet custom agar branding tetap terasa meskipun komponen dasar berasal dari Bootstrap.
- Menguji tampilan responsif pada ukuran desktop dan mobile.

## 2. Alat dan Bahan

| Kategori | Keterangan |
|---|---|
| Bahasa | HTML5, CSS3, dan JavaScript |
| Framework | Bootstrap 5.3.8 (CDN) |
| Text Editor | Visual Studio Code |
| Version Control | Git dan GitHub |

## 3. Struktur Proyek

```
Pertemuan 10/
├── Contoh 1/           # Program Studi Teknik Informatika
├── Contoh 2/           # Dashboard Mahasiswa
├── Quizz/              # Nexa Digital Technology
├── Tugas Praktikum/    # Company profile Selaras Coffe
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/
│   └── dokumentasi/
└── README.md
```

## 4. Hasil Praktikum

### 4.1 Contoh Program

| Folder | Keterangan |
|---|---|
| Contoh 1 | Menampilkan halaman Program Studi Teknik Informatika dengan hero, bagian kompetensi, fasilitas, kontak, dan modal pendaftaran menggunakan Bootstrap. |
| Contoh 2 | Menampilkan Dashboard Mahasiswa dengan kartu statistik, daftar kegiatan, alert, modal, dan form pendaftaran menggunakan Bootstrap dan stylesheet custom. |
| Quizz | Menampilkan halaman Nexa Digital Technology dengan kartu layanan, kartu statistik, dan modal menggunakan Bootstrap. |

### 4.2 Tugas Individu: Company Profile Selaras Coffe

Company profile UMKM kopi lokal dengan warna cokelat espresso, krem, dan aksen karamel, dikembangkan dari Contoh 2.

| Komponen | Keterangan |
|---|---|
| Navbar | Menampilkan menu navigasi tetap di atas yang berubah menjadi tombol hamburger di layar kecil menggunakan `navbar-expand-lg` dan `sticky-top`. |
| Hero | Menampilkan judul utama, tombol ajakan, dan ilustrasi kopi menggunakan `row` dan `col-lg-6`. |
| Alert | Menampilkan banner promo yang bisa ditutup menggunakan `alert-dismissible`. |
| Produk | Menampilkan 3 kartu produk (Americano, Dirty Latte, Ube Matcha) dalam grid `col-12 col-md-6 col-lg-4` menggunakan `card`. |
| Modal | Menampilkan detail produk saat tombol "Detail" diklik menggunakan `modal` dan atribut `data-*`. |
| Form Kontak | Memvalidasi nama, email, keperluan, dan pesan menggunakan `novalidate`, `was-validated`, dan `invalid-feedback`. |
| Footer | Menampilkan nama usaha, alamat, dan hak cipta menggunakan kelas `brand-footer`. |
| Branding | Menampilkan warna dan tombol khas Selaras Coffe menggunakan CSS variable (`--brand-primary`, `--brand-accent`) di `css/style.css`. |

#### Tampilan Desktop

![desktop-full](Tugas%20Praktikum/dokumentasi/desktop-full.png)

#### Tampilan Modal Detail Produk

![desktop-modal](Tugas%20Praktikum/dokumentasi/desktop-modal.png)

#### Tampilan Mobile

![mobile-full](Tugas%20Praktikum/dokumentasi/mobile-full.png)

#### Tampilan Menu Mobile

![mobile-menu](Tugas%20Praktikum/dokumentasi/mobile-menu.png)

## 5. Ringkasan Perubahan, Masalah, dan Solusi

Tugas ini mengembangkan struktur Contoh 2 (Dashboard Mahasiswa) menjadi company profile satu halaman untuk UMKM Selaras Coffe. Kerangka Bootstrap tetap dipakai, sedangkan isi dan tampilannya diganti: navbar dan footer berwarna cokelat tua, ditambah hero, bagian tentang kami, tiga card produk, alert promo, modal, dan form kontak.

Branding dibuat lewat `css/style.css`. Warna, radius, dan tombol didefinisikan sebagai CSS variable, lalu kelas seperti `.btn-brand`, `.alert-brand`, dan `.product-card` menimpa tampilan bawaan Bootstrap sehingga identitas kopi tetap terasa.

**Masalah pertama:** satu modal harus menampilkan tiga detail produk yang berbeda. Solusinya, data produk disimpan di atribut `data-*` pada tombol, lalu `js/script.js` mengisi modal saat event `show.bs.modal`.

**Masalah kedua:** validasi form di Contoh 2 hanya memakai atribut `required` tanpa pesan. Solusinya, form memakai `novalidate`, kelas `was-validated`, dan `invalid-feedback` agar pesan error tampil jelas.

Tampilan diuji pada lebar desktop (1366 px) dan mobile (390 px). Di layar kecil menu menjadi tombol hamburger dan card produk tersusun satu kolom.

## 6. Kesimpulan

- Bootstrap mempercepat pembuatan layout responsif lewat sistem grid 12 kolom.
- Komponen seperti navbar, card, modal, dan alert bisa dipakai langsung, lalu dipersonalisasi dengan stylesheet custom.
- Validasi form Bootstrap tetap perlu dilengkapi validasi di sisi server.
