import 'cypress-file-upload';
describe('lists via import', function () {
  beforeEach(()=> {
    cy.login();
  });

  it('upload lists in csv format', ()=> {
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