describe('Re-engage: not clicked Journey', function () {

    it('sets up draft not clicked journey', function () {

        cy.navigateTonotClickedJourneyPage()
        cy.SelectStartStep()
        cy.ChooseListforJourneys()
        cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.ChooseMessage()
        cy.ActivateJourney()
    })
})