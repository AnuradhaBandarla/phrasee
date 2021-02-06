describe('Content of V8 DashBoard for existing user with campaigns sent', function () {
    beforeEach(() => {
        cy.login();
});

    it('Verifies the navigation to dashboard', () => {
        cy.get('.page-heading-title').should('have.include.text', 'welcome')

    })
    it('verifes the presence of key email metrics of the report derived ', () => {
        cy.findByText('Delivered').should('contain.text', 'Delivered')
        cy.findByText('Open Rate').should('contain.text', 'Open Rate')
        cy.findByText('Click-to-open rate').should('contain.text', 'Click-to-open rate')
        cy.findByText('Opt-out').should('contain.text', 'Opt-out')
        cy.findByText('Mobile').should('contain.text', 'Mobile')
        cy.findByText('Desktop').should('contain.text', 'Desktop')
        cy.findByText('Tablet').should('contain.text', 'Tablet')
        cy.findByText('Other').should('contain.text', 'Other')

    })
    it('navigates to report page from dash board when clicked View report link', () => {
        cy.findByText('View full report').click()

        cy.findAllByText('Overview').should('contain.text', 'Overview').wait(50)
        cy.go('back')
        cy.findByText('View full report').should('exist')

    })
    it('verifies the link-Back to campaigns summary', () => {
        cy.findByText('View full report').click()
        cy.findByText('Back to campaigns summary').click()
        cy.findByText('Export').should('exist')
    })

})