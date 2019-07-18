describe ('Vision Test', ()=> {
    before(function(){
        cy.visit('/')
    })

    
    it('it should load homepage page', function(){
        
        cy.url().should("include", 'example.com/')

    })
    it('should make page snap shot', function() {

        cy.matchImageSnapshot()
        
    })
    
})
