describe ('Login Test', ()=> {
    before(function(){
        cy.visit('***************************')
        
    })
    // it('should display login form', function(){
    //     cy.get('h1').as("logo-title")
    //     cy.get('@logo-title').should('be.visible')
    // })

    it('Login to app', function(){
            cy.get('input[name="username"]')
              .type('*************')
     
            cy.get('input[name="password"]')
              .type('************')
          
            cy.get('input[type="submit"]')
              .click()
          
            cy.get('a.pxh-navigation__link[title=\'**************QA\']')
              .click()
          
            cy.get('input[type=\'search\']')
              .type('*****************{enter}')
          
            // cy.wait(5000)
          
            // cy.get('div.highcharts-container')
            //   .scrollIntoView()
          
             cy.wait(5000)
          
            // cy.matchImageSnapshot('graph')
    })

    it('should display login form', function(){

        cy.get('.highcharts-root').scrollIntoView()

        cy.get('.highcharts-root').should('be.visible')

    })
    
    
    it('should make page snap shot', function() {

        cy.get('.highcharts-root').matchImageSnapshot();
        
    })
})