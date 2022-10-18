<script setup lang="ts"></script>

<template>
  <div class="container">
    <NavMenu />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: grid;

  grid-template-columns: auto 1fr;

  gap: 1rem;
  border-radius: 4px;

  max-width: 800px;
  margin: auto;

  border: 1px solid gray;

}
</style>
