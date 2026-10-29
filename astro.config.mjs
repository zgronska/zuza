// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage-grotesque',
      provider: fontProviders.fontsource(),
      weights: [700, 800],
      styles: ['normal'],
      fallbacks: ['Arial Black', 'sans-serif'],
    },
    {
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      name: 'Space Mono',
      cssVariable: '--font-space-mono',
      provider: fontProviders.fontsource(),
      weights: [700],
      styles: ['normal'],
      fallbacks: ['Courier New', 'monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
