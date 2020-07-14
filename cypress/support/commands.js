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
Cypress.Commands.add('NavigateToMainMenu', () => {
  cy.get('.main-nav')
    .find('.nav-item.ng-scope')
    .each(($e1, index, $list) => {
      const menuitemtext = $e1.find('.nav-item-label.ng-binding').text();
    });
});

Cypress.Commands.add('RenderAutomationPage', () => {
  cy.get('.main-nav')
    .find('.nav-item.ng-scope')
    .each(($e1, index, $list) => {
      const menuitemtext = $e1.find('.nav-item-label.ng-binding').text();
      if (menuitemtext.includes('Automations')) {
        $e1.find('.nav-item-label.ng-binding').click();
      }

      //cy.wait(1000);
    });
});
//below is a command to navigate to signup journey page
Cypress.Commands.add('navigateToSignupJourneyPage', () => {
  cy.visit('https://app.release.qa.pur3.net/');
  cy.login();
  cy.get('.site-header').findByText('Automations').click()
  cy.findByText('New journey').click();
  cy.findByTestId('journey-template-collection_group')
    .findAllByText('Preview and use')
    .first()
    .click();
  cy.findByText('Get started with this journey').click();
  cy.findByTestId('input-field_input-element')
    .type('Reg test Signup Journey ')
    .type(Date.now());
  cy.findByTestId('journeys-save-modal_save-button').click();
});

//---below is a command to navigate to re-engage:not-opened journey page
Cypress.Commands.add('navigateTonotOpenedJourneyPage', () => {
  cy.visit('https://app.release.qa.pur3.net/');
  cy.login();
  cy.get('.site-header').findByText('Automations').click()
  cy.findByText('New journey').click();
  cy.findByTestId('journey-template-collection_group')
    .findAllByText('Preview and use')
    .eq(1)
    .click();
  cy.findByText('Get started with this journey').click();
  cy.findByTestId('input-field_input-element')
    .type('Reg test Re-engage:notopened Journey ')
    .type(Date.now());
  cy.findByTestId('journeys-save-modal_save-button').click();
})

//---below is a command to navigate to re-engage:not-clicked journey page
Cypress.Commands.add('navigateTonotClickedJourneyPage', () => {
  cy.visit('https://app.release.qa.pur3.net/');
  cy.login();
  cy.get('.site-header').findByText('Automations').click()
  cy.findByText('New journey').click();
  cy.findByTestId('journey-template-collection_group')
    .findAllByText('Preview and use')
    .eq(2)
    .click();
  cy.findByText('Get started with this journey').click();
  cy.findByTestId('input-field_input-element')
    .type('Reg test Re-engage:notClicked Journey ')
    .type(Date.now());
  cy.findByTestId('journeys-save-modal_save-button').click();
})
// ---below is a command used to login to V8---
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').type('anuradha');
  cy.get('input[name="password"]').type('puretest123');

  cy.get('.btn.btn-success.btn-block').click();
});

//---below is a command  to finish the list upload process ---
Cypress.Commands.add('finishListUpload', () => {
  cy.get('[type="checkbox"]').click({
    force: true,
  });
  cy.wait(1000);
  cy.contains('Next').click({
    force: true,
  });
  cy.wait(1000);
  cy.get('[id="select-email"]').select(
    'Column A - anuradha.bandarla@pure360.com'
  );
  cy.wait(1000);
  cy.findByText('Next').click();
  //cy.contains('button', 'Next').click({ force: true });
  cy.wait(1000);
  cy.contains('button', 'Finish').click({
    force: true,
  });
});