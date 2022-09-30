import "@vue/runtime-core"

export { default as JBtn } from "./JBtn.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JBtn: typeof import("./components/JBtn.vue")["default"]
  }
}
