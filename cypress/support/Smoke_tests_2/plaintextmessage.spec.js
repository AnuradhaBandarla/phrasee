///<reference types = 'cypress'/>
describe('Plain Text message', function () {
  it('create a message using Plain text editor', function () {
    cy.visit('https://app.release.qa.pur3.net/');
    cy.get('input[name="username"]').type('anuradha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click();

    cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/email/new/plaintext"]').click();
    cy.get('[p3-validator="custom:email.validateNameField"]')
      .type('Regression - PT message ')
      .type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type(
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
    //cy.wait(1000);
    //
    ////

    //
    /* cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/email/new/plaintext"]').click();    
    cy.get('[p3-validator="custom:email.validateNameField"]').type('Regression - PT message ').type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type('Payment Confirmation');
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    //cy.get('.canvas-preview.ng-pristine.ng-valid.ng-isolate-scope.ng-not-empty.ng-touched').type('asdsd');
    //below locator was copied from cypress test runner, need to work on it
    cy.get('.canvas-preview').clear().type('This is to confirm that we have received your payment');
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();*/
  });
});
