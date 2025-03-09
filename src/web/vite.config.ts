import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: path.join(__dirname, '../../dist/web'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
