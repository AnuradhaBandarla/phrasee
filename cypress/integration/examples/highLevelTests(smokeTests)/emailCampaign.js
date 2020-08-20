describe('Email Campaign', function () {
    beforeEach(function () {
        cy.visit('https://app.release.qa.pur3.net/');
        cy.login();
    });

    it('schedules an email Campaign ', function () {
        cy.findByText('Campaigns').click();
        cy.findByText('Email').click();
        cy.scheduleAnEmailCampaign()
        cy.findByText('New email campaign').click()
        cy.selectcontentforEmailCampaign()

    });
})