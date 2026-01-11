import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures assets are loaded correctly from https://sachindb7.github.io/Sachin-Bhanushali/
  base: '/Sachin-Bhanushali/',
  server: {
    port: 3000,
  },
});
