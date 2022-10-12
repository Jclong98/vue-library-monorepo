import '@vue/runtime-core'

import { JBtn } from './JBtn'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JBtn: typeof JBtn
  }
}

export {
  JBtn,
}
