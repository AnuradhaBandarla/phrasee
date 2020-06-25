describe('list via paste', function () {
  beforeEach(function () {
    cy.visit('https://app.release.qa.pur3.net/');
    cy.login();
  });

  it('upload lists in csv format', function () {
    cy.findByText('Lists').click();
    cy.findByText('Lists and contacts').should('exist');
    cy.findByText('Import contacts').click();
    cy.get('[name="listname"]')
      .type('SmokeTest-upload-happylist')
      .type(Date.now());
    cy.get('[value="paste"]').check().click();
    cy.get('[p3-validator="custom:listUpload.validatePasteAsText"]').type(
      'anuradha.bandarla@pure360.com'
    );
    cy.get('.btn.btn-default.btn-list-upload').click();
    cy.finish_list_upload();

  });
});