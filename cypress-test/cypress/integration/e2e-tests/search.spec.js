describe ('Searchbox Test', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })


    it('submit develshould seacrh value via searchbox', function(){
        cy.get('#searchTerm').as("Searchbox")
        cy.get('@Searchbox').type('bank{enter}')
        cy.url().should('include', 'search.html?searchTerm=bank')

    })

    it('should dispaly search result page', function(){

        cy.get('h2').as("Title")
        cy.get('@Title').contains('Search Result')

})

it('should display home page again', function() {
    cy.go("back")
    cy.url().should('include', 'index.html')
})

})