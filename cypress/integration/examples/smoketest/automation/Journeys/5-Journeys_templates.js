describe('5 Journey templates', function () {
  before(function () {
    cy.login();
    cy.findByText('Automations').click();
    cy.findByText('New journey').should('exist').click();
  });
  it('renders the 5 journey templates simultaneously', function () {
    cy.get('[data-test-id="panel_body"]').first().findByText('Preview and use').click();
    cy.findByText('Get started with this journey');
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
    cy.get('[data-test-id="panel_body"]').eq(1).findByText('Preview and use').click();
    cy.findByText('Get started with this journey');
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
    cy.get('[data-test-id="panel_body"]').eq(2).findByText('Preview and use').click();
    cy.findByText('Get started with this journey');
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
    cy.get('[data-test-id="panel_body"]').eq(3).findByText('Preview and use').click();
    cy.findByText('Get started with this journey');
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
    cy.get('[data-test-id="panel_body"]').eq(4).findByText('Preview and use').click();
    cy.findByText('Get started with this journey');
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  });

});