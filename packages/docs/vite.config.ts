import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'ui': resolve(__dirname, '../ui/src'),
    },
  },
  plugins: [
    VueRouter({
      dts: './src/typed-router.d.ts',
    }),
    vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', VueRouterAutoImports],
    }),
  ],
})
