describe('Creating campaign variants', () => {
    const listDropDownButtons = [
        'Select a project',
        'Enter your campaign name',
        'Control Subject Line',
        'Expected audience size',
        'Average Open Rate'
     ];
    before(() =>{
        cy.visit(Cypress.env('url'))
        });
        
    it('logs in to phrasee with valid user credentials', () =>{
       cy.login()
       cy.clickModule('Create new campaign').wait(1000)
       //cy.get('[id="main-nav"]').findByText('[data-cy="create-campaign-mi"]').click().wait(100)
       cy.selectCampaignType('Email').click(100)       
       //cy.get('[class="display-flex display-flex--no-wrap"]').find('[data-cy="email"]').click(100)
       //cy.selectVariantKey()
       //cy.contains('External').click()
       cy.get('[data-cy="campaign-setup-select-project"]').dblclick()
       cy.contains('External').click()
      
      cy.get('[data-test="campaign_name"]').dblclick().type('test'+Date.now()).focused().click()
      
      cy.get('[data-test="own_subject_line"]').dblclick().type('humanline'+Date.now()).focused().click()
      cy.get('[data-test="list_size"]').dblclick().type('500000').focused().click()
      
      cy.get('[data-test="baseline_open_rate"]').dblclick().type('50%').focused().click().wait(500)
      cy.contains('Next').click().wait(500)
      cy.get('[class="ant-calendar-picker ant-calendar-picker-small"]').click()
      //cy.get('input.ant-calendar-input').click().type('2021-04-15')
      //cy.get('[class="ant-calendar-next-month-btn"]').click()
      cy.get('[class="ant-calendar-month-select"]').click()
      cy.get('[class="ant-calendar-month-panel"]').findByText('Apr').click()
      cy.get('[class="ant-calendar-year-select"]').click()
      cy.get('[class="ant-calendar-year-panel"]').findByText('2022').click()
      cy.get('[title="April 2, 2022"]').click()
      cy.get('[class="ant-select ant-select-enabled"]').eq(0).click().type('Discount off Product')
      cy.get('[data-cy="Discount off Product"]').click()
      cy.get('[data-cy=text_short]').click().type('jackets').focused().click()
      cy.get('[data-cy="text_percentage"]').click().type('10').focused().click()
      cy.contains('Yes').click()
      //cy.contains('Discount')
      cy.contains('Magic button').click()

    })
  


    })