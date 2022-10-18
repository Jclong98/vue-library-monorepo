<script setup lang="ts">
const router = useRouter()

function getRootRoutes(base: string) {
  const routes = router
    .getRoutes()
    .filter(route => route.path.startsWith(`/${base}/`) && route.name)

  const newRoutes = routes.map((route) => {
    return {
      path: route.path,
      label: route.path.replace(`/${base}/`, ''),
    }
  })

  return newRoutes
}

const componentRoutes = computed(() => getRootRoutes('components'))

const composablesRoutes = computed(() => getRootRoutes('composables'))
</script>

<template>
  <nav>
    <router-link to="/">
      Docs
    </router-link>

    <h2>Components</h2>
    <ul>
      <li v-for="route in componentRoutes" :key="route.label">
        <router-link :to="route.path">
          {{ route.label }}
        </router-link>
      </li>
    </ul>

    <h2>Composables</h2>
    <ul>
      <li v-for="route in composablesRoutes" :key="route.label">
        <router-link :to="route.path">
          {{ route.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-right: 1px solid gray;
  padding: 1rem;
}
</style>

