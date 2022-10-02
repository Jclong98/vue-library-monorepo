import fs from "fs"
import path from "path"

// get command line arguments to create a new composable
const args = process.argv.slice(2)
let composableName = args[0]

if (!composableName) {
  console.error("Please provide a composable name")
  process.exit(1)
}

// make sure the composable starts with use
if (!composableName.startsWith("use")) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  composableName = "use" + capitalizeFirstLetter(composableName)
}

// get the current working directory
const cwd = process.cwd()

// get the path to the composables folder
const composablesPath = path.join(cwd, "src", "composables")

// get the path to the new composable folder
const composableFolderPath = path.join(composablesPath, composableName)

// create the new composable folder
fs.mkdirSync(composableFolderPath)

// get the path to the new composable
const composablePath = path.join(composableFolderPath, `index.ts`)
const composableTemplate = `import { computed, unref } from "vue"
import type { Ref } from "vue"

export function ${composableName}(value: Ref<number> | number) {
  return computed(() => unref(value) * 2)
}
`

// create the new composable
fs.writeFileSync(composablePath, composableTemplate)

// get the path to the new composable test
const composableTestPath = path.join(composableFolderPath, `index.spec.ts`)
const composableTestTemplate = `import { ref } from "vue"
import { ${composableName} } from "./"

describe("${composableName}", () => {
  it("should work", () => {
    const input = ref(1)
    const result = ${composableName}(input)
    expect(result.value).toBe(2)
  })
})
`

// create the new composable test
fs.writeFileSync(composableTestPath, composableTestTemplate)
