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
Cypress.Commands.add('NavigateToSignupJourneyPage', () => {
  cy.visit('https://app.release.qa.pur3.net/');
  cy.login();
  cy.get('.main-nav').findByText('Automations').click();
  cy.findByText('New journey').should('exist').click();
  cy.get('[data-test-id="panel_body"]')
    .first()
    .findByText('Preview and use')
    .click();
  cy.findByText('Get started with this journey').should('exist').click();
  cy.get('[data-test-id="input-field_input-element"]')
    .type('HP-Signup Journey ')
    .type(Date.now());
  cy.get('[data-test-id="journeys-save-modal_save-button"]').click();
});
// ---below is a command used to login to V8---
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').type('anuradha');
  cy.get('input[name="password"]').type('puretest123');

  cy.get('.btn.btn-success.btn-block').click();
});

//---below is a command  to finish the list upload process ---
Cypress.Commands.add('finish_list_upload', () => {
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

/*import 'cypress-file-upload';


  // Thus, cy.login can be used in all other files
  import {
    byClass,
    byName,
    byId,
    byStyle
  } from '../../helpers/selectors'

  // for login purposes
  Cypress.Commands.add('loginPure', (email, password) => {
    window.localStorage.setItem('pure360.access_token', '');
    cy.visit('/login')
    cy.get(byName('username'))
      .type(email)
    cy.get(byName('password'))
      .type(password)
    cy.get('button')
      .click()
  });

  /************* MESSAGES *************/
// messages buttons
Cypress.Commands.add('selectMessagesAction', (buttonName) => {
  switch (buttonName) {
    case 'New message':
      cy.get(byClass('btn btn-success dropdown-toggle new-message ng-binding'))
        .contains('New message')
        .click();
      break;
    case 'New sms message':
      cy.get('button').contains('New sms message').click();
      break;
    case 'Start from scratch':
      cy.get('button').contains('Start from scratch').click();
      break;
    case 'Delete this message':
      cy.get('button').contains('Delete this message').click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

// messages dropdown on messages index page
Cypress.Commands.add('selectMessageDropdownOption', (option, message) => {
  if (option == 'Edit') {
    cy.contains(message)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children('div')
      .children(byClass('slat-action ng-scope'))
      .children(byClass('btn-group dropdown'))
      .children('button')
      .contains('Edit')
      .click();
  } else {
    cy.contains(message)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children('div')
      .children(byClass('slat-action ng-scope'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle'))
      .click();

    cy.get(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right'))
      .children('li')
      .children('a')
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectJourneyAction', (buttonName) => {
  switch (buttonName) {
    case 'New journey':
      cy.get(byId('new-journey-button')).click();
      break;
    case 'Get started with this journey':
      cy.get(byId('journey-template-preview_button-get-started')).click();
      break;
    case 'Choose list':
      cy.get(byId('chosen-list_choose-list-button')).click();
      break;
    case 'Use this message':
      cy.get(byId('collection-modal_save-button')).click();
      break;
    case 'Use this list':
      cy.get(byId('collection-modal_save-button')).click();
      break;
    case 'Choose message':
      cy.get(byId('choose-message_button')).click();
      break;
    case 'Deactivate journey':
    case 'Activate journey':
      cy.get(byId('journey-state-panel_button')).click();
      break;
    case 'Yes, activate':
      cy.get('button').contains('Yes, activate').click();
      break;
    case 'Pencil':
      cy.get(byId('journey-editor_edit-icon-button')).click();
      break;
    case 'List this journey applies to':
      cy.get(byId('choose-list_chosen-title')).click();
      break;
    case 'Yes, deactivate now':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Yes, reactivate':
      cy.get('button').contains(buttonName).click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectJourney', (journeyName) => {
  switch (journeyName) {
    case 'Anniversary':
      cy.contains(
          'Message contacts an the anniversary of a date, e.g. birthday'
        )
        .parent(byClass('panel-body journey-template-information'))
        .children(byClass('btn-success btn-block journey-template-button btn'))
        .click();
      break;
    case 'Not opened':
      cy.contains('Target contacts that haven’t opened for a number of days')
        .parent(byClass('panel-body journey-template-information'))
        .children(byClass('btn-success btn-block journey-template-button btn'))
        .click();
      break;
    case 'Not clicked':
      cy.contains('Target contacts that haven’t clicked for a number of days')
        .parent(byClass('panel-body journey-template-information'))
        .children(byClass('btn-success btn-block journey-template-button btn'))
        .click();
      break;
    case 'Welcome':
      cy.contains(
          'Nurture, onboard or educate new contacts with a series of messages'
        )
        .parent(byClass('panel-body journey-template-information'))
        .children(byClass('btn-success btn-block journey-template-button btn'))
        .click();
      break;
    case 'Custom date field':
      cy.contains('Use a custom field from your list to base a Journey on')
        .parent(byClass('panel-body journey-template-information'))
        .children(byClass('btn-success btn-block journey-template-button btn'))
        .click();
    default:
      cy.log('WARNING: Journey template ' + journeyName + ' does not exist');
  }
});

Cypress.Commands.add('selectJourneyNode', (journeyNode) => {
  switch (journeyNode) {
    case 'Start':
      cy.contains(journeyNode).click();
      break;
    case 'Wait':
      cy.contains(journeyNode).click();
      break;
    case 'Send':
      journeyNode = 'Choose message';
      //cy.log(cy.get(byId('graph-node-title')).find(journeyNode).should('have.length', 3))
      cy.get(byId('graph-node-label'))
        .contains(journeyNode)
        //.each('div', index)
        .click();
      break;
    case 'Send_2':
      cy.get(
        byStyle(
          'left: 0px; width: 300px; height: 89px; top: 461px; opacity: 1;'
        )
      ).click();
      break;
    case 'Send_3':
      cy.get(
        byStyle(
          'left: 0px; width: 300px; height: 89px; top: 772px; opacity: 1;'
        )
      ).click();
      break;
    default:
      cy.log('WARNING: Journey node ' + journeyNode + ' does NOT exist');
  }
});

Cypress.Commands.add('removeJourneyNode', (journeyNode) => {
  switch (journeyNode) {
    case 'Send_3':
      cy.get(
          byStyle(
            'left: 0px; width: 300px; height: 89px; top: 777px; opacity: 1;'
          )
        )
        .children(byClass('journey-node journey-node-type-sendToGroup'))
        .children(byClass('btn-default close btn'))
        .click();
      break;
    case 'Wait_2':
      cy.get(
          byStyle(
            'left: 0px; width: 300px; height: 72px; top: 629px; opacity: 1;'
          )
        )
        .children(byClass('journey-node journey-node-type-timer'))
        .children(byClass('btn-default close btn'))
        .click();
      break;
    default:
      cy.log('WARNING: Journey node ' + journeyNode + ' does NOT exist');
  }
});

Cypress.Commands.add('addJourneyNode', (journeyNode) => {
  switch (journeyNode) {
    case 'Wait':
      cy.get(
        byStyle(
          'left: 136px; width: 28px; height: 16px; top: 270px; opacity: 1;'
        )
      ).click();
      cy.get(byId('add-step_wait')).click();
      break;
    case 'Send_2':
      cy.get(
        byStyle(
          'left: 136px; width: 28px; height: 16px; top: 418px; opacity: 1;'
        )
      ).click();
      cy.get(byId('add-step_send')).click();
      break;
    default:
      cy.log('WARNING: Journey node ' + journeyNode + ' does NOT exist');
  }
});

Cypress.Commands.add('selectJourneyDropdownOption', (option, journey) => {
  if (option == 'View') {
    cy.get('div')
      .contains(journey)
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byId('button-with-dropdown_button-group'))
      .children(byId('view-journey-button'))
      .click();
  } else {
    cy.get('div')
      .contains(journey)
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byId('button-with-dropdown_button-group'))
      .children(byId('button-with-dropdown_toggle-button'))
      .click();

    cy.get('div')
      .contains(journey)
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byId('button-with-dropdown_button-group'))
      .children(byId('button-with-dropdown_menu-items'))
      .children('li')
      .children('button')
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectListAction', (buttonName) => {
  switch (buttonName) {
    case 'Import contacts':
      cy.get(byClass('btn btn-success list-import ng-binding ng-scope'))
        .contains('Import contacts')
        .click();
      break;
    case 'Upload':
      cy.get('button').contains('Upload').click();
      break;
    case 'Delete this list':
      cy.get('button').contains('Delete this list').click();
      break;
    case 'Delete this segment':
      cy.get('button').contains('Delete this segment').click();
      break;
    case 'Create segment':
      cy.get('button').contains('Create segment').click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectCampaignAction', (buttonName) => {
  switch (buttonName) {
    case 'New email campaign':
      cy.get(byClass('btn btn-success ng-binding'))
        .contains('New email campaign')
        .click();
      break;
    case 'New SMS campaign':
      cy.get('new-sms-campaign-btn').click();
      break;
    case 'Start Now':
      cy.get('button').contains(buttonName).click();
      //wait used to able the automatic opening of campaign index page (10 sec)
      cy.wait(11000);
      break;
    case 'Start Campaign':
      cy.get(byClass('btn btn-success flow-action-btn flow-finish')).click({
        force: true,
      });
      break;
    case 'Delete this campaign':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Schedule Campaign':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Date picker':
      cy.get('label')
        .contains('Date')
        .parent('div')
        .children(byClass('input-group ng-scope'))
        .children(byClass('input-group-btn'))
        .click();
      break;
    case 'Today':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Go to campaigns':
      cy.get(byClass('modal-footer modal-footer-confirm'))
        .children('button')
        .contains(buttonName)
        .click();
      break;
    case 'Search lists':
      cy.get(byClass('btn btn-default list-search ng-binding'))
        .contains(buttonName)
        .click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectAutomationAction', (buttonName) => {
  switch (buttonName) {
    case 'New automation':
      cy.get(
          byClass(
            'heading-row-form heading-row-form-right form-inline text-right ng-pristine ng-valid'
          )
        )
        .children('a')
        .contains(buttonName)
        .click();
      break;
    case 'Create new rule':
      cy.get(byClass('btn btn-success create-rule ng-binding'))
        .contains(buttonName)
        .click();
      break;
    case 'Delete this automation':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Search lists':
      cy.get('button').contains(buttonName).click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectRssAction', (buttonName) => {
  switch (buttonName) {
    case 'New RSS Feed':
      cy.get('button').contains('New RSS Feed').click();
      break;
    case 'Delete this RSS Feed':
      cy.get('button').contains('Delete this RSS Feed').click();
      break;
    case 'New RSS Region':
      cy.get(
        byClass('btn btn-success new-rss-region ng-binding ng-scope')
      ).click();
      break;
    case 'Choose RSS Feed':
      cy.get('button').contains('Choose RSS Feed').click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectDynamicContentAction', (buttonName) => {
  switch (buttonName) {
    case 'New Dynamic Content Block':
      cy.get('button').contains('New Dynamic Content Block').click();
      break;
    case 'Delete this Dynamic Content Block':
      cy.get('button').contains('Delete this Dynamic Content Block').click();
      break;
    case 'New Dynamic Content Region':
      cy.get(
        byClass(
          'btn btn-success new-dynamic-content-region ng-binding ng-scope'
        )
      ).click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('selectReportAction', (buttonName) => {
  switch (buttonName) {
    case 'Filter':
      cy.get(byClass('btn btn-default filter-button ng-binding'))
        .contains('Filter')
        .click();
    case 'Add another condition':
      cy.get(byClass('btn btn-default ng-binding'))
        .contains('Add another condition')
        .click();
      break;
    case 'Apply filter':
      cy.get(byClass('btn btn-success apply-filter ng-binding ng-scope'))
        .contains('Apply filter')
        .click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

// command for generic buttons
Cypress.Commands.add('selectCommonAction', (buttonName) => {
  switch (buttonName) {
    case 'Search':
    case 'Upload a file':
    case 'Delete':
    case 'Export':
    case 'Save and finish':
    case 'Save':
    case 'Continue':
    case 'Close':
    case 'Select':
    case 'Download':
    case 'Ok':
    case 'OK':
      cy.get('button').contains(buttonName).click();
      break;
    case 'Emails':
      cy.get(
          byClass(
            'btn btn-blank btn-md btn-text-lg btn-plain dropdown-toggle opaque ng-binding'
          )
        )
        .contains('Emails')
        .click();
      break;
    case 'Next Step':
      // workaround for visibility issues on cypress (https://github.com/cypress-io/cypress/issues/695)
      cy.get('button').contains('Next').should('be.visible').click({
        force: true,
      });
      cy.get('button').contains('Next').click({
        force: true,
      });
      break;
    case 'Next':
      cy.wait(1000);
      cy.get('button').contains('Next').click({
        force: true,
      });
      break;
    case 'Finish':
      cy.wait(1000);
      cy.get('button').contains('Finish').click({
        force: true,
      });
      break;
    case 'Finish automation':
      cy.get(byClass('btn btn-success flow-action-btn flow-finish')).click();
      break;
    case 'Finish RSS Region':
      cy.get(
        byClass('btn btn-success pull-right finish-rss-region ng-binding')
      ).click();
      break;
    case 'Start Now':
      cy.get(byClass('btn btn-success flow-action-btn flow-finish')).click();
      break;
    case 'Launch your campaign':
      cy.get(byClass('btn btn-success modal-action')).click();
      break;
    case 'Go to campaigns':
      cy.get(byClass('btn btn-success modal-confirm ng-binding')).click();
      break;
    case 'Add another subject line':
      cy.get(
        byClass('btn btn-default subject-line-adder ng-binding ng-scope')
      ).click();
      break;
    default:
      cy.log('WARNING: Button ' + buttonName + ' does not exist');
  }
});

Cypress.Commands.add('openPage', (pageName) => {
  switch (pageName) {
    case 'Lists':
      cy.get(byClass('nav-item list')).click();
      break;
    case 'Messages':
      cy.get(byClass('nav-item messages')).click();
      break;
    case 'Campaigns':
      cy.get(byClass('nav-item campaigns')).click();
      break;
    case 'Journeys':
      cy.get(byClass('nav-item automations')).click();
      cy.contains('Rule automations').click();
      cy.get(byClass('ng-binding ng-scope')).contains('Journeys').click();
      break;
    case 'Automations':
      cy.get(byClass('nav-item automations')).click();
      break;
    case 'Reports':
      cy.get(byClass('nav-item reports')).click();
      break;
    case 'Dashboard':
      cy.get(byTitle('Pure360')).click();
      break;
    default:
      cy.log('WARNING: Page ' + page + ' does not exist');
  }
});

Cypress.Commands.add('selectRssDropdownOption', (option, rssFeed) => {
  if (option == 'Edit') {
    cy.contains(rssFeed)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default rss-feed-edit ng-binding'))
      .click();
  } else {
    cy.contains(rssFeed)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle'))
      .click();

    cy.get(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right'))
      .children('li')
      .children('a')
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectDynamicDropdownOption', (option, dynamicBlock) => {
  if (option == 'Edit') {
    cy.contains(dynamicBlock)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default content-item-edit ng-binding'))
      .click();
  } else {
    cy.contains(dynamicBlock)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle'))
      .click();

    cy.get(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right'))
      .children('li')
      .children('a')
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectAutomationDropdownOption', (option, automation) => {
  if (option == 'Edit') {
    cy.contains(automation)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default edit-automation ng-binding'))
      .click();
  } else {
    cy.contains(automation)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle automation-actions'))
      .click();

    cy.contains(automation)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right'))
      .children('li')
      .contains(option)
      .click();
    cy.wait(1000);
  }
});

Cypress.Commands.add('selectCampaignDropdownOption', (option, campaign) => {
  if (option == 'Edit') {
    cy.contains(campaign)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default campaign-edit ng-binding'))
      .click();
  } else {
    cy.contains(campaign)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle campaign-actions'))
      .click();

    cy.contains(campaign)
      .parent('span')
      .parent(byClass('slat-title'))
      .parent(byClass('slat-titles'))
      .parent(byClass('slat-titles-holder'))
      .parent(byClass('slat-content'))
      .children(byClass('slat-action'))
      .children(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right campaign-actions-menu'))
      .children('li')
      .contains(option)
      .click();
    cy.wait(1000);
  }
});

Cypress.Commands.add('selectListDropdownOption', (option, listName) => {
  if (option == 'Segment') {
    cy.contains(listName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default segment-list ng-binding'))
      .click();
  } else {
    cy.contains(listName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle list-actions'))
      .click();

    cy.contains(listName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right list-actions-menu'))
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectSegmentDropdownOption', (option, segmentName) => {
  if (option == 'Edit') {
    cy.contains(segmentName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default ng-binding'))
      .click();
  } else {
    cy.contains(segmentName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown'))
      .children(byClass('btn btn-default dropdown-toggle'))
      .click();

    cy.contains(segmentName)
      .parents(byClass('slat-content'))
      .children(byClass('slat-action ng-isolate-scope'))
      .children(byClass('btn-group dropdown open'))
      .children(byClass('dropdown-menu pull-right'))
      .contains(option)
      .click();
  }
});

Cypress.Commands.add('selectEditor', (editor) => {
  switch (editor) {
    case 'HTML':
      cy.get(byClass('message-actions-select-html')).click();
      break;
    case 'Plain Text':
      cy.get(byClass('message-actions-select-plaintext')).click();
      break;
    case 'Drag & Drop':
      cy.get(byClass('message-actions-select-draganddrop')).click();
      break;
    case 'Auto Message Import':
      cy.get('a').contains('Auto Message Import').click();
      break;
      /*   case 'SMS':
                 cy.get(byClass('message-actions-select-'))
                   .click()
                 break*/
    default:
      cy.log('WARNING: Editor ' + editor + ' is not available');
  }
});

Cypress.Commands.add('selectEditorAction', (action) => {
  switch (action) {
    case 'Dynamic content regions':
      cy.get(byClass('nav-item dynamic-content-regions')).click();
      break;
    case 'RSS Regions':
      cy.get(byClass('nav-item rss-regions')).click();
      break;
    case 'Toggle Editor':
      cy.get(byClass('nav-item toggle-visual-editor')).click();
      break;
    default:
      cy.log('WARNING: Action ' + action + ' is not available');
  }
});

Cypress.Commands.add('selectRadio', (option) => {
  switch (option) {
    case 'Sign up & double opt-in':
      cy.get('div').contains('Sign up & double opt-in').click();
      break;
    case 'Based on a date':
      cy.get('div').contains('Based on a date').click();
      break;
    case 'Plain text editor':
      cy.get('label').contains('Plain text editor').click();
      break;
    default:
      cy.log('WARNING: Option ' + option + ' is NOT available');
  }
});

Cypress.Commands.add('selectCheckbox', (option) => {
  switch (option) {
    case 'Send a double opt in email':
      cy.get('div').contains('Send a double opt in email').click();
      break;
    case 'Send a welcome email':
      cy.get('div').contains('Send a welcome email').click();
      break;
    default:
      cy.log('WARNING: Option ' + option + ' is NOT available');
  }
});

Cypress.Commands.add('selectRule', (rule) => {
  switch (rule) {
    case 'Date of signup':
      cy.get(byClass('modal-dialog '))
        .children('div')
        .children('modal-flow')
        .children('modal-flow-step')
        .children(byClass('row group ng-scope'))
        .children('div')
        .children('form')
        .children(byClass('form-group rule-delivery-date'))
        .children('div')
        .children('div')
        .children('select')
        .select('Date of signup');
      break;
    default:
      cy.log('WARNING: Rule ' + rule + ' does NOT apply');
  }
});

Cypress.Commands.add('selectJourneyOption', (option, dropdown) => {
  switch (dropdown) {
    case 'Date':
      cy.get(byId('select-field_label'))
        .contains('Date')
        .parent('div')
        .children('span')
        .children('select')
        .select(option);
      break;
    case 'Start':
      cy.get(byId('step-edit-fields_choose-start'))
        .children('span')
        .children('select')
        .select(option);
      break;
    default:
      cy.log('WARNING: Option ' + option + ' is NOT available');
  }
});

Cypress.Commands.add('changePagination', (numberOfRecords) => {
  cy.get(byClass('pagination-details'))
    .children('div')
    .children('select')
    .select(numberOfRecords);
}); //