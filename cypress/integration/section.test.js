describe('# Modal', () => {
  before(() => {
    cy.visit('/')
  })

  it('should display new duplicate section when click duplicate button', () => {
    cy.get('.section-container > section:first').trigger('mouseenter')
    cy.findByRole('button', { name: 'Duplicate section' }).click()

    cy.get('.section-container > section').should('have.length', 6)
  })

  it('should remove the section when click the delete button', () => {
    cy.get('.section-container > section:first').trigger('mouseenter')
    cy.findByRole('button', { name: 'Delete section' }).click()

    cy.get('.section-container > section').should('have.length', 5)
  })

  // TODO: Don't know how to test draggable element
  it.skip('should set to last position when drag it to the bottom', () => {
    cy.get('.section-container > section:first').trigger('mouseenter')
    cy.findByRole('button', { name: 'Handle' })
      .trigger('dragstart')
    cy.get('.section-container > section:nth-child(3)')
      .trigger('dragover', 'bottom')
      .trigger('dragend', 'bottom')
  })
})
