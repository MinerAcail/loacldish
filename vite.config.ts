import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Allows external access (useful for EC2)
    port: 4000, // Custom port for dev
  },
  build: {
    outDir: 'dist', // Ensure correct output directory for PM2
  },
  base: '/', // Set correct base path (important if using Caddy reverse proxy)
});
