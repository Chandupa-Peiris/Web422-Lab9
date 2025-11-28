// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

describe('Calculator Tests', () => {

  it('Addition: 5 + 3 = 8', () => {
    cy.visit('http://localhost:3000')

    cy.get('#btn-5').click()
    cy.get('#btn-plus').click()
    cy.get('#btn-3').click()
    cy.get('#btn-equals').click()

    cy.get('#display').should('have.value', '8')
  })

  it('Subtraction: 10 - 4 = 6', () => {
    cy.visit('http://localhost:3000')

    cy.get('#btn-1').click()
    cy.get('#btn-0').click()
    cy.get('#btn-minus').click()
    cy.get('#btn-4').click()
    cy.get('#btn-equals').click()

    cy.get('#display').should('have.value', '6')
  })

  it('Multiplication: 6 * 7 = 42', () => {
    cy.visit('http://localhost:3000')

    cy.get('#btn-6').click()
    cy.get('#btn-multiply').click()
    cy.get('#btn-7').click()
    cy.get('#btn-equals').click()

    cy.get('#display').should('have.value', '42')
  })

  it('Division: 15 / 3 = 5', () => {
    cy.visit('http://localhost:3000')

    cy.get('#btn-1').click()
    cy.get('#btn-5').click()
    cy.get('#btn-divide').click()
    cy.get('#btn-3').click()
    cy.get('#btn-equals').click()

    cy.get('#display').should('have.value', '5')
  })
})
