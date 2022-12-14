import fs from 'node:fs'
import path from 'node:path'

// get command line arguments to create a new composable
const args = process.argv.slice(2)
let composableName = args[0]

if (!composableName) {
  console.error('Please provide a composable name')
  process.exit(1)
}

// make sure the composable starts with use
if (!composableName.startsWith('use')) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  composableName = `use${capitalizeFirstLetter(composableName)}`
}

// get the current working directory
const cwd = process.cwd()

// get the path to the composables folder
const composablesPath = path.join(cwd, 'packages', 'ui', 'src', 'composables')

// get the path to the new composable folder
const composableFolderPath = path.join(composablesPath, composableName)

// create the new composable folder
fs.mkdirSync(composableFolderPath)

// get the path to the new composable
const composablePath = path.join(composableFolderPath, 'index.ts')
const composableTemplate = `import { computed } from 'vue'
import { resolveUnref } from '@vueuse/core'
import type { MaybeComputedRef } from '@vueuse/core'

export function useDouble(value: MaybeComputedRef<number>) {
  return computed(() => resolveUnref(value) * 2)
}
`

// create the new composable
fs.writeFileSync(composablePath, composableTemplate)

// get the path to the new composable test
const composableTestPath = path.join(composableFolderPath, 'index.spec.ts')
const composableTestTemplate = `import { ref } from 'vue'
import { ${composableName} } from './'

describe('${composableName}', () => {
  it('should work', () => {
    const input = ref(1)
    const result = ${composableName}(input)
    expect(result.value).toBe(2)
  })
})
`

// create the new composable test
fs.writeFileSync(composableTestPath, composableTestTemplate)

// get path to component page in docs
const docsPageDir = path.join(
  cwd,
  'packages',
  'ui',
  'src',
  'pages',
  'composables',
  composableName,
)
fs.mkdirSync(docsPageDir)

const docsIndexPath = path.join(docsPageDir, 'index.vue')
const docsPageTemplate = `<script setup lang="ts">

</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
`

fs.writeFileSync(docsIndexPath, docsPageTemplate)
