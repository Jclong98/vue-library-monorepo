<script setup lang="ts">
const router = useRouter()

const componentRoutes = computed(() => {
  let routes = router
    .getRoutes()
    .filter((route) => route.path.startsWith("/components/"))

  routes = routes.map((route) => {
    return {
      ...route,
      name: route.path.replace("/components/", ""),
    }
  })

  return routes
})

const composablesRoutes = computed(() => {
  let routes = router
    .getRoutes()
    .filter((route) => route.path.startsWith("/composables/"))

  routes = routes.map((route) => {
    return {
      ...route,
      name: route.path.replace("/composables/", ""),
    }
  })

  return routes
})
</script>

<template>
  <div>
    <p>Documentation for the ui package</p>

    <h2>Components</h2>
    <ul>
      <li v-for="route in componentRoutes" :key="route.name">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </ul>

    <h2>Composables</h2>
    <ul>
      <li v-for="route in composablesRoutes" :key="route.name">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
