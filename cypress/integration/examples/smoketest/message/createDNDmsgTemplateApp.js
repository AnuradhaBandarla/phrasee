describe('dnd message', function () {
    beforeEach(() => {
             cy.login();
     });
    it('creates a dnd message using the template app', () => {
        cy.findByText('Messages').click();
        cy.get('.btn-group').click();
        cy.findByText('Drag & drop editor').click()
        cy.get('input').first().type('smoke test dnd message').type(Date.now())
        cy.get('[class="countdown-group"]').last().type('smoke test dnd subject')
        cy.findByText('Next').click().wait(500)
        cy.findByText('App').click()
        cy.findByText('Select').click()
        cy.findByText('Next').click()
        cy.findByText('Finish').click()
        // cy.get('.message-actions-select-draganddrop').click()
        //cy.wait(1000)
    });
});