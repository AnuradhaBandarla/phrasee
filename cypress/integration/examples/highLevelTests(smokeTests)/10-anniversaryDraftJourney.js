describe('Anniversary Journey', function () {

    it('sets up anniversary journey', function () {

        cy.navigateToanniversaryJourneyPage()
        cy.SelectStartStep()
        cy.ChooseList()
        cy.get('[data-test-id="select-field_select-element"]').select(
            'value="__DATE_OF_SIGNUP__"'
        );
        cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.ChooseMessage()


    })
})