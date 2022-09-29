# Vue Library Monorepo

This is a monorepo using pnpm workspaces

There is a [**ui**](./packages/ui/) package that is used by the [**docs**](./packages/docs/) package.

## Getting started

`ui:dev` will start a vite server that can be used as a playground for development

The `docs:dev` command will build the ui package and then run a nuxt server with the latest build.
