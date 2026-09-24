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
    switchLanguage: 'ID',
  },
  hero: {
    eyebrow: 'Personal hub / 2026',
    role: 'Security Researcher & IT Systems Enthusiast',
    bio: 'I design security architecture, manage systems infrastructure, and occasionally solve CTFs for fun. This page is the starting point for exploring my projects, writing, and technical documentation.',
    availability: 'Open To Work',
    cta: 'Explore portfolio',
  },
  capabilities: {
    title: 'Capabilities',
    items: [
      { name: 'Security & Infrastructure', tools: 'Wazuh · Cowrie · Docker · Linux' },
      { name: 'Web & Development', tools: 'PHP · CMS Management · Custom Scripting' },
      { name: 'Networking', tools: 'Cloudflare Zero Trust · Network Defense' },
    ],
  },
  pillars: {
    title: 'Places of work',
    portfolio: { description: 'Documentation of security architecture, projects, and infrastructure work.', action: 'Explore portfolio' },
    blog: { description: 'Technical writing, CTF write-ups, and troubleshooting notes. (Indonesian only)', action: 'Read the blog' },
    wiki: { description: 'Personal knowledge base on tools, systems, and security references. (Indonesian only)', action: 'Coming soon' },
    tools: { description: 'A collection of tools and security utilities I build and use.', action: 'Coming soon' },
  },
  links: { title: 'Selected links', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
} as const;
