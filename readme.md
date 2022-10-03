# Vue Library Monorepo

This is a monorepo using pnpm workspaces

There is a [**ui**](./packages/ui/) package that is used by the [**docs**](./packages/docs/) package.

## Getting started

| command                                   | description                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| `pnpm dev`                                | Builds the ui package and runs a nuxt dev server using the build library |
| `pnpm ui:dev`                             | Runs a vite playground in the ui package for fast development            |
| `pnpm ui:new-component <ComponentName>`   | Scaffolds a new component                                                |
| `pnpm ui:new-composable <composableName>` | Scaffolds a new composable                                               |
