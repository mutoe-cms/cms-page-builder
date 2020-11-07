describe('# Modal', () => {
  before(() => {
    cy.visit('/')
  })

  it('should display new duplicate section when click duplicate button', () => {
    cy.get('.section-container > section:first').trigger('mouseenter')
    cy.findByRole('button', { name: 'Duplicate section' }).click()

    cy.get('.section-container > section').should('have.length', 4)
  })

  it('should remove the section when click the delete button', () => {
    cy.contains('标题').should('exist')
    cy.get('.section-container > section:nth-child(3)').trigger('mouseenter')
    cy.findByRole('button', { name: 'Delete section' }).click()
    cy.contains('标题').should('not.exist')
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
