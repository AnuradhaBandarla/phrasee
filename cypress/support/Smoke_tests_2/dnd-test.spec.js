describe('Drag and drop message', function () {
    beforeEach(function () {
        cy.visit('https://app.release.qa.pur3.net/');
        cy.login();
    })
    it('create a message using drag and drop editor', function () {
        cy.findByText('Messages').click();
        cy.get('.btn-group').click();
        cy.findByText('Drag & drop editor').click()
        // cy.get('.message-actions-select-draganddrop').click()
        //cy.wait(1000)
    });
});