export type Locale = 'id' | 'en';

export type PropertyStatus = 'live' | 'coming-soon';

export type Property = {
  key: 'portfolio' | 'blog' | 'wiki' | 'tools';
  href: string;
  language: 'ID' | 'EN';
  status: PropertyStatus;
};

export const site = {
  name: 'Indy Adira Khalfani',
  role: 'Security Researcher & IT Systems Enthusiast',
  github: 'https://github.com/indyadirak',
  linkedin: 'https://www.linkedin.com/in/indyadirak',
  email: 'me@indyadirak.my.id',
  availability: 'Open To Work',
} as const;

export const properties: Property[] = [
  {
    key: 'portfolio',
    href: 'https://portofolio.indyadirak.my.id',
    language: 'ID',
    status: 'live',
  },
  {
    key: 'blog',
    href: 'https://blog.indyadirak.my.id',
    language: 'ID',
    status: 'live',
  },
  {
    key: 'wiki',
    href: 'https://wiki.indyadirak.my.id',
    language: 'ID',
    status: 'coming-soon',
  },
  {
    key: 'tools',
    href: 'https://tools.indyadirak.my.id',
    language: 'EN',
    status: 'coming-soon',
  },
];
