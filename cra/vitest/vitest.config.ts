/// <reference types="vitest" />
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [__dirname + '/vitest-setup.js'],
  },
  resolve: {
    alias: {
      remote: resolve(__dirname, '../remote/src'),
      host: resolve(__dirname, '../host/src'),
    },
  },
});