describe('RSS Feed Creation', function () {
    beforeEach(function () {
     
      cy.login();
    });
    it('create a RSS Feed', function () {
      cy.findByText('Messages').click();
      cy.get('.type-switcher-dropdown > .btn').click();
      cy.findByText('RSS feeds').click();
      cy.contains('button', 'New RSS feed').click(  );
      cy.get('[name="rss-feed-name"]').type('RSS Feed').type(Date.now());
      cy.get('[p3-validator-bootstrap="rss-feed-uri"] > .countdown-group > .form-control').type('	http://feeds.bbci.co.uk/news/rss.xml');
      cy.contains('button', 'Save and finish').click()
    });
  })