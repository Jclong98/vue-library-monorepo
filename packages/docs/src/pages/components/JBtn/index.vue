<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    <h1>JBtn</h1>

    <h3>Primary Button</h3>

    <JBtn @click="count++">
      Primary Button
    </JBtn>

    <h3>Secondary Button</h3>

    <JBtn variant="secondary" @click="count++">
      Secondary Button
    </JBtn>

    <h3>Text Button</h3>

    <JBtn variant="text" @click="count++">
      Text Button
    </JBtn>

    <pre>{{ { count } }}</pre>
  </div>
</template>
