<script setup lang="ts">
import { ref } from 'vue'
import { useDouble } from 'ui'

const count = ref(0)
const double = useDouble(count)
</script>

<template>
  <div>
    <h1>UI Playground</h1>

    <JBtn @click="count++">
      Increment
    </JBtn>

    <pre>{{ { count, double } }}</pre>
  </div>
</template>
