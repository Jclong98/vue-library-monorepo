import fs from 'fs'
import path from 'path'

// get command line arguments to create a new component
const args = process.argv.slice(2)
let componentName = args[0]

if (!componentName) {
  console.error('Please provide a component name')
  process.exit(1)
}

// capitalize the first letter of the component
// name just in case it's not capitalized already
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
componentName = capitalizeFirstLetter(componentName)

// get the current working directory
const cwd = process.cwd()

// get the path to the components folder
const componentsPath = path.join(cwd, 'packages', 'ui', 'src', 'components')

// get the path to the new component folder
const componentFolderPath = path.join(componentsPath, componentName)

// create the new component folder
fs.mkdirSync(componentFolderPath)

// get the path to the new component
const componentPath = path.join(componentFolderPath, `${componentName}.vue`)

// get the path to the new component's test
const testPath = path.join(componentFolderPath, `${componentName}.spec.ts`)

const indexPath = path.join(componentFolderPath, 'index.ts')

// get path to component page in docs
const docsPath = path.join(
  cwd,
  'packages',
  'docs',
  'src',
  'pages',
  'components',
  componentName,
)
fs.mkdirSync(docsPath)

const docsIndexPath = path.join(docsPath, 'index.vue')

console.log({
  cwd,
  componentFolderPath,
  componentPath,
  testPath,
})

// create the component
const componentTemplate = `<script setup lang="ts">

</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
`

// create the component's test
const testTemplate = `import { render } from '@testing-library/vue'

import { ${componentName} } from './'

describe('${componentName}.vue', () => {
  it('renders component', () => { 
    const { container } = render(${componentName})
g
    expect(container).toMatchSnapshot()
  })
})
`

// create the component's index file
const indexContent = `export { default as ${componentName} } from './${componentName}.vue'`

const files = [
  {
    path: componentPath,
    content: componentTemplate,
  },
  {
    path: testPath,
    content: testTemplate,
  },
  {
    path: indexPath,
    content: indexContent,
  },
  {
    path: docsIndexPath,
    content: componentTemplate,
  },
]

for (const file of files) {
  fs.writeFile(file.path, file.content, (err) => {
    if (err)
      throw err
  })
}

console.log('Component created successfully')
