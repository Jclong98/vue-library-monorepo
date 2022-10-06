<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)
</script>

<template>
  <div>
    <h1>JBtn</h1>

    <h3>Primary Button</h3>

    <JBtn @click="count++">Primary Button</JBtn>

    <h3>Secondary Button</h3>

    <JBtn @click="count++" variant="secondary">Secondary Button</JBtn>

    <h3>Text Button</h3>

    <JBtn @click="count++" variant="text">Text Button</JBtn>

    <pre>{{ { count } }}</pre>
  </div>
</template>
