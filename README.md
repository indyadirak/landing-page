# Personal Hub — indyadirak.my.id

Landing page / personal hub statis untuk **Indy Adira Khalfani** (Security Researcher & IT Systems Enthusiast).
Pintu masuk ke empat properti: Portfolio, Blog, Wiki, dan Tools.

- Production: `https://indyadirak.my.id`
- Indonesia: `https://indyadirak.my.id/id/`
- English: `https://indyadirak.my.id/en/`

## Tech Stack

- **Astro >= 7.3.5** (static site generator, output `dist/`) — tanpa backend, database, login, atau framework JS besar
- **Bilingual i18n routing bawaan Astro**: route terpisah `/id/` dan `/en/` + language switcher di header
- HTML/CSS + satu file JS eksternal (`public/scripts/site.js`: rotator peran, reveal-on-scroll, keduanya progressive enhancement)
- Tipografi via Google Fonts (Inter Tight + Inter + JetBrains Mono, diizinkan eksplisit di CSP) + `og-image.png` untuk Open Graph/Twitter card
- Deploy: **Cloudflare Pages** dari GitHub (`npm run build` → `dist/`)

## Struktur Project

```text
src/
  pages/
    index.astro        # redirect / → /id/
    404.astro          # halaman 404 bilingual
    id/index.astro     # halaman Bahasa Indonesia
    en/index.astro     # halaman English
  components/
    HomeContent.astro  # hero, kapabilitas, pilar properti, tautan pilihan
  layouts/
    BaseLayout.astro   # head, SEO/OG tags, header, footer, script eksternal
  i18n/
    id.ts / en.ts      # seluruh copy per bahasa
  types/
    site.ts            # data kontak, status properti, tipe Locale
  styles/
    global.css         # design tokens + seluruh style (tema gelap)
public/
  favicon.svg
  og-image.png         # Open Graph image 1200×630
  robots.txt
  sitemap.xml
  humans.txt
  scripts/site.js      # JS progresif (rotator + reveal), tanpa framework
  _headers             # security headers (Cloudflare Pages, termasuk CSP + izin Google Fonts)
  .well-known/
    security.txt       # RFC 9116 — rotate Expires sebelum 2027-09-27
.github/
  dependabot.yml       # update npm + github-actions mingguan
  workflows/
    security.yml       # npm audit + cek headers/security.txt + build (Node 22)
SECURITY.md            # kebijakan pelaporan kerentanan (ID/EN)
```

## Perintah

```bash
npm ci        # install sesuai lockfile (dipakai CI)
npm run dev   # dev server
npm run build # build statis ke dist/
npm run preview  # serve hasil build secara lokal
npm audit     # cek vulnerability (harus 0)
```

## Status Properti & Kontak

| Properti | URL | Status |
|---|---|---|
| Portfolio | `portofolio.indyadirak.my.id` | live |
| Blog | `blog.indyadirak.my.id` | live |
| Wiki | `wiki.indyadirak.my.id` | coming soon |
| Tools | `tools.indyadirak.my.id` | coming soon |

Kontak: GitHub `indyadirak`, LinkedIn `indyadirak`, email `me@indyadirak.my.id` (alias publik).

## Konfigurasi Cloudflare Pages

- Framework preset: Astro (atau None)
- Build command: `npm run build`
- Output directory: `dist`
- Custom domain: `indyadirak.my.id`
- Disarankan: paksa HTTPS + aktifkan Email Address Obfuscation.

## Keamanan

- Kebijakan pelaporan: `SECURITY.md` (ID/EN) — lapor via `me@indyadirak.my.id`, jangan via public issue
- Headers via `public/_headers`: HSTS, `X-Frame-Options: DENY`, CSP ketat (pengecualian minimal untuk Google Fonts), `nosniff`, `Permissions-Policy`, COOP/CORP
- `security.txt` (RFC 9116), Dependabot mingguan (npm + github-actions), workflow `security.yml` (audit + cek headers + build, Node 22)

## Catatan Desain

Tema gelap editorial (amandemen dari brief awal yang terang). Prinsip yang dijaga:
Inter Tight untuk display/heading, Inter untuk body, JetBrains Mono hanya label teknis, satu kolom
`max-width 820px`, hairline tipis, motion minimal (nonaktif bila `prefers-reduced-motion`), kontras teks ≥ WCAG AA,
tanpa elemen portfolio utama (project cards, dashboard, terminal animation, login).
Referensi visual pihak ketiga hanya dipakai sebagai acuan prinsip — tidak disalin.

## Lisensi

[MIT](LICENSE) © 2026 Indy Adira Khalfani.

## Keterbukaan AI

Repositori ini dikembangkan dengan bantuan AI (coding assistant), termasuk draf kode, copy, dan dokumen.
Seluruh output AI dikurasi, diuji (`npm run build`, `npm audit`), dan diverifikasi manual oleh penulis sebelum di-commit.
Tanggung jawab atas isi akhir ada pada pemegang hak cipta di atas.
