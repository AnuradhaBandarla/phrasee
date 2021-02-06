describe('Custom Date field Journey', function () {

    it('sets up an Active custom date journey', () => {

        cy.navigateTocustomDateFieldJourneyPage()
        cy.findAllByTestId('graph-node').first().click()
        cy.ChooseListforCustomDateJouney()
        cy.ChooseMessage()
        cy.ActivateJourney()

    })

})