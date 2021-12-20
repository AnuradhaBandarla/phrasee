describe('Creating campaign variants', () => {
    const calendar = ('[class="ant-calendar-picker ant-calendar-picker-small"]');
    const sendOnDate = ('01 Apr 2022');

    before(() =>{
        cy.login()
        });
        
    it('logs in to phrasee with valid user credentials', () =>{
       //cy.login()
       
      cy.clickModule('Create new campaign').then(()=>{
     
      cy.selectCampaignType('Email').click()   
      })

      cy.selectAproject()
      
      cy.enterCampaignName()
      
      cy.enterYourControl()
      
      cy.expectedAudienceSize()
      
      cy.enterAvgOpenRate().then(()=>{
          cy.clickNext()
      })
     
      
      cy.get(calendar).click().then(()=>{
        cy.get('.ant-calendar-input').type(sendOnDate + '{enter}')
      })
      //cy.get('input.ant-calendar-input').click().type('2021-04-15')
      //cy.get('[class="ant-calendar-next-month-btn"]').click()
     
      cy.get('[class="ant-select ant-select-enabled"]').eq(0).click().type('Discount off Product')
      cy.get('[data-cy="Discount off Product"]').click()
      cy.get('[data-cy=text_short]').click().type('jackets').focused().click()
      cy.get('[data-cy="text_percentage"]').click().type('10').focused().click()
      cy.contains('Yes').click()
      //cy.contains('Discount')
      cy.contains('Magic button').click()

    })
  


    })