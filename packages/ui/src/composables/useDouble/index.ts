import type { MaybeRef } from '@vueuse/core'

export function useDouble(value: MaybeRef<number>) {
  return computed(() => unref(value) * 2)
}
