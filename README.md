# RPL-Project
# 🔄 SkillSwap - Platform Pertukaran Keahlian Antar-Pengguna (*Peer-to-Peer*)

**SkillSwap** adalah platform web responsif berbasis komunitas yang dirancang untuk menghubungkan individu yang ingin mempelajari keahlian baru dengan orang lain yang memiliki keahlian tersebut, melalui sistem barter atau pertukaran keterampilan secara langsung (*peer-to-peer*).

---

## 🎯 Tema & Gambaran Umum

> **"Platform Web Responsif Berbasis Komunitas untuk Pertukaran Keahlian (Barter Skill) Antar-Pengguna Berdasarkan Minat dan Kebutuhan Spesifik"**

Projek ini dikembangkan sebagai solusi bagi individu yang ingin menguasai keterampilan baru (seperti bahasa asing, pemrograman, desain, atau musik) secara fleksibel tanpa memerlukan biaya finansial, melainkan dengan menukar keahlian yang mereka kuasai. Aplikasi ini difokuskan pada fitur-fitur inti (*core features*) yang realistis untuk diselesaikan dalam durasi **12 pertemuan pengembangan**.

---

## 🚨 Deskripsi Masalah

* **Masalah Utama:** Banyak orang ingin mempelajari keterampilan baru (misalnya desain grafis, bahasa asing, atau editing video), namun terkendala biaya kursus yang mahal atau kesulitan menemukan mentor yang tepat dengan sistem pembelajaran dua arah yang setara.
* **Dampak:** Potensi pengembangan diri terhambat, sementara banyak individu yang memiliki keahlian tertentu tidak memiliki wadah untuk membagikannya sekaligus mendapatkan keahlian baru sebagai timbal balik.

---

## 👤 Profil Target Pengguna

* **Pengguna Utama:** Pelajar, Mahasiswa, Pekerja Lepas (*Freelancer*), dan Profesional Muda (Usia 18–30 tahun).
* **Kebutuhan:** 
  * Ingin belajar keahlian baru secara praktis tanpa biaya (*free/barter*).
  * Membagikan keahlian yang sudah dikuasai untuk membantu orang lain sekaligus mengasah kemampuan diri.
  * Menemukan partner tukar keahlian dengan kriteria jadwal dan minat yang cocok.
* **Karakteristik:** Aktif secara digital dan terbiasa menggunakan aplikasi antarmuka *mobile-friendly* dan *web-responsive*.

---

## 💡 Manfaat Aplikasi

1. **Bagi Pengguna:** Memfasilitasi pertukaran ilmu dan keterampilan secara gratis melalui konsep barter kemampuan (*Skill A for Skill B*).
2. **Bagi Komunitas:** Membangun ekosistem kolaboratif di mana setiap anggota dapat berperan sekaligus sebagai pelajar (*learner*) dan pengajar (*mentor*).

---

## 🔑 Fitur Inti (Scope 12 Pertemuan)

| No | Fitur | Deskripsi |
| :--- | :--- | :--- |
| 1 | **Autentikasi & Profil Pengguna** | Pendaftaran dan login akun sederhana (Email & Password), pengisian profil mencakup Nama, Bio, *Skill I Have* (Keahlian yang dimiliki), dan *Skill I Want* (Keahlian yang ingin dipelajari). |
| 2 | **Eksplorasi & Pencarian Pengguna/Keahlian** | Pencarian dan penyaringan (*filtering*) daftar pengguna lain berdasarkan keahlian yang mereka tawarkan atau yang sedang mereka cari. |
| 3 | **Manajemen Permintaan Pertukaran (*Swap Request*)** | Fitur untuk mengajukan permintaan tukar keahlian (*Send Swap Request*), serta menerima atau menolak permintaan dari pengguna lain. |
| 4 | **Sistem Ruang Obrolan Sederhana (*Chat Room*)** | Ruang diskusi berupa pesan teks sederhana untuk koordinasi internal antar-pengguna yang telah disetujui permintaannya (*matched*). |
| 5 | **Dashboard / Daftar Pertukaran Saya** | Halaman khusus yang menampilkan status koneksi/permintaan pertukaran (Pending, Disetujui, Selesai) beserta daftar riwayat partner *skill swap*. |

---

## 🚫 Fitur yang Tidak Dikerjakan (*Out of Scope*)

Untuk memastikan proyek selesai tepat waktu dalam **12 kali pertemuan**, fitur-fitur berikut tidak termasuk dalam cakupan pengembangan:

1. **Panggilan Video / Live Class Bawaan:** Tidak menyediakan fitur *video conference* internal (proses belajar mengajar dilakukan via tautan eksternal seperti Zoom/Google Meet atau pertemuan langsung).
2. **Sistem Rating, Ulasan, & Gamifikasi (Badges):** Belum ada penilaian sistem reputasi, bintang, ulasan antar-pengguna, atau sistem *leveling*.
3. **Sistem Monetisasi / Dompet Digital:** Tidak ada transaksi pembayaran uang asli atau sistem koin/kredit berbayar (murni barter keahlian secara sukarela).
4. **Notifikasi Push (*Push Notifications*):** Tidak ada pengiriman notifikasi instan ke perangkat pengguna secara *real-time* (pembaruan status hanya terlihat di dalam web).
5. **Autentikasi Media Sosial / OAuth:** Login terbatas menggunakan akun lokal (Email & Password), tidak menggunakan Google/Facebook Sign-In.

---

## ✅ Kriteria Aplikasi Dinyatakan Berhasil

Aplikasi **SkillSwap** dinyatakan selesai dan sukses dikembangkan jika memenuhi kriteria berikut pada Pertemuan ke-12:

### 1. Fungsionalitas Utama (*Core Flow*) Berjalan Smooth
- [ ] Pengguna dapat mendaftar akun dan melengkapi profil keahlian yang dimiliki serta yang ingin dipelajari.
- [ ] Pengguna dapat mencari pengguna lain berdasarkan kategori keahlian tertentu.
- [ ] Pengguna dapat mengirim permintaan pertukaran (*Swap Request*), dan pengguna penerima dapat menyetujui atau menolaknya.
- [ ] Pengguna yang telah saling terhubung (*matched*) dapat mengirim dan membaca pesan teks di ruang obrolan (*chat*).

### 2. Keberhasilan Teknis
- [ ] Semua operasi **CRUD** (*Create, Read, Update, Delete*) pada data Profil Keahlian dan Permintaan Tukar berjalan tanpa galat.
- [ ] Pengujian dasar (*Black Box Testing*) mencatat tidak adanya *critical bug* pada alur utama pendaftaran hingga pengiriman pesan.

### 3. Pengujian Antarmuka (*UI/UX*)
- [ ] Antarmuka aplikasi dapat diakses secara responsif baik melalui *desktop* maupun perangkat *mobile*.
