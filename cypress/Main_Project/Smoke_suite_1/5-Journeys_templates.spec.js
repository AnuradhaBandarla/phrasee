///<reference types = 'cypress'/>
describe('5 Journey templates', function() {
    beforeEach(function() {
        // Log in and navigate to journey templates
        //cy.visit("https://app.release.qa.pur3.net/");
        cy.visit("https://app.pure360.com");
        cy.login();
        cy.wait(1000);
        // TODO: Improve selector
        cy.get('[href="/journeys"]').click();
        cy.get('[data-test-id="new-journey-button"]').click();
        cy.wait(1000);
    })
    
    it('renders the signup journey template', function () {
       
      cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').each(($e1, index, $list)=>{
        const templatetypetext=$e1.find('[data-test-id="journey-template-collection_title"]').text()
              if(templatetypetext.includes('Signup')){
                 $e1.find('[data-test-id="journey-templates-view-button"]').click();
                 
                 cy.wait(1000);
                 
                 cy.get('[data-test-id="journey-template-preview_template-name"]').should('have.text','Signup')
                 cy.get('[data-test-id="modal_close-button"]').click();
                
              }
            });
           
    });

    it('renders the Re-engage: not opened journey template', function () {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').each(($e1, index, $list)=>{
          const templatetypetext=$e1.find('[data-test-id="journey-template-collection_title"]').text()
               if(templatetypetext.includes('Re-engage: not opened')){
                  $e1.find('[data-test-id="journey-templates-view-button"]').click();
                   cy.wait(1000);
                  cy.get('[data-test-id="journey-template-preview_template-name"]').should('have.text','Re-engage: not opened')
  
                   cy.get('[data-test-id="modal_close-button"]').click();
                   
                }
              });
              
      }); 


      it('renders the Re-engage: not clicked journey template', function () {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').each(($e1, index, $list)=>{
            const templatetypetext=$e1.find('[data-test-id="journey-template-collection_title"]').text()
              if(templatetypetext.includes('Re-engage: not clicked')){
                 $e1.find('[data-test-id="journey-templates-view-button"]').click();
                 cy.wait(1000);
                 cy.get('[data-test-id="journey-template-preview_template-name"]').should('have.text','Re-engage: not clicked')
                 cy.get('[data-test-id="modal_close-button"]').click();
                
              }
            });
            
    });
    it('renders the Anniversary journey template', function () {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').each(($e1, index, $list)=>{
            const templatetypetext=$e1.find('[data-test-id="journey-template-collection_title"]').text()
              if(templatetypetext.includes('Anniversary')){
                 $e1.find('[data-test-id="journey-templates-view-button"]').click();
                 cy.wait(1000);
                 cy.get('[data-test-id="journey-template-preview_template-name"]').should('have.text','Anniversary')
                 cy.get('[data-test-id="modal_close-button"]').click();
                 
              }
            });
            
    });


    it('renders the Custom date field journey template', function () {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').each(($e1, index, $list)=>{
            const templatetypetext=$e1.find('[data-test-id="journey-template-collection_title"]').text()
              if(templatetypetext.includes('Custom date field')){
                 $e1.find('[data-test-id="journey-templates-view-button"]').click();
                 cy.wait(1000);
                 cy.get('[data-test-id="journey-template-preview_template-name"]').should('have.text','Custom date field')
                 cy.get('[data-test-id="modal_close-button"]').click();
              }
            });
        });


})
            
  

//below was the initial code 
        

    /*it('renders the signup journey template', function () {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').should('have.length',5);
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').eq(0).contains('Preview and use').click();
        cy.wait(1000);
        cy.get('[data-test-id="modal_close-button"]').click();
        cy.wait(1000);
    });

    it('renders the Re-engage: not opened journey template', function() {
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').should('have.length',5);
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').eq(1).contains('Preview and use').click();
        cy.wait(1000);
        cy.get('[data-test-id="modal_close-button"]').click();
        cy.wait(1000);

    });

    it('renders the Re-engage: not clicked journey template', function(){
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').should('have.length',5);
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').eq(2).contains('Preview and use').click();
        cy.wait(1000);
        cy.get('[data-test-id="modal_close-button"]').click();
        cy.wait(1000);
    });

    it('renders the Anniversary journey template', function(){
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').should('have.length',5);
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').eq(3).contains('Preview and use').click();
        cy.wait(1000);
        cy.get('[data-test-id="modal_close-button"]').click();
        cy.wait(1000);
    });

    it('renders the Custom date field journey template', function(){
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').should('have.length',5);
        cy.get('[data-test-id="journey-template-collection_group"]').find('[data-test-id="journey-template-collection_template"]').eq(4).contains('Preview and use').click();
        cy.wait(1000);
        cy.get('[data-test-id="modal_close-button"]').click();
        cy.wait(1000);*/
    



  
