<script setup lang="ts">
import { computed } from "vue"
import type { PropType } from "vue"

const props = defineProps({
  type: {
    type: String as PropType<"primary" | "secondary">,
    default: "primary",
  },
})

const classes = computed(() => ["j-btn", `j-btn--${props.type}`])
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
$primary: #00aabb;

.j-btn {
  color: white;
  background: $primary;
  border: 2px solid $primary;
  font-weight: bold;
  border-radius: 0.5em;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  transition: all 0.2s ease-in-out;

  &--secondary {
    color: #444;
    background: #eee;
    border: 2px solid #666;
  }

  &:hover,
  &:focus-visible {
    cursor: pointer;
    filter: brightness(1.1);
    border-radius: 0.75em;
  }

  &:active {
    filter: brightness(0.9);
  }
}
</style>
