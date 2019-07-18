describe ('Action Test', ()=> {
    before(function(){
        //runs once before all test in the block
    })

    after(function(){
        // runs once after all test in the block
    })

    beforeEach(function(){
        // runs before each tests in the block
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    afterEach(function(){
        // run after each test in block
    })
    it('submit developer name', function(){
        // cy.get('#developer-name').type('Name')
        // cy.get('#submit-button').scrollIntoView()
        // cy.get('#submit-button').click()
        cy.submitDeveloper('Test')
        cy.get('.result-content').should('be.visible')
        //cy.url().contains('include', 'Thank you')
        cy.url().should('include', 'thank-you') //When working with the title or the URL then 
                                               //we have to use this SHOULD function instead of contains function.

    })
    it('should enable slider', function() {
        cy.get('#slider').as('Slider')
        cy.get('@Slider').should('have.class', 'ui-state-disabled')
        cy.get('#tried-test-cafe').click()
        cy.get('@Slider').should('not.have.class', 'ui-state-disabled')
    })
    it('should have empty value by default', function() {
        cy.get('#comments').as('Textarea')
        cy.get('#tried-test-cafe').click()
        cy.get('@Textarea').should('have.value','')
        cy.get('@Textarea').type('new value')
        cy.get('Textarea').should('have.value', 'new value')
    })
})
