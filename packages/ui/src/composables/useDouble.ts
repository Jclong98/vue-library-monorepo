import { computed, unref } from "vue";
import type { Ref } from "vue";

export function useDouble(value: Ref<number> | number) {
    return computed(() => unref(value) * 2);
}