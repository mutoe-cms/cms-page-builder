describe('# Modal', () => {
  it('should display modal in screen center by default', () => {
    cy.visit('/')
    cy.openModal()

    cy.get('.modal')
      .should('be.visible')
      .should(([el]) => {
        const style = getComputedStyle(el)
        const deltaY = Math.abs(parseInt(style.top) - parseInt(style.bottom))
        expect(deltaY).to.be.at.most(1)
        const deltaX = Math.abs(parseInt(style.left) - parseInt(style.right))
        expect(deltaX).to.be.at.most(1)
      })
  })

  it('should display the second panel when click the second tab', () => {
    cy.contains('Design').click()
    cy.get('#panel-1')
      .should('not.have.attr', 'hidden')
  })

  it('should can be movable', () => {
    cy.get('.modal header')
      .trigger('mousedown')
      .trigger('mousemove', { movementX: 100, movementY: 100 })
      .trigger('mouseup', { eventConstructor: 'MouseEvent' })

    cy.get('.modal').should(([el]) => {
      const style = getComputedStyle(el)
      expect(parseInt(style.bottom)).to.equal(0)
    })
  })

  it('should can be resizable', () => {
    cy.get('.modal .resize-handle')
      .trigger('mousedown', { force: true })
      .trigger('mousemove', { movementX: 300, movementY: -300, force: true })
      .trigger('mouseup', { eventConstructor: 'MouseEvent', force: true })

    cy.get('.modal').should(([el]) => {
      const style = getComputedStyle(el)

      expect(parseInt(style.right)).to.lte(0)
      expect(parseInt(style.bottom)).to.equal(200)
    })
  })

  it('should can be closed', () => {
    cy.findByRole('button', { name: 'Close modal' }).click()
    cy.get('.modal').should('not.be.visible')
  })

  it('should remember last position', () => {
    cy.openModal(2)

    cy.get('.modal').should(([el]) => {
      const style = getComputedStyle(el)

      expect(parseInt(style.right)).to.equal(0)
      expect(parseInt(style.bottom)).to.equal(200)
    })
  })

  it('should can be closed by ESC keydown', () => {
    cy.get('body').trigger('keydown', { key: 'Escape', force: true })
    cy.get('.modal').should('not.be.visible')
  })
})
