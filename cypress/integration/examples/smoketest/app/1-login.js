describe('V8 Login Page', function () {
  beforeEach('visit Pure360', function () {
    cy.visit(Cypress.env('url'));
  });

  it('logs in to V8 with valid user credentials', function () {
    cy.get('input[name="username"]').type(Cypress.env('username'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('.btn.btn-success.btn-block').click();
    cy.get('.page-heading-title').should('have.include.text', 'welcome');
  });

  it('validates the alert when logged in to V8 with invalid user credentials', function () {

    cy.get('input[name="username"]').type('anuraahdha');

    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block').click();
    cy.get('.alert.alert-danger').should(
      'have.text',
      'You have entered an incorrect username or password, please try again.'
    );
  });
});