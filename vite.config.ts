import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://axent13.github.io/market-app/',
  plugins: [react()],
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
            return 'static/img/[name]-[hash][extname]';
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
