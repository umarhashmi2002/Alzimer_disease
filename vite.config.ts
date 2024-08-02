import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Provide alias for missing modules
      '@aws-amplify/core/internals/utils': '@aws-amplify/core/dist/esm/internals/utils.js',
    },
  },
  build: {
    rollupOptions: {
      external: ['@aws-amplify/core/internals/utils'],
    },
  },
});
