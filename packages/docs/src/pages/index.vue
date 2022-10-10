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
  <div>
    <p>Documentation for the ui package</p>

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
  </div>
</template>
