# PRD — SELEMBAR Landing Page

## 1. Overview

**Nama Produk:** SELEMBAR  
**Tipe:** Landing Page (Marketing / Conversion)  
**Deskripsi:** SELEMBAR adalah startup yang menyediakan jasa pembuatan undangan digital berbasis web (pernikahan, ulang tahun, anniversary, dll), portofolio web, dan landing page custom. Landing page ini menjadi wajah utama bisnis sekaligus saluran konversi pelanggan baru.

**Tagline:** *"Setiap momen spesial layak diabadikan dengan indah."*

---

## 2. Goals & Success Metrics

### Business Goals
- Mengkonversi pengunjung menjadi calon klien (via WhatsApp / form order)
- Membangun kepercayaan melalui portofolio dan testimoni
- Mengedukasi pasar tentang layanan SELEMBAR

### Success Metrics
| Metrik | Target Awal |
|---|---|
| Bounce rate | < 60% |
| Waktu di halaman | > 2 menit |
| Klik CTA (WA / form) | > 5% dari pengunjung |
| Mobile usability score | > 90 (Lighthouse) |
| Page load time | < 3 detik |

---

## 3. Target Pengguna

### Persona 1 — Pasangan / Keluarga
- Usia 22–35 tahun
- Sedang merencanakan pernikahan, ulang tahun, anniversary
- Mencari undangan digital yang personal & estetik
- Lebih suka tanya via WhatsApp

### Persona 2 — Pelaku Bisnis / Freelancer
- Usia 20–35 tahun
- Butuh portofolio web atau landing page bisnis
- Melek digital, mempertimbangkan dari tampilan & harga
- Bisa mengisi form order secara mandiri

---

## 4. Struktur Halaman (Sections)

### Section 1 — Navbar
- Logo SELEMBAR (kiri)
- Nav links: Layanan, Portofolio, Cara Kerja, Testimoni, Kontak
- CTA Button: "Pesan Sekarang" (kanan) → scroll ke section CTA / buka WA
- Sticky saat scroll, background blur subtle saat di-scroll

### Section 2 — Hero
- Headline emosional (H1)
- Subheadline (1–2 kalimat deskripsi SELEMBAR)
- CTA primer: "Pesan Sekarang" → link WA
- CTA sekunder: "Lihat Portofolio" → scroll anchor
- Visual: mockup/preview karya (undangan & landing page)
- Tone: hangat, personal, menyentuh

### Section 3 — Social Proof Bar
- Strip horizontal berisi angka:
  - `X+ Klien Puas`
  - `X Undangan Dibuat`
  - `X Proyek Selesai`
  - Rating bintang (jika ada)
- Background kontras ringan agar terpisah dari hero

### Section 4 — Layanan Kami
- 3 card layanan utama:
  1. **Undangan Digital** — pernikahan, ulang tahun, anniversary, dll
  2. **Portofolio Web** — showcase karya personal / profesional
  3. **Landing Page** — halaman pemasaran untuk bisnis / produk
- Tiap card: ikon, nama layanan, deskripsi singkat, "Harga mulai dari Rp..."
- CTA tiap card: "Pesan Layanan Ini"

### Section 5 — Kenapa SELEMBAR?
- 4–5 keunggulan dalam grid ikon + teks:
  1. Proses mudah & cepat
  2. Desain personal sesuai keinginan
  3. Revisi hingga puas
  4. Harga transparan, no hidden fee
  5. Support responsif via WhatsApp
- Tone: meyakinkan tapi tetap hangat

### Section 6 — Portofolio / Showcase
- Filter tab: Semua | Undangan | Portofolio | Landing Page
- Grid karya (minimal 6 item, bisa lazy load)
- Tiap item: thumbnail, nama proyek, kategori
- Klik → modal preview atau buka link demo baru
- CTA bawah section: "Mau karya seperti ini? Hubungi Kami"

### Section 7 — Cara Kerja
- Timeline horizontal 4 langkah:
  1. **Isi Form / Chat WA** — ceritakan kebutuhan kamu
  2. **Diskusi & Desain** — kami buatkan draft pertama
  3. **Revisi** — sampai kamu puas
  4. **Terima & Pakai** — siap disebarkan / dipublikasi
- Visual step-by-step yang bersih

