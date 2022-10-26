import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: './src/typed-router.d.ts',
    }),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', VueRouterAutoImports],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: './src/components.d.ts',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
  ],
})
