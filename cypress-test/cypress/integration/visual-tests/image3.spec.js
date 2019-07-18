describe ('Navbar Test', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('should display login form', function(){

        cy.get('#signin_button').should('be.visible')

    })
       
    it('should make page snap shot', function() {

        cy.get('#signin_button').matchImageSnapshot();
        
    })

})