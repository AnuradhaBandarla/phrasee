///<reference types = 'cypress'/>
describe('Visual editor message', function()
{it('create a message using Visual editor',function()
{
  cy.visit("https://app.release.qa.pur3.net/");
    cy.get('input[name="username"]').type('anuradha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click()
    cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/email/new/wysiwyg"]').click();
    cy.get('[p3-validator="custom:email.validateNameField"]').type('Regression - VE message ').type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type('Payment Confirmation');
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    cy.get('.btn.btn-success.ng-binding').click();
    //cy.get('.cke_1.cke.cke_reset.cke_chrome.cke_editor_editor1.cke_ltr.cke_browser_webkit').type('This is to confirm that we have received your payment');
   // cy.get('.cke_wysiwyg_frame:visible').type('hellp');
  //--below code works, but copied from cypress test runner--   
  cy.get('[class="cke_button_icon cke_button__sourcedialog_icon"]').click({force: true}).type('why are the first few characters of the message is not getting entered'); 
// cy.get('#cke_72_textarea').type('This is to confirm that we have received your payment');
  cy.get('[id="cke_78_label"]').click();
  cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
  cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();
  cy.wait(1000);
  //cy.get('[id="cke_72_textarea"]').type('this is ...');
  //pending steps -- 
    //identifying the element for the child window
    //cy.get('.cke_editable.cke_editable_themed.cke_contents_ltr').type('this is the body of the wysiwyg message');

//    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
  //  cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();


})}
)