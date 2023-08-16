import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: 'https://axent13.github.io/market-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['./public/vite.svg', './src/app/icons/*.png'],
      manifest: {
        name: 'Market App',
        short_name: 'Market App',
        description: 'Market App by Mihail Silaev',
        theme_color: '#ffffff',
        icons: [
          {
            src: './static/img/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './static/img/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  server: {
    open: '/',
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'static/img/[name][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'static/css/[name]-[hash][extname]';
          }

          if (/\.woff2?|ttf|eot$/.test(name ?? '')) {
            return 'static/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
