///<reference types = 'cypress'/>
describe('Main menu validation', function () {
  beforeEach(function () {
    cy.visit('https://app.release.qa.pur3.net/');
    cy.login();
  });

  it.only('renders the Lists page', function () {
    cy.get('.main-nav').findByText('Lists').click();

    cy.findByText('Lists and contacts').should('exist');
  });

  it('renders the Messages page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Messages')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });

  it('renders the Campaigns page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Campaigns')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });

  it('renders the Automations page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Automations')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });

  it('renders the Reports page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Reports')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });

  it('renders the Analytics page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Analytics')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });

  it('renders the Integrations page', function () {
    cy.get('.main-nav')
      .find('.nav-item.ng-scope')
      .each(($el, index, $list) => {
        const menuitemtext = $el.find('.nav-item-label.ng-binding').text();

        if (menuitemtext.includes('Integrations')) {
          $el.find('.nav-item-label.ng-binding').click();
        }

        cy.wait(1000);
      });
  });
});
