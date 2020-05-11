///<reference types = 'cypress'/>
describe('Main menu validation', function() 



{
  beforeEach(function() {
      // Log in and navigate to journey templates
      cy.visit("https://app.release.qa.pur3.net/");
      cy.login();
      //cy.wait(1000);
      
    })
  
  it('renders the Lists page', function (){
    cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
      const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
      
      if(menuitemtext.includes('Lists'))
      {
        $e1.find('.nav-item-label.ng-binding').click();
      }
       
     //cy.wait(1000);
})})


it('renders the Messages page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Messages'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})
  
it('renders the Campaigns page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Campaigns'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})

it('renders the Automations page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Automations'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})

it('renders the Reports page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Reports'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})

it('renders the Analytics page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Analytics'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})


it('renders the Integrations page', function (){
  cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
    const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
    
  if(menuitemtext.includes('Integrations'))
    {
      $e1.find('.nav-item-label.ng-binding').click();
    }
     
   cy.wait(1000);
})})





})
