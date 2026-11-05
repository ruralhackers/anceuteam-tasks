import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://anceuteam-tasks.netlify.app', // update with real URL when known
  // Petra and Karen were merged into a single «Futura persona voluntaria» page.
  // Keep the old URLs working so bookmarks and shared links don't 404.
  redirects: {
    '/petra': '/voluntaria',
    '/karen': '/voluntaria',
    '/en/petra': '/en/voluntaria',
    '/en/karen': '/en/voluntaria',
    '/gl/petra': '/gl/voluntaria',
    '/gl/karen': '/gl/voluntaria',
  },
});
