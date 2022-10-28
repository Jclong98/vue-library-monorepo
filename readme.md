# Vue Library Monorepo

A starter project for building a vue library for components and composables

## Features

- [vue 3](https://vuejs.org)
- [pnpm](https://pnpm.io)
- [vite library mode](https://vitejs.dev/guide/build.html#library-mode)
- [typscript](https://www.typescriptlang.org/)
- [vitest](https://vitest.dev)
- [testing library](https://testing-library.com/docs/vue-testing-library/intro/)

## Getting Started

Installing dependencies
```
pnpm i
```

Running the dev/docs development server
```
pnpm dev
```

## Commands

| command                                   | description                                                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev` <br> `pnpm ui:dev`             | runs a [vite](https://vitejs.dev) dev server in the `ui` package                                                     |
| `pnpm ui:build`                           | builds the documentation for the `ui` package                                                                        |
| `pnpm ui:build:lib`                       | builds a vue component library with [vite library mode](https://vitejs.dev/guide/build.html#library-mode)            |
| `pnpm ui:test`                            | runs tests in the `ui` package                                                                                       |
| `pnpm new-component <ComponentName>`      | Scaffolds a new component                                                                                            |
| `pnpm new-composable <composableName>`    | Scaffolds a new composable                                                                                           |
