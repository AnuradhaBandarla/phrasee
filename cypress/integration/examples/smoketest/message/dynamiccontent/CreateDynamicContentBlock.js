describe('DynamicContentBlock', function () {
    beforeEach(function () {
           cy.login();
   });
    it('create a Dynamic Content Block', function () {
      cy.findByText('Messages').click();
      cy.get('.type-switcher-dropdown > .btn').click();
      cy.findByText('Dynamic content blocks').click();
      cy.findByText('New Dynamic Content Block').click();
      cy.get('[placeholder="Enter a unique name for your dynamic content block"]').type('redd');
      cy.get('.ace_scroller').type('<html><p>This is time to go. Red.</p><a href="https://www.google.co.uk">Google Red</a></html>')
      cy.findByText('Save and finish').click({force:true})
      cy.get('[p3-notify=""] > .alert').contains('Your Dynamic Content Block has been successfully created')})
      it('deletes a Dynamic Content Block', function (){
        cy.navigateToDynamicContentBlockPage();
      cy.get('[class="slat-content"]').first()
      cy.get('[class="btn btn-default dropdown-toggle"]').click()
      cy.findByText('Delete').click()
      cy.findByText('Delete this Dynamic Content Block').click();
      })
      })