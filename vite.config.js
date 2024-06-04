import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue-easy-lightbox$': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
    },
  }
})
