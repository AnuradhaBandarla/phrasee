describe('Email Campaign', function () {
    beforeEach(function () {
        cy.login();
    });

    it('schedules an email Campaign ', function () {
        cy.findByText('Campaigns').click();
        cy.findByText('New email campaign').click();
        cy.scheduleAnEmailCampaign()


    });
})