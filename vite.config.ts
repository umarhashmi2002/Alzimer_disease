import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // You can still keep this external option if needed
      //external: ['@aws-amplify/core/internals/utils'],
    },
  },
});
