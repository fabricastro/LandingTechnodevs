import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from "@astrojs/tailwind"
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

const env = loadEnv("", process.cwd(), 'STORYBLOK')

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        projects: 'storyblok/Projects',
      },
      apiOptions: {
        region: "us",
      },
    }),
    tailwind(),
    react(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: false,
    },
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    }
  },
  adapter: vercel(),
  devToolbar: {
    enabled: true
  }
})
