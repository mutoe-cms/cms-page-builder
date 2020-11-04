import { fireEvent, render } from '@testing-library/svelte'
import Modal from './Modal.svelte'

describe('# Modal', () => {
  it('should display correctly', () => {
    const { container } = render(Modal)

    expect(container).toBeInTheDocument()
  })

  it('should emit close event when trigger close method', async () => {
    const { getByRole, component } = render(Modal)
    const onClose = jest.fn()
    component.$on('close', onClose)

    await fireEvent.click(getByRole('button', { name: 'Close modal' }))

    expect(onClose).toBeCalledTimes(1)
  })

  it('should emit close event when press ESC key', async () => {
    const { getByRole, component } = render(Modal)
    const onClose = jest.fn()
    component.$on('close', onClose)

    await fireEvent.keyDown(window, { key: 'Esc', code: 'Esc' })
    await fireEvent.click(getByRole('button', { name: 'Close modal' }))

    expect(onClose).toBeCalledTimes(1)
  })
})