### Section 8 — Testimoni
- 3–6 testimoni klien
- Format: avatar/foto, nama, jenis layanan yang dipakai, quote
- Layout: grid 2 kolom atau carousel
- Tone autentik, bukan terkesan dibuat-buat

### Section 9 — CTA Final
- Headline penutup emosional
- Sub-copy singkat
- Tombol utama: "Pesan Sekarang via WhatsApp"
- Tombol sekunder: "Kirim Email"
- Background: warna brand yang hangat / ilustrasi ringan

### Section 10 — Footer
- Logo + tagline
- Navigasi singkat
- Link sosial media (Instagram, WhatsApp, dll)
- Copyright: `© 2025 SELEMBAR. All rights reserved.`

---

## 5. Fitur & Fungsionalitas

| Fitur | Prioritas | Keterangan |
|---|---|---|
| Responsive (mobile-first) | P0 | Wajib, mayoritas user mobile |
| Smooth scroll anchor | P0 | Nav link ke tiap section |
| Filter portofolio | P1 | Tab filter by kategori layanan |
| Modal preview karya | P1 | Klik karya → popup preview |
| Animasi scroll (Framer Motion / React Bits) | P1 | Fade-in, slide-up saat section masuk viewport |
| WhatsApp deeplink CTA | P0 | `https://wa.me/62XXXXXXXXXX?text=...` |
| Dark mode toggle | P2 | Opsional, bisa ditambah nanti |
| Form order inline | P2 | Alternatif selain WA, bisa pakai Formspree |
| SEO meta tags | P1 | Title, description, OG image |
| Analytics (Google Analytics / Vercel Analytics) | P1 | Track kunjungan & CTA click |

---

## 6. Desain & Tone

- **Vibe:** Hangat, personal, emosional — seperti bicara ke teman yang merayakan momen penting
- **Tipografi:** Kombinasi serif elegan (untuk headline) + sans-serif bersih (untuk body)
- **Warna:** Palet hangat — krem, coklat muda, putih tulang, aksen warna brand
- **Gambar:** Mockup karya nyata, bukan stock photo generik
- **Animasi:** Halus, tidak berlebihan — fade in, slide up, stagger card

---

## 7. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 14+ (App Router) |
| UI Library | React.js |
| Komponen Animasi | React Bits |
| Styling | Tailwind CSS |
| Animasi tambahan | Framer Motion (opsional, jika React Bits kurang) |
| Font | Google Fonts (Playfair Display + Inter) |
| Deployment | Vercel |
| Form handler | Formspree (jika pakai form inline) |
| Analytics | Vercel Analytics / Google Analytics 4 |

---

## 8. Struktur Folder (Next.js App Router)

```
selembar/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Landing page utama
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Portfolio.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTAFinal.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Modal.tsx
├── public/
│   ├── images/
│   │   ├── portfolio/      # Karya-karya
│   │   └── og-image.jpg    # OG image untuk SEO
│   └── fonts/
├── lib/
│   └── constants.ts        # Data layanan, portofolio, testimoni
└── tailwind.config.ts
```

---

## 9. Konten yang Perlu Disiapkan

- [ ] Logo SELEMBAR (SVG / PNG)
- [ ] Angka social proof (klien, proyek, dll)
- [ ] Foto/screenshot minimal 6 karya untuk portofolio
- [ ] Deskripsi & harga tiap layanan
- [ ] Minimal 3 testimoni klien (nama, foto/avatar, quote)
- [ ] Nomor WhatsApp bisnis
- [ ] Link sosial media aktif
- [ ] OG Image untuk share preview

---

## 10. Out of Scope (v1)

- Dashboard admin untuk manage portofolio
- Sistem pembayaran / checkout online
- Halaman detail per proyek
- Blog / artikel
- Multi-bahasa (EN/ID)

---

## 11. Timeline Estimasi

| Fase | Task | Estimasi |
|---|---|---|
| Setup | Init project, install deps, konfigurasi Tailwind | 0.5 hari |
| Layout | Navbar + Footer + struktur page | 0.5 hari |
| Sections | Hero → Social Proof → Services → WhyUs | 1 hari |
| Sections | Portfolio → HowItWorks → Testimonials → CTA | 1 hari |
| Polish | Animasi, responsif, SEO meta, review | 1 hari |
| Deploy | Push ke Vercel, domain, analytics | 0.5 hari |
| **Total** | | **~4–5 hari** |