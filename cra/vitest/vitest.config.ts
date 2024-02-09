/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      NOM_DOSSIER_SHARED_COMPONENT: resolve(__dirname, '../NOM_DOSSIER_SHARED_COMPONENT/DOSSIER_COMPONENT'),
    },
  },
});
 