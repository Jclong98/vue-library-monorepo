// entrypoint of the library

import type { Plugin } from 'vue'

import * as components from './components'

export * from './components'

export const uiPlugin: Plugin = {
    install: (app) => {
        for (const [name, component] of Object.entries(components)) {
            app.component(name, component)
        }
    }
}