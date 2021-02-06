describe('Re-engage: not clicked Journey', function () {

    it('sets up an Active not clicked journey', () => {

        cy.navigateTonotClickedJourneyPage()
        cy.SelectStartStep()
        cy.ChooseListforJourneys()
        cy.wait(1000*2);
        //cy.findAllByText("hello button").eq(0).click()
        cy.ChooseMessage()
        cy.ActivateJourney()
    })
})