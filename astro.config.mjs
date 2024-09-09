import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://chelo67.github.io',
  base: '/astro-mui/',
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ['../..']
      }
    },
  },
  integrations: [AstroPWA({
    mode: 'production',
    base: 'https://chelo67.github.io/base_astro_pwa/',
    scope: '/base_astro_pwa/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Astro PWA',
      short_name: 'Astro PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//],
    },
    experimental: {
      directoryAndTrailingSlashHandler: true,
    }
  }), react()],
})