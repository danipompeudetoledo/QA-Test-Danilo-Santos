it('Web app should be online', () => {
    cy.visit('/')

    cy.title()
        .should('eq', 'Automation Practice Site')
    
});