import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' makes assets load relatively, ensuring they work on GitHub Pages
  // regardless of the repository name.
  base: './',
  build: {
    outDir: 'dist',
  }
});