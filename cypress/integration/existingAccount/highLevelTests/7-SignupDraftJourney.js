describe('Signup Journey', function () {
    it('sets up draft signup journey', function () {

        cy.navigateToSignupJourneyPage()
        cy.findAllByTestId('graph-node').first().click({
            force: true
        });

        cy.get('[data-test-id="chosen-list_choose-list-button"]').click({
            force: true
        });

        cy.get('[data-test-id="collection-modal_search-input"]').type('signup list 2')
        cy.findByText('1 result').should('exist').click()
        cy.get('[type="radio"]').check()
        cy.findByText('Use this list').should('exist').click()
        cy.findByText('Save').should('exist').click({
            force: true
        });
        cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.findAllByText('Send message to contact').eq(0).should('exist').click({
            force: true
        });
        cy.get('[data-test-id="choose-message_button"]').click({
            force: true
        });
        cy.get('[data-test-id="collection-modal_search-input"]').type('Aut-MSG')
        cy.findByText('1 result').should('exist').click()
        cy.get('[type="radio"]').check()
        cy.findByText('Use this message').should('exist').click()
        cy.findByText('Save').should('exist').click({
            force: true
        })
        cy.findAllByText('Wait').eq(0).should('exist').click({
            force: true
        })
        cy.findByText('Save').should('exist').click({
            force: true
        })
        cy.get('[data-test-id="graph-node-remove-button"]').eq(0).click({
            force: true
        })
        cy.get('[data-test-id="graph-node-remove-button"]').eq(1).click({
            force: true
        })
        cy.get('[data-test-id="graph-node-remove-button"]').eq(2).click({
            force: true
        })
        cy.get('[data-test-id="graph-node-remove-button"]').eq(3).click({
            force: true
        })
        cy.get('[data-test-id="journey-state-panel_button"]').click({
            force: true
        })
    })
})