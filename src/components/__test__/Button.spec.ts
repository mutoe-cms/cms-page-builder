import { render } from '@testing-library/svelte'
import Button from '../Button.svelte'

describe('# Button', () => {
  it('should render correctly', () => {
    const { container } = render(Button, { text: 'Text', link: 'Link' })

    expect(container).toBeInTheDocument()
  })
})
