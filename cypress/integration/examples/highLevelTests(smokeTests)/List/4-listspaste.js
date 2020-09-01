describe('list via paste', function () {
  beforeEach(function () {
    cy.login();
  });

  it('upload lists in csv format', function () {
    cy.get('.site-header').findByText('Lists').click()
    cy.findByText('Lists and contacts').should('exist');
    cy.findByText('Import contacts').click();
    cy.get('[name="listname"]')
      .type('SmokeTest-upload-happylist')
      .type(Date.now());
    cy.get('[value="paste"]').check().click();
    cy.get('[name="imported-data"]').type(
      'anuradha.bandarla@pure360.com'
    );
    cy.get('.btn-list-upload').click();
    cy.finishListUpload();

  });
});