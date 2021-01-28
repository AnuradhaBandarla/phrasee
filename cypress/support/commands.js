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
  cy.login();
  cy.get('.site-header').findByText('Automations').click();
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
  cy.login();
  cy.get('.site-header').findByText('Automations').click();
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
});

//---below is a command to navigate to re-engage:not-clicked journey page
Cypress.Commands.add('navigateTonotClickedJourneyPage', () => {
  cy.login();
  cy.get('.site-header').findByText('Automations').click();
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
});

//---below is a command to navigate to anniversary journey page
Cypress.Commands.add('navigateToanniversaryJourneyPage', () => {
  cy.login();
  cy.get('.site-header').findByText('Automations').click();
  cy.findByText('New journey').click();
  cy.findByTestId('journey-template-collection_group')
    .findAllByText('Preview and use')
    .eq(3)
    .click();
  cy.findByText('Get started with this journey').click();
  cy.findByTestId('input-field_input-element')
    .type('Reg test Anniversary Journey ')
    .type(Date.now());
  cy.findByTestId('journeys-save-modal_save-button').click();
});

//---below is a command to navigate to custom date field journey page
Cypress.Commands.add('navigateTocustomDateFieldJourneyPage', () => {
  cy.login();
  cy.get('.site-header').findByText('Automations').click();
  cy.findByText('New journey').click();
  cy.findByTestId('journey-template-collection_group')
    .findAllByText('Preview and use')
    .eq(4)
    .click();
  cy.findByText('Get started with this journey').click();
  cy.findByTestId('input-field_input-element')
    .type('Reg test Custom Date Journey ')
    .type(Date.now());
  cy.findByTestId('journeys-save-modal_save-button').click();
});
// ---below is a command used to login to V8---
Cypress.Commands.add('login', (username, password) => {
  cy.visit(Cypress.env('url'));
  cy.get('input[name="username"]').type(Cypress.env('username')).debug();
  cy.get('input[name="password"]').type(Cypress.env('password'));
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
  cy.wait(2000);
  cy.findByText('Next').click();
  //cy.contains('button', 'Next').click({ force: true });
  cy.wait(1000);
  cy.contains('button', 'Finish').click({
    force: true,
  });
});
Cypress.Commands.add('scheduleAnEmailCampaign', () => {
  cy.get('[type="text"]').type('Aut-MSG');
  cy.get('[ng-click="search()"]').click();
  //cy.findByText('Search').click().wait(500)
  //cy.get('[type="radio"]').check()
  cy.get('[class="row group"]').eq(1).click();
  cy.findByText('Next').click();
  cy.findByText('Search lists').click();
  cy.get('[type="text"]').first().type('donotdelete');
  cy.get('[type="submit"]').click();
  cy.findByText('donotdelete').click();
  cy.findByText('Next').click();
  cy.findByText('Start Now').click();
  cy.findAllByText('Start Now').first().click();
});
Cypress.Commands.add('ActivateJourney', () => {
  cy.get('[data-test-id="journey-state-panel_button"]').click();
  //  .should('be.enabled')
  //.click({
  //force: true,
  //});
  cy.findByText('Yes, activate').click();
});

Cypress.Commands.add('SelectStartStep', () => {
  cy.findAllByTestId('graph-node').first().click()
  //click({
  //force: true,
  //});
});

Cypress.Commands.add('ChooseListforJourneys', () => {
  cy.get('[data-test-id="chosen-list_choose-list-button"]').click();
  //click({
  //force: true,
  //});
  cy.get('[data-test-id="collection-modal_search-input"]').type('uniqueList');
  cy.findByText('1 result').should('exist').click();
  cy.get('[type="radio"]').check();
  cy.findByText('Use this list').should('exist').click();
  cy.findByText('Save').should('exist').click({
    force: true,
  });
});

Cypress.Commands.add('ChooseListforCustomDateJouney', () => {
  cy.get('[data-test-id="chosen-list_choose-list-button"]').click()
  //click({
  //  force: true
  //});
  cy.get('[data-test-id="collection-modal_search-input"]').type('uniqueList')
  cy.findByText('1 result').should('exist').click()
  cy.get('[type="radio"]').check()
  cy.findByText('Use this list').should('exist').click().wait(2000)
  //cy.findByText('Choose list field').click()
  cy.get('[data-test-id="select-field_select-element"]').first().select('Date of signup')
  cy.get('[data-test-id="select-field_select-element"]').last().select('On date')
  cy.findByText('Save').click()
})







Cypress.Commands.add('ChooseMessage', () => {
  cy.findAllByText('Send message to contact').eq(0).should('exist').click();
  //click({
  //force: true,
  //});
  cy.get('[data-test-id="choose-message_button"]').click();
  //click({
  //force: true,
  //});
  cy.get('[data-test-id="collection-modal_search-input"]').type('Aut-MSG');
  cy.findByText('1 result').should('exist').click();
  cy.get('[type="radio"]').check();
  cy.findByText('Use this message').should('exist').click();
  cy.findByText('Save').should('exist').click();
});

Cypress.Commands.add('removeFirstWaitStep', () => {
  cy.get('[data-test-id="graph-node-remove-button"]').eq(0).click();
});
Cypress.Commands.add('remove2ndSendMsgStep', () => {
  cy.get('[data-test-id="graph-node-remove-button"]').eq(1).click();
});
Cypress.Commands.add('remove2ndWaitStep', () => {
  cy.get('[data-test-id="graph-node-remove-button"]').eq(2).click();
});
Cypress.Commands.add('remove3rdSendMsgStep', () => {
  cy.get('[data-test-id="graph-node-remove-button"]').eq(3).click();
});