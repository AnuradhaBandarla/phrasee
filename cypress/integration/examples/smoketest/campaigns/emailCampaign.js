describe('Email Campaign', function () {
    beforeEach(function () {

        cy.login();
    });

    it('schedules an email Campaign ', ()=> {
        cy.findByText('Campaigns').click().wait(1000);
             cy.get("body").then($body => {
            
                if ($body.find('[class="btn btn-success new-email-empty-state-btn ng-binding ng-scope"]').length > 0) {
                 cy.get('[class="btn btn-success new-email-empty-state-btn ng-binding ng-scope"]')
                 .click();}   
            
               else  
                 cy.findByText('New email campaign').click();
                                    
     })
     cy.scheduleAnEmailCampaign()  
    })
})

