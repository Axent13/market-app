import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://axent13.github.io/market-app/',
  plugins: [react()],
  server: {
    open: '/',
  },
});
