describe('SMScreation', function () {

    beforeEach(function () {
        cy.login();
    });
    it('create a SMS message', function () {
        cy.findByText('Messages').click();
        cy.get('.type-switcher-dropdown > .btn').click();
        cy.findByText('SMS').wait(100).click()
        cy.contains('button', 'New SMS message').click();

        //cy.get('.countdown-group > .form-control').type('Payment Confirmation SMS')
        //  cy.get('[name="message-name"]').type('Regression - Payment Confirmation SMS').type(Date.now());
        cy.get('[type="text"]').type('Regression - Payment Confirmation SMS').type(Date.now());
       // cy.get('[name=message-content]').type('This is to confirm that we have received your payment');
        cy.get('.col-md-11').type('This is to confirm that we have received your payment');
        cy.contains('button', 'Finish').click()
        //cy.findByText('Finish').click()
    });
})

