<script setup lang="ts">
import { ref } from "vue"
import { useDouble } from "@/composables/useDouble"

const count = ref(0)
const double = useDouble(count)
</script>

<template>
  <h1>Vite Library Mode</h1>

  <p>This can be used as the playground for the component library</p>

  <h2>Primary Button</h2>

  <JBtn @click="count++">Primary Button</JBtn>

  <h2>Secondary Button</h2>

  <JBtn @click="count++" variant="secondary">Secondary Button</JBtn>

  <h2>Text Button</h2>

  <JBtn @click="count++" variant="text">Text Button</JBtn>

  <pre>{{ { count, double } }}</pre>
</template>
