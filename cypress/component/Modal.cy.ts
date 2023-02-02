import Modal from 'src/components/Modal.vue'

describe('<Modal>', () => {
  it('should display correctly', () => {
    cy.mount(Modal)
  })

  it('should emit close event when trigger close method', async () => {
    const onClose = cy.spy()
    cy.mount(Modal, {
      props: { onClose },
    })

    cy.findByRole('button', { name: 'Close modal' }).click()

    cy.wrap(onClose).should('be.calledOnce')
  })

  it('should emit close event when press ESC key', async () => {
    const onClose = cy.spy().as('onClose')
    cy.mount(Modal, {
      props: { onClose },
    })

    cy.type('{esc}')

    cy.get('@onClose').should('be.calledOnce')
  })
})
