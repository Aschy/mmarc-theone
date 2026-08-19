import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mmarc-theone.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar', 'es'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://mmarc-theone.com/',
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en', ar: 'ar', es: 'es' },
      },
    }),
  ],
});
