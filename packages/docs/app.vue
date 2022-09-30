<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <h1>Nuxt Docs</h1>

  <h2>Primary Button</h2>

  <JBtn @click="count++">Primary Button</JBtn>

  <h2>Secondary Button</h2>

  <JBtn @click="count++" type="secondary">Secondary Button</JBtn>

  <pre>{{ { count } }}</pre>
</template>
