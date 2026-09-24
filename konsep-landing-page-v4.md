# Konsep Landing Page — Personal Hub

**Nama:** Indy Adira Khalfani
**Role:** Security Researcher & IT Systems Enthusiast

**Tujuan halaman:** Halaman statis, ringan, dan cepat yang berfungsi sebagai pintu masuk utama ke seluruh properti online. Bukan pengganti atau redesign portfolio utama — hanya penghubung.

**Gaya visual:** Editorial & profesional, dengan sentuhan IT/technical yang subtle — lebih personal-brand daripada cyber/terminal dashboard.

**Bahasa:** Bilingual (Indonesia + English), dengan language switcher. Konsisten dengan portfolio utama yang juga bilingual.

**Catatan orisinalitas:** Referensi visual (misalnya template pihak ketiga) boleh dipakai sebagai acuan kualitas dan prinsip desain (hero besar, whitespace luas, tipografi profesional, navigasi sederhana), tapi **tidak disalin 1:1** — layout pixel-per-pixel, struktur HTML/class, asset gambar/ilustrasi, font berbayar, icon pack proprietary, dan copywriting-nya tetap berlisensi milik pembuat template. Halaman ini dibangun original, terinspirasi dari kualitas visual tersebut, bukan hasil clone.

---

## Arsitektur Domain & Bahasa

| Domain | Fungsi | Identitas visual | Bahasa |
|---|---|---|---|
| `indyadirak.my.id` | Landing page / personal hub (halaman ini) | Editorial, bersih, personal | Bilingual (ID/EN) |
| `portofolio.indyadirak.my.id` | Portfolio utama — project, certificates, admin CMS | Cyber/security, lebih teknis | Bilingual (ID/EN) |
| `blog.indyadirak.my.id` | Blog teknis | — | Indonesia |
| `wiki.indyadirak.my.id` | Knowledge base | — | Indonesia |
| `tools.indyadirak.my.id` | Tools / security utilities | — | English |

Karena blog dan wiki hanya berbahasa Indonesia, sedangkan tools hanya berbahasa Inggris, deskripsi pilar untuk ketiganya di landing page **tetap diterjemahkan mengikuti bahasa aktif landing page** (ID/EN) — bukan bahasa isi subdomain-nya. Pertimbangkan menambahkan penanda kecil bahasa pada kartu pilar (misal label `ID` di Blog/Wiki, `EN` di Tools) supaya pengunjung tidak kaget saat pindah halaman.

Landing page **tidak memuat**: admin CMS, database, autentikasi/MFA, daftar project detail, certificate management, dashboard, write-up lengkap. Semua itu ada di masing-masing subdomain — termasuk identitas visual cyber/security yang lebih kuat tetap dipertahankan khusus di portfolio utama, tidak di landing page.

---

## Struktur Konten

### 1. Header kecil
```
ID: Indy Adira Khalfani — Portfolio · Blog · Wiki · Tools · [EN]
EN: Indy Adira Khalfani — Portfolio · Blog · Wiki · Tools · [ID]
```
Language switcher diletakkan ringan di header, tidak mendominasi.

### 2. Hero
- Nama (elemen tipografi paling besar di halaman)
- Role: "Security Researcher & IT Systems Enthusiast" (sama di kedua bahasa — istilah teknis umum)
- Bio 2–3 kalimat, diterjemahkan penuh:
  > **ID:** "Saya merancang arsitektur keamanan, mengelola infrastruktur sistem, dan sesekali menyelesaikan CTF untuk hiburan. Halaman ini adalah titik awal untuk menjelajahi proyek, tulisan, dan dokumentasi teknis yang saya kerjakan."
  > **EN:** "I design security architecture, manage systems infrastructure, and occasionally solve CTFs for fun. This page is the starting point for exploring my projects, writing, and technical documentation."
- Opsional: status ketersediaan singkat (dua bahasa)
- CTA utama: `Explore portfolio →` (bisa dipertahankan Inggris di kedua versi sebagai micro-copy teknis, atau diterjemahkan `Jelajahi portfolio →` — putuskan konsistensi satu gaya)

### 3. Capabilities (Skill / Keahlian)
Nama teknologi tidak perlu diterjemahkan; hanya label kategori:
```
ID                              EN
Keamanan & Infrastruktur        Security & Infrastructure
Wazuh · Cowrie · Docker · Linux Wazuh · Cowrie · Docker · Linux

Web & Pengembangan              Web & Development
PHP · CMS Management · Custom Scripting

Jaringan                        Networking
Cloudflare Zero Trust · Network Defense
```

