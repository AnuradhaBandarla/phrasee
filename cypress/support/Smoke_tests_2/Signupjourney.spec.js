///<reference types = 'cypress'/>
describe('Signup Journey', function () {
  it('Set up a signup journey', function () {
    //use the below url to test on release
    cy.visit('https://app.release.qa.pur3.net/');
    //use the below url to test on live
    //cy.visit("https://app.pure360.com/");
    cy.get('input[name="username"]').type('anuradha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click();
    cy.get('[href="/journeys"]').click();
    cy.get('[data-test-id="new-journey-button"]').click();
    //below element is copied from test runner, needs to work around for the css element
    cy.get(':nth-child(1) > .panel-body > .btn-success').click();
    cy.get(
      '[data-test-id="journey-template-preview_button-get-started"]'
    ).click();
    cy.get('[data-test-id="input-field_input-element"]')
      .type('HP-Signup Journey ')
      .type(Date.now());
    cy.get('[data-test-id="journeys-save-modal_save-button"]').click();
    //below element is copied from test runner, needs to work around for the css element
    cy.get(
      '[style="left: 0px; width: 300px; height: 121px; top: 0px; opacity: 1;"] > .journey-node'
    ).click({ force: true });
    //cy.get('[style="left: 0px; width: 300px; height: 120px; top: 0px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="chosen-list_choose-list-button"]').click({
      force: true,
    });
    //cy.get('[data-test-id="collection-modal_search-input"]').type('HP-signup journeys list');
    cy.get('[data-test-id="collection-modal_search-input"]').type(
      'sign up list go live'
    );
    //cy.get('[data-test-id="slat-container"]').contains('HP-signup journeys list').click();
    cy.get('[data-test-id="slat-container"]')
      .contains('HP-signup journeys list')
      .click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({ force: true });
    cy.get(
      '[style="left: 0px; width: 300px; height: 89px; top: 150px; opacity: 1;"]'
    ).click({ force: true });
    cy.get('[data-test-id="choose-message_button"]').click({ force: true });
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({ force: true });
    //below steps are repeated to select message in the journey. need to find the way to reduce these steps
    cy.get(
      '[style="left: 0px; width: 300px; height: 89px; top: 471px; opacity: 1;"]'
    ).click({ force: true });
    cy.get('[data-test-id="choose-message_button"]').click({ force: true });
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({ force: true });
    cy.get(
      '[style="left: 0px; width: 300px; height: 89px; top: 792px; opacity: 1;"] > .journey-node'
    ).click({ force: true });
    //cy.get('[style="left: 0px; width: 300px; height: 89px; top: 471px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="choose-message_button"]').click({ force: true });
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();

    cy.get('.btn-success.pull-right.btn').click({ force: true });
    //cy.wait(5000);
    /*cy.get("#id")
    .should("be.visible")
    .then($btn => {
      $btn.click();*/
    /*-- another way -- cy.get('#journey-state-panel_button')
    .should("be.visible").then($btn=> {
        $btn.click()});*/

    // cy.get('[data-test-id="journey-state-panel_button"]').invoke('width').should('be.greaterThan', 0);
    //cy.get('button[data-test-id="journey-state-panel_button"]').should("be.visible").click({force:true}).first();
    //   cy.get('#root > div:nth-child(1) > div.editor-container > div.graph-and-publish-state > div.publish-state-panel > button').click({force:true});
    //   cy.get('[data-test-id="journey-state-panel_button"]').click({force: true});
    /*cy.get(byId('page-heading_title'))
    .contains(journey)
    .parent('div')
    .children(byId('journey-editor_journey-name-extras'))
    .children(byId('journey-state'))
    .should('be.visible', state)
       cy.get('.publish-state-panel').find('.btn-success.btn-block.btn').click({force:true});
       cy.get('.btn-success.btn').click();
      // cy.get('div button').click({force:true});
       //cy.wait(1000).click*/
  });
});
