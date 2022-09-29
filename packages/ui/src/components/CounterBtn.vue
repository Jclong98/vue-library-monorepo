<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button class="j-btn" @click="count++">
    You've clicked me {{ count }} times
  </button>
</template>

<style scoped>
.j-btn {
  background: limegreen;
  color: black;
  border: none;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px 20px;
}
</style>
