describe('DynamicContentBlock', function () {
    beforeEach(() => {
     cy.login();
     });
it.only('deletes a Dynamic Content Block', () => {//Deleting the above created dynamic content.

    cy.findByText('Messages').click();
    cy.get('.type-switcher-dropdown > .btn').click();
    cy.findByText('Dynamic content blocks').click().wait(100);
    cy.get('[class="slat-content"]').first()
    //cy.get('[class="slat-action"]').click()
    cy.get('[class="btn btn-default dropdown-toggle"]').click()
    cy.findByText('Delete').click()
    cy.findByText('Delete this Dynamic Content Block').click();
});});