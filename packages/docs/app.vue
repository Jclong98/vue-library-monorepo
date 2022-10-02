<script setup lang="ts">
import { useDouble } from "ui"

const count = ref(0)
const double = useDouble(count)
</script>

<template>
  <h1>Nuxt Docs</h1>

  <h2>Primary Button</h2>

  <JBtn @click="count++">Primary Button</JBtn>

  <h2>Secondary Button</h2>

  <JBtn @click="count++" type="secondary">Secondary Button</JBtn>

  <h2>Text Button</h2>

  <JBtn @click="count++" type="text">Text Button</JBtn>

  <pre>{{ { count, double } }}</pre>
</template>
