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
$primary: hsl(185, 100%, 37%);

.j-btn {
  color: white;
  background: $primary;
  border: 1px solid hsl(185, 60%, 37%);
  font-weight: bold;
  border-radius: 0.5em;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease-in-out;

  &--secondary {
    color: #444;
    background: #eee;
    border: 1px solid #ccc;
  }

  &:hover,
  &:focus-visible {
    cursor: pointer;
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
  }
}
</style>
