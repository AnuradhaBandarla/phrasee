describe('SMScreation', function () {
  beforeEach(function () {
    cy.visit('https://app.release.qa.pur3.net/');
    cy.login();
  });
  it('create a SMS message', function () {
    cy.findByText('Messages').click();
    cy.get('.type-switcher-dropdown > .btn').click();
    cy.findByText('SMS').click();
    cy.contains('button', 'New SMS message').click(  );
    cy.get('[name="message-name"]').type('Regression - Payment Confirmation SMS').type(Date.now());
    cy.get('[name=message-content]').type('This is to confirm that we have received your payment');
    cy.findByText('Finish').click()
  });
}) 