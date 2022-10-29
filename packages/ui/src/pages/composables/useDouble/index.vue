<script setup lang="ts">
import { useDouble } from '@/composables'

const count = ref(0)
const doubleCount = useDouble(count)
</script>

<template>
  <div>
    <h1>useDouble</h1>

    <label>
      Number: <input v-model="count" type="number">
    </label>

    <pre>{{ { count, doubleCount } }}</pre>
  </div>
</template>
