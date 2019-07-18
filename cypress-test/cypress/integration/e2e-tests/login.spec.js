describe ('Login Test', ()=> {
    before(function(){
        cy.visit('/')
        cy.url().should("include", 'example.com/')
    })

    it('should display login form', function(){
        cy.get('#signin_button').click()
        //cy.contains('Signin').click()
        cy.get('#login_form').should('be.visible')
    })

    it('Login to app', function(){
        // cy.get('#user_login').type('Name')
        // cy.get('#user_password').type('Password')
        // cy.contains('Sign in').click()
        cy.loginToApp('Name', 'Password')
    })

    it('should display error message', function(){
        
        cy.get('.alert-error').as('Error_Message')
        cy.get('@Error_Message').should('be.visible')
             
    })



})