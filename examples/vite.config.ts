import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      'dlabs-ui': '../packages/index.ts',
    },
  },
  plugins: [vue()],
})
