/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    openModal: (nth?: number) => void
  }
}
