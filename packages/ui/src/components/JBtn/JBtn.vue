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
$hue: 152;

$primary-500: hsl($hue, 70%, 37%);
$primary-700: hsl($hue, 70%, 27%);
$primary-shadow: hsl($hue 70% 20% / 0.3);

.j-btn {
  color: white;
  background: $primary-500;
  border: 1px solid $primary-500;
  font-weight: bold;
  border-radius: 0.5em;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 8px $primary-shadow;
  white-space: nowrap;

  transition: all 0.1s ease-in-out;

  &--secondary {
    color: #444;
    background: #f3f3f3;
    border-color: #ccc;
    box-shadow: 0px 4px 8px hsla(152, 70%, 0%, 0.1);
  }

  &--text {
    color: $primary-500;
    background: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover {
      color: $primary-700;
      background-color: rgba($primary-500, 0.1);
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
