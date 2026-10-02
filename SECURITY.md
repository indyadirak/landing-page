# Security Policy

**ID** | [EN](#english-version) di bawah.

## Versi Indonesia

### Versi yang Didukung

Proyek ini adalah landing page statis (Astro, tanpa backend, database, atau login).

| Versi | Status Dukungan |
| --- | --- |
| `main` / terbaru (`0.1.x`) | ✅ Didukung — terima laporan & patch keamanan |
| Release lama / fork tidak terawat | ❌ Tidak didukung — silakan update ke `main` terbaru |

Dependency utama: `astro >= 7.3.4`. Update dependency otomatis via Dependabot (mingguan).

### Cara Melapor

**Jangan buka public issue untuk kerentanan.**

Lapor melalui salah satu kanal ini:

1. **Email:** `me@indyadirak.my.id` — subjek `[SECURITY] <judul singkat>`
2. **Sesuai RFC 9116:** https://indyadirak.my.id/.well-known/security.txt

Sertakan dalam laporan:

- Deskripsi kerentanan & dampaknya
- Langkah reproduksi / PoC (URL, browser, payload — tanpa data sensitif asli)
- Versi/commit yang terpengaruh, log atau screenshot bila ada
- Kontak Anda untuk tindak lanjut (opsional, bila ingin kredit)

Yang akan Anda terima:

- Konfirmasi penerimaan dalam **48 jam**
- Update triase awal dalam **5 hari kerja**
- Kami akan koordinasikan timeline perbaikan & publikasi dengan Anda
- Kredit nama/username di release notes bila Anda menginginkan

### Ruang Lingkup

**Dalam cakupan:**

- `indyadirak.my.id` dan `id/` / `en/` (XSS, open redirect, clickjacking, bypass CSP/headers, mixed content, kebocoran PII, supply-chain via `npm`)
- Konfigurasi keamanan di repo ini: `public/_headers`, `public/.well-known/security.txt`, `public/robots.txt`, workflow GitHub Actions / Cloudflare Pages

**Di luar cakupan (mohon tidak dilaporkan sebagai vuln repo ini):**

- Properti terpisah: `portofolio.*`, `blog.*`, `wiki.*`, `tools.*` — laporkan ke kontak masing-masing properti bila ada
- Serangan volumetrik / DoS, spam, social engineering, phishing pihak ketiga
- Laporan otomatis tanpa PoC, hasil scanner tanpa validasi manual, atau isu `Expires` di `security.txt` yang sudah terjadwal rotasi
- Isu pada browser / Cloudflare / Astro upstream itu sendiri (silakan lapor ke upstream, beri tahu kami tautannya)

### Kebijakan Pengujian

- Gunakan hanya akun/data milik Anda. Jangan akses, ubah, atau eksfiltrasi data pengguna lain.
- Jangan melakukan DoS, brute-force agresif, atau pengujian yang mengganggu ketersediaan situs.
- Dilarang menyisipkan konten berbahaya yang persisten (stored XSS) yang terlihat publik.
- Ikuti prinsip responsible disclosure: beri kami waktu memperbaiki sebelum publikasi.

Kami **tidak** menuntut peneliti yang mematuhi kebijakan ini dengan itikad baik.

### Praktik Keamanan Repo Ini

- Situs 100% statis (`dist/`), tanpa backend/login — permukaan serangan minimal
- Security headers via `public/_headers` (CSP ketat, `X-Frame-Options: DENY`, `nosniff`, `Permissions-Policy`, dll.)
- HTTPS enforced + Email Obfuscation di Cloudflare Pages
- `npm audit` harus bersih (0 vulnerability) sebelum merge; Dependabot update mingguan
- `security.txt` sesuai RFC 9116 — rotasi `Expires` sebelum 2027-09-27

---

## English Version

### Supported Versions

This project is a static landing page (Astro, no backend, database, or login).

| Version | Support status |
| --- | --- |
| `main` / latest (`0.1.x`) | ✅ Supported — accepts security reports & patches |
| Old releases / unmaintained forks | ❌ Unsupported — please update to latest `main` |

Main dependency: `astro >= 7.3.4`. Automated updates via Dependabot (weekly).

### Reporting a Vulnerability

**Do not open a public issue for vulnerabilities.**

Report via either channel:

1. **Email:** `me@indyadirak.my.id` — subject `[SECURITY] <short title>`
2. **Per RFC 9116:** https://indyadirak.my.id/.well-known/security.txt

Please include:

- Vulnerability description & impact
- Reproduction steps / PoC (URL, browser, payload — no real sensitive data)
- Affected version/commit, logs or screenshots if available
- Your contact for follow-up (optional, if you want credit)

What to expect:

- Acknowledgement within **48 hours**
- Initial triage update within **5 business days**
- We will coordinate fix & disclosure timeline with you
- Name/username credit in release notes if desired

### Scope

**In scope:**

- `indyadirak.my.id` and `id/` / `en/` (XSS, open redirect, clickjacking, CSP/header bypass, mixed content, PII leakage, supply-chain via `npm`)
- Security config in this repo: `public/_headers`, `public/.well-known/security.txt`, `public/robots.txt`, GitHub Actions / Cloudflare Pages workflows

**Out of scope (please do not report as a vuln in this repo):**

- Separate properties: `portofolio.*`, `blog.*`, `wiki.*`, `tools.*` — report to each property's contact if applicable
- Volumetric / DoS attacks, spam, social engineering, third-party phishing
- Automated reports without PoC, unvalidated scanner output, or scheduled `Expires` rotation in `security.txt`
- Issues in browsers / Cloudflare / Astro upstream themselves (report upstream, send us the link)

### Testing Policy

- Use only your own accounts/data. Do not access, modify, or exfiltrate other users' data.
- No DoS, aggressive brute-force, or availability-disrupting testing.
- No persistent malicious content (stored XSS) visible to the public.
- Follow responsible disclosure: give us time to fix before publishing.

We will **not** pursue good-faith researchers who comply with this policy.

### Security Practices in This Repo

- 100% static site (`dist/`), no backend/login — minimal attack surface
- Security headers via `public/_headers` (strict CSP, `X-Frame-Options: DENY`, `nosniff`, `Permissions-Policy`, etc.)
- HTTPS enforced + Email Obfuscation on Cloudflare Pages
- `npm audit` must be clean (0 vulnerabilities) before merge; weekly Dependabot updates
- RFC 9116 `security.txt` — rotate `Expires` before 2027-09-27
