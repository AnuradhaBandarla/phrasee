//below is one of the best blogs to refer for cypress
//https://levelup.gitconnected.com/what-ive-learnt-using-cypress-io-for-the-past-three-weeks-c1597999cd2f

describe('V8 Login Page', function () {
  this.beforeAll('visit Pure360', function () {
    cy.visit('https://app.release.qa.pur3.net/');
  });

  it('logs in to V8 with valid user credentials', function () {
    cy.login();

    cy.get('.page-heading-title').should('have.include.text', 'welcome');
  });

  it('validates the alert when logged in to V8 with invalid user credentials', function () {
    cy.visit('https://app.release.qa.pur3.net/');
    cy.get('input[name="username"]').type('anuraadha');
    cy.get('input[name="password"]').type('puretest123');
    cy.get('.btn.btn-success.btn-block').click();
    cy.get('.alert.alert-danger').should(
      'have.text',
      'You have entered an incorrect username or password, please try again.'
    );
  });
});
