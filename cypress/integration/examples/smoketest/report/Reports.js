describe('Report page', function () {
    beforeEach(()=> {
      cy.login();
      cy.wait(1000);
    });
  
    it('renders the Reports', ()=> {
      cy.get('.main-nav').findByText('Reports').click();
      cy.findByText('Export').should('exist');
  
    });
  });