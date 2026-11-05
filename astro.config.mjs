import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://indyadirak.com';
const defaultLocaleUrl = new URL('/id/', site).href;
const buildDate = new Date().toISOString();

export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // Only the two localized homepages belong in the sitemap. `/` renders the
      // Indonesian content with a canonical to `/id/`, and `/404` is a status page.
      filter: (page) => page === new URL('/id/', site).href || page === new URL('/en/', site).href,
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id', en: 'en' },
      },
      serialize: (item) => ({
        ...item,
        // @astrojs/sitemap emits id/en alternates but not x-default, so add it
        // while keeping the build timestamp as lastmod (not emitted by default).
        links: [
          ...(item.links ?? []).filter((link) => link.lang !== 'x-default'),
          { lang: 'x-default', url: defaultLocaleUrl },
        ],
        lastmod: buildDate,
      }),
    }),
  ],
});
