describe('Custom Date field Journey', function () {

    it('creates a draft custom date journey', function () {

        cy.navigateTocustomDateFieldJourneyPage()
        cy.findAllByTestId('graph-node').first().click()
        cy.ChooseListforCustomDateJouney()
        cy.ChooseMessage()
        cy.ActivateJourney()

    })

})