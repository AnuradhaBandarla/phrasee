///<reference types = 'cypress'/>
describe('list via paste', function()
{
  beforeEach(function() {
      cy.visit("https://app.release.qa.pur3.net/");
      cy.login();
})


it('List uploads via paste option', function()
{
  cy.get('[p3-href="/lists"]').click();
  cy.get('.btn.btn-success.list-import.ng-binding.ng-scope').click();
  cy.get('[name="listname"]').type('Smoketest-paste-happylist').type(Date.now());
  cy.get('[value="paste"]').check().click();
  cy.get('[p3-validator="custom:listUpload.validatePasteAsText"]').type('anuradha.bandarla@pure360.com');
  cy.get('.btn.btn-default.btn-list-upload').click();
  cy.finish_list_upload();
 //https://stackoverflow.com/questions/50750956/how-to-select-nth-item-inside-select-element-in-cypress
 //cy.get('[id="select-email"]').select('anuradha.bandarla@pure360.com');
})})