<script setup lang="ts">
import { ref } from 'vue'

const number = ref(0)
</script>

<template>
  <div>
    <h1>UI Library</h1>

    <JBtn @click="number++">
      You've clicked me {{ number }} times
    </JBtn>
  </div>
</template>
