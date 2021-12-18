import {
  configure
} from '@testing-library/cypress';
import '@testing-library/cypress/add-commands';

configure({
  testIdAttribute: 'data-test-id',
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('url'))
  cy.get('input[name="email"]').type(Cypress.env('email'));
  cy.get('input[name="password"]').type(Cypress.env('password'));
  cy.get('[class="submit"]').find('.ant-btn').click()
});
Cypress.Commands.add('clickModule', (name) => {
  cy.get('[id="main-nav"]').wait(100).contains(name).click().wait(1000)
})
Cypress.Commands.add('selectCampaignType', (name) => {
  cy.get('[class="display-flex display-flex--no-wrap"]').wait(100).contains(name).click().wait(1000)
})



