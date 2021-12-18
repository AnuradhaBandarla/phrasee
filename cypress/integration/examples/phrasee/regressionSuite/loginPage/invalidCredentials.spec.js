describe('Login page error validations', () => {
  before(() =>{
    cy.visit(Cypress.env('url'))
    });

    it.skip('validates when logging in to phrasee with invalid username', () =>{
      
      cy.get('input[name="email"]').type('email@emailcom')
      cy.get('input[name="password"]').type(Cypress.env('password')).wait(200)
      cy.get('[class="submit"]').find('.ant-btn').click()
      cy.findAllByText('Invalid Login Credentials').should('exist')

      })  
    })