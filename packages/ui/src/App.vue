<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1>Vite Library Mode</h1>

  <p>This can be used as the playground for the component library</p>

  <h2>Primary Button</h2>

  <JBtn @click="count++">Primary Button</JBtn>

  <h2>Secondary Button</h2>

  <JBtn @click="count++" type="secondary">Secondary Button</JBtn>

  <pre>{{ { count } }}</pre>
</template>
