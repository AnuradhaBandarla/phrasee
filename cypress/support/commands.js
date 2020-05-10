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


// ---below is a command used to login to V8---
Cypress.Commands.add('login', (username, password) => 
{
  cy.get('input[name="username"]').type('anu');
  cy.get('input[name="password"]').type('Puretest123');
  cy.wait(1000)
  cy.get('.btn.btn-success.btn-block.ng-binding').click();

})

//---below is a command  to finish the list upload process ---
Cypress.Commands.add("finish_list_upload", () => { 
  cy.get('[type="checkbox"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Next').click({force:true});
  cy.get('[id="select-email"]').select('Column A - anuradha.bandarla@pure360.com')
  cy.wait(1000);
  cy.contains('Next').click({force:true})
  cy.wait(1000);
  cy.contains('button', 'Finish').click({force:true}) })
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';


  // Thus, cy.login can be used in all other files
  