import { ref } from 'vue'

import { useDouble } from '.'

describe('useDouble', async () => {
  it('should double a number', async () => {
    expect(useDouble(2).value).toBe(4)
  })

  it('should double a ref', async () => {
    const value = ref(2)
    const doubled = useDouble(value)

    expect(doubled.value).toBe(4)

    value.value = 3

    expect(doubled.value).toBe(6)
  })
})
