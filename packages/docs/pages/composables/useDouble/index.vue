<script setup lang="ts">
import { ref } from "vue"
import { useDouble } from "ui"

const count = ref(0)
const doubleCount = useDouble(count)
</script>

<template>
  <div>
    <h1>useDouble</h1>

    <JBtn @click="count--">-</JBtn>
    <JBtn @click="count++">+</JBtn>

    <pre>{{ { count, doubleCount } }}</pre>
  </div>
</template>
