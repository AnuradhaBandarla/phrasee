///<reference types = 'cypress'/>
describe('Report page', function() {
    beforeEach(function()
      {       
        cy.visit("https://app.pure360.com");
        cy.login();
        cy.wait(1000);
        
      })
      
    it('renders the Reports page', function (){
        cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
          const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
          if(menuitemtext.includes('Reports'))
          {
            $e1.find('.nav-item-label.ng-binding').click();
           
           cy.get('h4.ng-binding').should('be.visible').should('have.include.text','Summary Campaigns Performance')
          }
                  
        })})
        
    })