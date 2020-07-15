describe('Email Campaign', function () {
    beforeEach(function () {
        cy.visit('https://app.release.qa.pur3.net/');
        cy.login();
    });

    it('renders the Campaigns page', function () {
        cy.findByText('Campaigns').click();
        cy.findByText('Email').click();
        cy.selectcontentforEmailCampaign()
        cy.findByText('New email campaign').click()
        cy.selectcontentforEmailCampaign()

    });
})