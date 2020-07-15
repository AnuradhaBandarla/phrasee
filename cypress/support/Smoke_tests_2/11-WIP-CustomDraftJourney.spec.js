describe('Custom Date field Journey', function () {

    it.only('creates a draft custom date journey', function () {

        cy.navigateTocustomDateFieldJourneyPage()
        cy.findAllByTestId('graph-node').first().click({
            force: true
        });

        cy.get('[data-test-id="chosen-list_choose-list-button"]').click({
            force: true
        });
        cy.get('[data-test-id="collection-modal_search-input"]').type('signup list 2')
        cy.findByText('1 result').should('exist').click()
        cy.get('[type="radio"]').check()
        cy.findByText('Use this list').should('exist').click().wait(2000)
        cy.findByText('Choose list field').click()
        cy.findByText('Before date')
        //cy.get('[data-test-id="select-field_select-element"]').eq(0).select('Date of signup')

        //  cy.findByText('Activate journey').should('exist').click()
        //Issue1- Unable to select the dropdowns, UI complains that the elements are hidden
        //Issue2- Unable to activate journey

    })

})