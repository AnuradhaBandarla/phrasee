describe('HTML message', function () {
    beforeEach(() => {
             cy.login();
     });
    it('creates a HTML message', () => {
        cy.findByText('Messages').click();
        cy.get('.btn-group').click();
        cy.findByText('HTML code editor').click()
    
cy.get('input').first().type('smoke test HTML message').type(Date.now())
cy.get('[class="countdown-group"]').last().type('smoke test HTML subject')
cy.findByText("Next").click()
cy.get('.ace_content').type('<html><body><h1>HTML Links</h1><p><a href="https://www.w3schools.com/">Visit W3Schools.com!</a></p></body></html>')    
cy.findByText("Next").click()
cy.findByText("Finish").click()
})
})