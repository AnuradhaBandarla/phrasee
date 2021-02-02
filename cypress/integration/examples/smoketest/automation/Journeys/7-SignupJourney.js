describe('Signup Journey', function () {
    it('sets up draft signup journey', function () {
        cy.navigateToSignupJourneyPage();
        cy.SelectStartStep();
        cy.ChooseListforJourneys()
        cy.wait(2000);
        cy.ChooseMessage()
        cy.removeFirstWaitStep();
        cy.remove2ndSendMsgStep();
        cy.remove2ndWaitStep();
        cy.remove3rdSendMsgStep()
        cy.ActivateJourney()
    });
});
//cy.findAllByText("hello button").eq(0).click()