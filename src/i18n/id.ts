import type { Locale } from '../types/site';

export const locale: Locale = 'id';

export const copy = {
  title: 'Indy Adira Khalfani — Keamanan, Infrastruktur, dan Tulisan Teknis',
  description: 'Personal hub Indy Adira Khalfani untuk portfolio, blog teknis, dan wiki keamanan siber.',
  nav: {
    portfolio: 'Portfolio',
    blog: 'Blog',
    wiki: 'Wiki',
    tools: 'Tools',
    soon: 'segera hadir',
    switchLanguage: 'EN',
  },
  hero: {
    eyebrow: '~/personal-hub · v2026',
    role: 'Security Researcher & IT Systems Enthusiast',
    rotating: ['Security Researcher', 'IT Systems Enthusiast', 'CTF Solver'],
    bio: 'Saya merancang arsitektur keamanan, mengelola infrastruktur sistem, dan sesekali menyelesaikan CTF untuk hiburan. Halaman ini adalah titik awal untuk menjelajahi proyek, tulisan, dan dokumentasi teknis yang saya kerjakan.',
    availability: 'Terbuka untuk peluang kerja',
    cta: 'Jelajahi portfolio',
  },
  capabilities: {
    title: 'Keahlian',
    items: [
      { name: 'Keamanan & Infrastruktur', context: 'Deteksi ancaman & segmentasi infrastruktur tingkat lanjut.', tools: 'Wazuh · Cowrie · Docker · Linux' },
      { name: 'Web & Pengembangan', context: 'Pengembangan CMS, skrip kustom, dan otomatisasi sistem.', tools: 'PHP · CMS Management · Custom Scripting' },
      { name: 'Jaringan', context: 'Arsitektur Zero Trust & keamanan perimeter jaringan.', tools: 'Cloudflare Zero Trust · Network Defense' },
    ],
  },
  pillars: {
    title: 'Direktori',
    portfolio: { description: 'Studi Kasus: Arsitektur jaringan tersegmentasi & keamanan firewall stateful (MikroTik).', action: 'Buka portfolio' },
    blog: { description: 'Tulisan teknis, CTF write-up, dan catatan troubleshooting.', action: 'Baca tulisan' },
    wiki: { description: 'Knowledge base pribadi tentang tools, sistem, dan referensi keamanan.', action: 'Segera hadir' },
    tools: { description: 'Kumpulan tools dan security utilities yang saya kembangkan/gunakan.', action: 'Segera hadir' },
  },
  links: { title: 'Selected links', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
} as const;
