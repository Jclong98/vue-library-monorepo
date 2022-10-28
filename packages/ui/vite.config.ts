/// <reference types="vitest" />

import { defineConfig } from 'vite'
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'

const config: UserConfigExport = {
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,

      // adding ui alias for example usage in pages
      'ui': new URL('./src/index', import.meta.url).pathname,
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
      dts: './src/unplugin-vue-components.d.ts',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // build in library mode if --mode lib is specified
  if (mode === 'lib') {
    config.build = {
      lib: {
        entry: './src/index.ts',
        name: 'ui',
        // the proper extensions will be added
        fileName: 'ui',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
  }

  return config
})
