describe('ve message', function () {
  beforeEach(() => {
           cy.login();
   });
   it('creates a VE message ', () => {
    cy.findByText('Messages').click();
    cy.get('.btn-group').click();
cy.get('.dropdown-menu').get('[href="/messages/email/new/wysiwyg"]').click()
cy.get('input').first().type('smoke test VE message').type(Date.now())
cy.get('[class="countdown-group"]').last().type('smoke test VE subject')
cy.findByText("Next").click()
cy.findByText("I accept, let's continue").click()
cy.get('#cke_53_label').click().type('smoke test ve msg') 
cy.findByText("OK").click()
cy.findByText("Next").click()
cy.findByText("Finish").click()
  });
});
