// entrypoint of the library

import type { Plugin } from 'vue'

export * from './components'

import { CounterBtn } from './components'

export const uiPlugin: Plugin = {
    install: (app) => {
        app.component('CounterBtn', CounterBtn)
    }
}