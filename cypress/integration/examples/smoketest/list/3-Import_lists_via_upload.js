import 'cypress-file-upload';

///<reference types = 'cypress'/>
describe('lists via import', function () {
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

    const fileName = 'list.csv';
    cy.fixture(fileName).then((fileContent) => {
      cy.get('[class="file-select"]').upload({
        fileContent,
        fileName,
        mimeType: 'text/csv',
      });
    });
    cy.finishListUpload();
    cy.findByText('Lists and contacts').should('exist');
  });
});