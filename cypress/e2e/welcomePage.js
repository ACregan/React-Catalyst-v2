/// <reference types="cypress" />

describe('The React-Catalyst welcome page ...', () => {
  it('loads the homepage', () => {
    cy.visit('/').get('header').findByRole('heading').should('contain.text', 'React Catalyst')
  })
})
