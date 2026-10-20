import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://indyadirak.com',
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
