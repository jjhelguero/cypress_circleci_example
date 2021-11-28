/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
})

it('can add new todo items', () => {
    const newItem = 'Feed the cat'

    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    cy.get('.todo-list li')
        .should('have.length', 3)
        .last()
        .should('have.text', newItem)
})

it('can check off an item as completed', () => {
    cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()

    cy.contains('Pay electric bill')
        .parents('li')
        .should('have.class', 'completed')
})