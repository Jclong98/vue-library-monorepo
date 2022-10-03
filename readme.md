# Vue Library Monorepo

A starter project for building a vue library for components and composables

## Features

- [vue 3](https://vuejs.org)
- [pnpm](https://pnpm.io)
- [vite library mode](https://vitejs.dev/guide/build.html#library-mode)
- [nuxt 3](https://v3.nuxtjs.org)
- [typscript](https://www.typescriptlang.org/)

## Commands

| command                                   | description                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`                                | alias for `pnpm docs:dev`                                                                                                  |
| `pnpm docs:dev`                           | Builds the `ui` package and runs a [nuxt](https://v3.nuxtjs.org/) dev server in the `docs` package using the build library |
| `pnpm ui:dev`                             | Runs a [vite](https://vitejs.dev) playground in the `ui` package for fast development                                      |
| `pnpm ui:build`                           | builds a vue component library with [vite library mode](https://vitejs.dev/guide/build.html#library-mode)                  |
| `pnpm ui:new-component <ComponentName>`   | Scaffolds a new component                                                                                                  |
| `pnpm ui:new-composable <composableName>` | Scaffolds a new composable                                                                                                 |
