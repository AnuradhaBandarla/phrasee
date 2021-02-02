describe('Re-engage: not opened Journey', function () {

    it('sets up an Active not opened journey', function () {

        cy.navigateTonotOpenedJourneyPage()
        cy.SelectStartStep()
        cy.ChooseListforJourneys()
        cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.ChooseMessage()
        cy.ActivateJourney()

    })
})