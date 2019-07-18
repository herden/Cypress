describe ('Navbar Test', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('should display online banking content', function(){
        cy.get('#onlineBankingMenu').as("Link_OnlineBanking")
        cy.get('@Link_OnlineBanking').click()
        //cy.get('h1').as("Title")
        cy.xpath('//h1').as('Title')
        cy.get('@Title').contains('Online Banking')
        cy.get('#online_banking_features').should('be.visible')

    })

    it('should display feedback content', function(){
        cy.get('#feedback').as("Link_Feedback")
        cy.get('@Link_Feedback').click()
        cy.get('h3').as("feedback-title")
        cy.get('@feedback-title').should('be.visible')

    })

    it('should navigate to homepage via logo', function(){
        cy.get('.brand').contains("Forgotten Password")
        cy.url().should('include', 'forgotten-password-send.html')
               
    })

})