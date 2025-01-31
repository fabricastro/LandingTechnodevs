import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    }
  },
  adapter: node({
    mode: 'standalone'
  }),
  devToolbar: {
    enabled: true
  }
});
