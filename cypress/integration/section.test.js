describe('# Modal', () => {
  it('should display when callout', () => {
    cy.visit('/')

    cy.get('.section-container > section:first').trigger('mouseenter')

    cy.findByRole('button', { name: 'Duplicate' })
      .click()

    cy.get('.section-container > section')
      .should('have.length', 4)
  })
})
