//below is one of the best blogs to refer for cypress 
//https://levelup.gitconnected.com/what-ive-learnt-using-cypress-io-for-the-past-three-weeks-c1597999cd2f

/// <reference types='cypress'/>
describe('V8 Login Page', function()

{
this.beforeAll('visit Pure360',function(){
    cy.visit("https://app.pure360.com");
})

    it('logs in to V8 with valid user credentials', function() {
       
       cy.login()
       cy.wait(2000)
       cy.get('[class="page-heading-title ng-binding ng-scope"]').should('have.include.text','welcome')
       cy.go('back')
            
       }) 
    it('validates the alert when logged in to V8 with invalid user credentials', function() {
        cy.visit("https://app.pure360.com");
       cy.get('input[name="username"]').type('anuraadha');
       cy.get('input[name="password"]').type('puretest123');
       cy.get('.btn.btn-success.btn-block.ng-binding').click();
       cy.get('.alert.ng-binding.ng-scope.alert-danger').should('have.text','You have entered an incorrect username or password, please try again.' ) /*   //cy.wait('2000');
        //below is the cypress command to navigate back in the web page
       cy.go('back');
        //below are for negative tests
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest1@23');
        //cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuadha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest1@23');
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
       //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('pureest1@23');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anur adha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.debug();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest 123');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        
        //cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        //cypress cannot accept an empty string for input values --HELP PLEASE
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').type();
        //cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest 123');        
        //cy.get('.btn.btn-success.btn-block.ng-binding').click();
        

        //*need to write a step to clear the previous entries in user name and password fields*
       /* 
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuadham');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
        cy.get('.btn.btn-success.btn-block.ng-binding').click(); 
        How to write regular expressions to cover all input fields, so that all negative cases can be done in one go*/
    })})


