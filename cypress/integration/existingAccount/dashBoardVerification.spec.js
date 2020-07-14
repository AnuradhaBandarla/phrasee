describe('V8_DashBoard', function () {
    beforeEach(function () {
        cy.visit('https://app.release.qa.pur3.net/');
        cy.login();
        cy.findByText('Automations').click();
        cy.findByText('New journey').should('exist').click();
    });
    it('renders the signup journey template', function () {
        cy.get('[data-test-id="panel_body"]').first().findByText('Preview and use').click();
        cy.get('[data-test-id="modal_close-button"]').scrollIntoView().click();
    })
})