### 4. Pillars (Navigasi ke Empat Properti)
Portfolio diberi sedikit penekanan lebih (posisi pertama, deskripsi lebih kuat). Deskripsi tiap pilar diterjemahkan penuh; label bahasa subdomain (opsional) ditambahkan sebagai penanda kecil.

```
PORTFOLIO
ID: Dokumentasi arsitektur keamanan, project, dan implementasi infrastruktur.
EN: Documentation of security architecture, projects, and infrastructure work.
→ Buka portfolio / Explore portfolio

BLOG · ID
ID: Tulisan teknis, CTF write-up, dan catatan troubleshooting.
EN: Technical writing, CTF write-ups, and troubleshooting notes. (Indonesian only)
→ Baca tulisan / Read the blog

WIKI · ID
ID: Knowledge base pribadi tentang tools, sistem, dan referensi keamanan.
EN: Personal knowledge base on tools, systems, and security references. (Indonesian only)
→ Jelajahi wiki / Explore the wiki

TOOLS · EN
ID: Kumpulan tools dan security utilities yang saya kembangkan/gunakan. (Bahasa Inggris)
EN: A collection of tools and security utilities I build and use.
→ Lihat tools / View tools
```

**Fallback untuk pilar yang belum siap:** jangan tampilkan link mati. Gunakan status jelas per bahasa aktif, misalnya:
```
ID: TOOLS — Security utilities, segera hadir
EN: TOOLS — Security utilities, coming soon
```

### 5. Selected Links
```
GitHub · LinkedIn · Email
```
- Link email pakai `mailto:`
- External link pakai `rel="noopener noreferrer"`

### 6. Footer kecil
```
ID: © 2026 Indy Adira Khalfani — Privasi · Keamanan
EN: © 2026 Indy Adira Khalfani — Privacy · Security
```

---

## Arahan Visual

### Warna
| Peran | Nilai |
|---|---|
| Dasar / background | Putih / abu sangat terang (`#FAFAFA`) |
| Teks utama | Abu gelap kebiruan / navy pekat (`#1A2332`) |
| Aksen | Biru elektrik / cyan terkontrol (`#2563EB` atau `#0EA5E9`) — dipakai terbatas |

### Tipografi
- Body & heading: sans-serif profesional (Inter, IBM Plex Sans) — font gratis/open-source
- Elemen teknis (tag skill, status, label path, penanda bahasa `ID`/`EN`): font monospace (JetBrains Mono, IBM Plex Mono)
- Hindari ALL CAPS untuk label

### Layout
- Rata kiri (left-aligned), satu kolom
- `max-width` konten: **680px–820px**
- Whitespace luas antar-section, garis pemisah hairline tipis
- Language switcher kecil, konsisten posisinya (misal pojok kanan header), tidak mengganggu hierarki hero

### Motion
- Minim — transisi hover ringan saja, termasuk saat toggle bahasa (fade halus, bukan reload penuh jika memungkinkan)

### Yang Dihindari
- Card rounded seragam dengan shadow sama di semua elemen
- Eyebrow label ALL CAPS
- Ikon berlebihan / icon pack proprietary tanpa lisensi
- Background gelap total / tema hacker penuh
- Elemen dari portfolio utama: project cards, certificate list, dashboard UI, form kontak panjang, terminal animation, login/MFA
- Menyalin layout pixel-per-pixel, struktur HTML/class, asset gambar, atau copywriting dari template referensi manapun
- Toggle bahasa tanpa route terpisah (SPA-style di satu URL) — ini merugikan SEO karena hanya satu versi bahasa yang bisa diindex per URL

---

## Detail Teknis

### Rekomendasi Stack
```
Astro (static) — mendukung i18n routing bawaan untuk bilingual
Cloudflare Pages
Markdown/config sederhana untuk konten, dipisah per bahasa (mis. content/id/, content/en/)
Tanpa Supabase, tanpa backend, tanpa login
```
Deploy: GitHub repo → Cloudflare Pages → `indyadirak.my.id`

