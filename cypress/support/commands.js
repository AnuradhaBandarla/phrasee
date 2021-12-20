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

Cypress.Commands.add('selectAproject',()=>{
  cy.get('[data-cy="campaign-setup-select-project"]').dblclick()
  cy.contains('External').click()
})

Cypress.Commands.add('enterCampaignName',()=>{
  cy.get('[data-test="campaign_name"]').dblclick().type('test'+Date.now()).focused().click()
})

Cypress.Commands.add('enterYourControl',()=>{
cy.get('[data-test="own_subject_line"]').dblclick().type('humanline'+Date.now()).focused().click()
})

Cypress.Commands.add('expectedAudienceSize',()=>{
  
cy.get('[data-test="list_size"]').dblclick().type(Cypress.config('Audience Size in Number')).focused().click()
})    


Cypress.Commands.add('enterAvgOpenRate',()=>{
  cy.get('[data-test="baseline_open_rate"]').dblclick().type(Cypress.config('Avg Open Rate')).focused().click().wait(500)
  })

  Cypress.Commands.add('clickNext',()=>{
  cy.contains('Next').click().wait(500)
  })