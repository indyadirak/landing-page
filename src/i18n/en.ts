import type { Locale } from '../types/site';

export const locale: Locale = 'en';

export const copy = {
  title: 'Indy Adira Khalfani — Security, Infrastructure, and Technical Writing',
  description: "Personal hub for Indy Adira Khalfani's portfolio, technical blog, and cybersecurity wiki.",
  nav: {
    portfolio: 'Portfolio',
    blog: 'Blog',
    wiki: 'Wiki',
    tools: 'Tools',
    soon: 'coming soon',
    switchLanguage: 'ID',
    backToTop: 'Back to top',
  },
  hero: {
    eyebrow: '~/personal-hub · v2026',
    role: 'Security Researcher & IT Systems Enthusiast',
    rotating: ['Security Researcher', 'IT Systems Enthusiast', 'CTF Solver'],
    bio: 'I design security architecture, manage systems infrastructure, and occasionally solve CTFs for fun. This page is the starting point for exploring my projects, writing, and technical documentation.',
    availability: 'Open To Work',
    cta: 'Explore portfolio',
  },
  capabilities: {
    title: 'Capabilities',
    items: [
      { name: 'Security & Infrastructure', context: 'Advanced threat detection & infrastructure segmentation.', tools: 'Wazuh · Cowrie · Docker · Linux' },
      { name: 'Web & Development', context: 'CMS development, custom scripting, and systems automation.', tools: 'PHP · CMS Management · Custom Scripting' },
      { name: 'Networking', context: 'Zero Trust architecture & network perimeter security.', tools: 'Cloudflare Zero Trust · Network Defense' },
    ],
  },
  pillars: {
    title: 'Directory',
    portfolio: { description: 'Case Study: Segmented network architecture & stateful firewall security (MikroTik).', action: 'Explore portfolio' },
    blog: { description: 'Technical writing, CTF write-ups, and troubleshooting notes. (Indonesian only)', action: 'Read the blog' },
    wiki: { description: 'Personal knowledge base on tools, systems, and security references. (Indonesian only)', action: 'Coming soon' },
    tools: { description: 'A collection of tools and security utilities I build and use.', action: 'Coming soon' },
  },
  links: {
    title: 'Selected links',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    githubHandle: 'github.com/indyadirak',
    linkedinHandle: 'linkedin.com/in/indyadirak',
    emailHandle: 'me@indyadirak.my.id',
  },
} as const;
