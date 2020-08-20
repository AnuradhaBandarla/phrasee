describe('Main menu validation', function () {
  beforeEach(function () {
    cy.login();
  });

  it('renders the Lists page', function () {
    cy.findByText('Lists').click();
    cy.findByText('Lists and contacts').should('exist');
  });

  it('renders the Messages page', function () {
    cy.findByText('Messages').click();
    cy.get('.type-switcher-dropdown').should('exist');
    cy.findByText('New message').should('exist');
  });

  it('renders the Campaigns page', function () {
    cy.findByText('Campaigns').click();
    cy.findByText('SMS').should('exist');
    cy.findByText('Email').should('exist');
  });

  it('renders the Automations page', function () {
    cy.findByText('Automations').click();
    cy.findByText('New journey').should('exist');
  });

  it('renders the Reports', function () {
    cy.findByText('Reports').click();
    cy.findByText('Export').should('exist');
  });

  it('renders the Analytics page', function () {
    cy.findByText('Analytics').click();
    cy.findByTestId('page-heading_title').should('contain.text', 'Analytics');
  });

  it('renders the Integrations page', function () {
    cy.findByText('Integrations').click();
    cy.findByTestId('integrations-signup_heading').should(
      'contain.text',
      'Connect the dots'
    );
    cy.findByText('Enquire to get started').should('be.visible');
    //cy.contains('button', 'Next').click({ force: true });
  });
});
