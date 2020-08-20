describe('5 Journey templates', function () {
  beforeEach(function () {
    cy.login();
    cy.findByText('Automations').click();
    cy.findByText('New journey').should('exist').click();
  });
  it('renders the signup journey template', function () {
    cy.get('[data-test-id="panel_body"]').first().findByText('Preview and use').click();
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  })

  it('renders the Re-engage: not opened journey template', function () {
    cy.get('[data-test-id="panel_body"]').eq(1).findByText('Preview and use').click();
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  });

  it('renders the Re-engage: not clicked journey template', function () {
    cy.get('[data-test-id="panel_body"]').eq(2).findByText('Preview and use').click();
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  });

  it('renders the Anniversary journey template', function () {
    cy.get('[data-test-id="panel_body"]').eq(3).findByText('Preview and use').click();
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  });
  it('renders the Custom date field journey template', function () {
    cy.get('[data-test-id="panel_body"]').eq(4).findByText('Preview and use').click();
    cy.wait(1000)
    cy.get('[data-test-id="journey-template-preview_heading"]').findByText('View journey').should('exist');
    //Need help with assertion
    cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
  });

});