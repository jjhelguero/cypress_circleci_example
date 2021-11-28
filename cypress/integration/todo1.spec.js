/// <reference types="cypress" />

it('displays two todo items by default', () => {
  cy.visit('https://example.cypress.io/todo')
  cy.get('.todo-list li').should('have.length', 2)

  cy.get('.todo-list li').first().should('have.text', 'Pay electric billz')
  cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
})