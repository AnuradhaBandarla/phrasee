describe('Anniversary Journey', function () {

    it('sets up anniversary journey', function () {

        cy.navigateToanniversaryJourneyPage()
        cy.SelectStartStep()
        cy.get('[data-test-id="chosen-list_choose-list-button"]').click();
        cy.get('[data-test-id="collection-modal_search-input"]').type('uniqueList');
        cy.findByText('1 result').should('exist').click();
        cy.get('[type="radio"]').check();
        cy.findByText('Use this list').should('exist').click();
        //cy.wait(2000)
        cy.get('[data-test-id="select-field_select-element"]').first().select('Date of signup')
        cy.findByText('Save').should('exist').click();
        //  cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.ChooseMessage()
        // cy.wait(2000)
        cy.ActivateJourney()

    })
})