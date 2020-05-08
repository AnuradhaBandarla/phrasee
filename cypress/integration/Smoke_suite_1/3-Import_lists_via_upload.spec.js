import 'cypress-file-upload';
///<reference types = 'cypress'/>
describe('lists via import', function()
 {
        beforeEach(function() {
            cy.visit("https://app.pure360.com");
            cy.login();
 })
      
it('upload lists in csv format', function()
{
        cy.get('[p3-href="/lists"]').click();
        cy.get('.btn.btn-success.list-import.ng-binding.ng-scope').click();
        cy.get('[name="listname"]').type('SmokeTest-upload-happylist').type(Date.now());
        

 const fileName = 'list.csv';
 cy.fixture(fileName).then(fileContent => {
  cy.get('[class="file-select"]').upload({ fileContent, fileName, mimeType: 'text/csv' });
});
cy.finish_list_upload();


       //cy.wait(1000);

        })}
)                       