///<reference types = 'cypress'/>
describe('Drag and drop message', function () {
  it('create a message using drag and drop editor', function () {
    cy.visit('https://app.release.qa.pur3.net');
    cy.get('input[name="username"]').type('anuradha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click();
    cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/email/new/draganddrop"]').click();
    cy.get('[p3-validator="custom:email.validateNameField"]')
      .type('Regression - dnd message ')
      .type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type(
      'Payment Confirmation'
    );
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    cy.get(
      '[src="https://www.uploadlibrary.shared.qa.pur3.net/NaN/dndtemplates/recipe/thumbnail.jpeg"]'
    ).click();
    cy.get(
      '.btn.btn-success.template-selector-modal-select.ng-binding'
    ).click();
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();
    //cy.wait(1000);
    //cy.get('[class="btn btn-success flow-action-btn flow-finish"]').click();
  });
});
