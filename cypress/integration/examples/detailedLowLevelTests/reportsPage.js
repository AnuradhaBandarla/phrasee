describe('Report page', function () {
  beforeEach(function () {
    cy.login();
    //cy.wait(1000);
  });

  it('renders the Reports', function () {
    cy.get('.main-nav').findByText('Reports').click();
    cy.findByText('Export').should('exist');

  });
});