**Pendekatan bilingual: route terpisah + toggle UI (kombinasi, bukan pilih salah satu)**
- Struktur URL tetap route terpisah: `indyadirak.my.id/id/` dan `indyadirak.my.id/en/` (atau `/id/` sebagai default di root) — ini yang memberi manfaat SEO: tiap bahasa punya URL sendiri yang bisa diindex, dengan `hreflang` saling menaut.
- Language switcher di header tetap ada sebagai tombol/toggle — secara pengalaman pengguna terasa seperti "toggle instan", tapi di baliknya dia mengarahkan ke route bahasa lain, bukan mengganti teks in-place lewat JS tanpa berpindah URL.
- Astro i18n routing bawaan mendukung pola ini langsung, jadi tidak perlu memilih salah satu — keduanya berjalan bersamaan.

### Responsive
- Mobile-first
- Pilar jadi satu kolom di mobile; di desktop bisa tetap satu kolom atau blok sejajar sederhana
- Tidak ada horizontal overflow
- Language switcher tetap mudah diakses di mobile (jangan disembunyikan di hamburger menu kalau memungkinkan — cukup ringan untuk tetap terlihat)

### Accessibility
- Heading hierarchy: satu `h1`, lalu `h2`
- Setiap pilar adalah link yang jelas, bukan div yang hanya sebagian clickable
- Fokus keyboard terlihat
- Kontras teks memenuhi WCAG
- Atribut `lang` pada `<html>` disesuaikan bahasa aktif; `hreflang` untuk versi alternatif jika pakai route terpisah

### SEO
```
ID Title: Indy Adira Khalfani — Keamanan, Infrastruktur, dan Tulisan Teknis
EN Title: Indy Adira Khalfani — Security, Infrastructure, and Technical Writing

ID Description: Personal hub Indy Adira Khalfani untuk portfolio, blog teknis, dan wiki keamanan siber.
EN Description: Personal hub for Indy Adira Khalfani's portfolio, technical blog, and cybersecurity wiki.
```
Tambahkan: canonical tag, `hreflang` alternate per bahasa, Open Graph, `Person` JSON-LD, favicon, `robots.txt`, sitemap (jika subdomain lain sudah live).

### Performance
- Hindari font eksternal jika tidak perlu; jika pakai Inter/IBM Plex Sans, gunakan subset + `font-display: swap`
- Hindari background image besar
- Halaman tetap tampil cepat tanpa JavaScript untuk konten utama; toggle bahasa boleh pakai JS ringan
- Animasi hanya CSS, non-essential

---

## Wireframe Kasar (versi Indonesia)

```
Indy Adira Khalfani              Portfolio · Blog · Wiki · Tools · [EN]

Indy Adira Khalfani                                        ● Available
Security Researcher & IT Systems Enthusiast

Saya merancang arsitektur keamanan, mengelola infrastruktur sistem,
dan sesekali menyelesaikan CTF untuk hiburan.

[ Jelajahi portfolio → ]

Keamanan & Infrastruktur
Wazuh · Cowrie · Docker · Linux

Web & Pengembangan
PHP · CMS Management · Custom Scripting

Jaringan
Cloudflare Zero Trust · Network Defense

──────────────────────────────────────────────────
PORTFOLIO   Dokumentasi arsitektur keamanan, project,
            dan implementasi infrastruktur.        → Buka portfolio

BLOG · ID   Tulisan teknis, CTF write-up, dan
            catatan troubleshooting.                → Baca tulisan

WIKI · ID   Knowledge base pribadi tentang tools,
            sistem, dan referensi keamanan.          → Jelajahi wiki

TOOLS · EN  Kumpulan tools dan security utilities
            yang saya kembangkan/gunakan.            → Lihat tools
──────────────────────────────────────────────────

GitHub · LinkedIn · Email

© 2026 Indy Adira Khalfani          Privasi · Keamanan
```

---

## Keputusan yang Masih Perlu Diambil

1. URL final Portfolio, Blog, Wiki, dan Tools.
2. Status `coming soon` untuk pilar yang belum aktif.
3. ~~Implementasi bilingual~~ — sudah diputuskan: route terpisah (`/id/`, `/en/`) dengan language switcher di UI (lihat bagian Detail Teknis).
4. Apakah label penanda bahasa (`· ID` / `· EN`) di kartu Blog/Wiki/Tools memang diinginkan, atau cukup diterangkan lewat teks deskripsi saja.
5. Isi final link privacy/security di footer.
