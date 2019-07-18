describe('Assertions', ()=> {
    it('some examples', function(){

        //retry until we find 3 matching selected lists
        cy.get('li.selected').should('have.length', 5)

        //retry until input does not have class dissabled
        cy.get('form').find('input').should('not.have.class', 'disabled')

        //retry until fix area hax fix value
        cy.get('textarea').should('have.value', 'Placeholder..')

        //retry until span does not hase click me
        cy.get('a').parent('span').should('not.contain', 'click me')

        //retry until button is visible
        cy.get('button').should('be.visible')

        //retry until spinner exist
        cy.get('#spinner').should('not.exist')
        
    })

})