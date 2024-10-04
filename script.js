//your JS code here. If required.
() => {
    const tags = ['img', 'h6', 'p'];
    tags.forEach(tag => {
        cy.get('.card ' + tag).should('have.length', 6);
    });
}
