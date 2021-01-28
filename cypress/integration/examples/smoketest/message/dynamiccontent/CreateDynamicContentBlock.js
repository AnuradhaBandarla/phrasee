describe('DynamicContentBlock', function () {
    beforeEach(function () {
           cy.login();
   });
    it('create a Dynamic Content Block', function () {
      cy.findByText('Messages').click();
      cy.get('.type-switcher-dropdown > .btn').click();
      cy.findByText('Dynamic content blocks').click();
    // Creating a new content block
      cy.findByText('New Dynamic Content Block').click();
      cy.get('[placeholder="Enter a unique name for your dynamic content block"]').type('Red');
      cy.get('.ace_scroller').type('<html><p>This is time to go. Red.</p><a href="https://www.google.co.uk">Google Red</a></html>')
      cy.findByText('Save and finish').click({force:true})
      cy.get('[p3-notify=""] > .alert').contains('Your Dynamic Content Block has been successfully created')
//Deleting the above created dynamic content.
      cy.get(':nth-child(1) > .slat > .slat-content > .slat-action > .btn-group > .dropdown-toggle > .caret > .ng-isolate-scope > .icon > svg').click();
      cy.get(':nth-child(1) > .slat > .slat-content > .slat-action > .btn-group > .dropdown-menu > .content-item-delete-container > .content-item-delete').click();
      cy.findByText('Delete this Dynamic Content Block').click();
     })
  }); 