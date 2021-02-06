describe('plain text message', function () {
  beforeEach(() => {
           cy.login();
   });
  it('creates a plain text message ', () => {
    cy.findByText('Messages').click();
    cy.get('.btn-group').click();
    cy.get('[href="/messages/email/new/plaintext"]').click();
    cy.get('[p3-validator="custom:email.validateNameField"]')
      .type('smoketest PT message ')
      .type(Date.now());cy.get('[p3-validator="custom:email.validateSubjectField"]').type(
        'Payment Confirmation'
      );
      cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
      //cy.get('.canvas-preview.ng-pristine.ng-valid.ng-isolate-scope.ng-not-empty.ng-touched').type('asdsd');
      //below locator was copied from cypress test runner, need to work on it
      cy.get('.canvas-preview')
        .clear()
        .type('This is to confirm that we have received your payment');
      cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
      cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();
  });
});