///<reference types = 'cypress'/>
describe('SMS message', function()
{it('create an SMS message',function()
{
    cy.visit("https://app.release.qa.pur3.net/");
    cy.get('input[name="username"]').type('anuradha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click()
    cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/sms/new"]').click()   
    cy.get('[p3-validator="custom:sms.validateNameField"]').type('Regression - Payment Confirmation SMS').type(Date.now());
    cy.get('.col-md-11').type('This is to confirm that we have received your payment');
    cy.get('.btn.btn-success.flow-action-btn.flow-finish').click({force: true});
   // cy.wait(1000);
})}
)