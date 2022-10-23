import { computed } from 'vue'
import { resolveUnref } from '@vueuse/core'
import type { MaybeComputedRef } from '@vueuse/core'

export function useDouble(value: MaybeComputedRef<number>) {
  return computed(() => resolveUnref(value) * 2)
}
