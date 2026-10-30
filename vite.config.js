import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        cashForGold: resolve(__dirname, 'cash-for-gold.html'),
        branches: resolve(__dirname, 'branches.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});

