<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'text'>,
    default: 'primary',
  },
})

const classes = computed(() => ['j-btn', `j-btn--${props.variant}`])
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped lang="scss">
$green: hsl(152, 70%, 37%);

.j-btn {
  color: white;
  background: $green;
  border: 1px solid $green;
  font-weight: bold;
  border-radius: 0.5em;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 8px hsla(152, 70%, 20%, 0.3);
  white-space: nowrap;

  transition: all 0.1s ease-in-out;

  &--secondary {
    color: #444;
    background: #f3f3f3;
    border-color: #ccc;
    box-shadow: 0px 4px 8px hsla(152, 70%, 0%, 0.1);
  }

  &--text {
    color: $green;
    background: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover {
      color: hsl(152, 70%, 27%);
      background-color: hsla(152, 70%, 37%, 0.1);
    }
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
