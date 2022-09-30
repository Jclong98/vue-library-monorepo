// entrypoint of the library

import type { Plugin } from 'vue'

export * from './components'

import { JBtn } from './components'

export const uiPlugin: Plugin = {
    install: (app) => {
        app.component('JBtn', JBtn)
    }
}