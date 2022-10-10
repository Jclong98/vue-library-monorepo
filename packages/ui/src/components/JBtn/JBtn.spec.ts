import { render } from '@testing-library/vue'

import JBtn from './JBtn.vue'

describe('JBtn', async () => {
  it('should render', async () => {
    const { getByText } = render(JBtn, {
      slots: {
        default: 'test',
      },
    })

    expect(getByText('test')).toBeTruthy()
  })
})
