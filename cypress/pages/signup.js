class signup{

    homepage(){

        cy.visit('/index.html');
        cy.get('#subtitle').should('have.text','Forneça o máximo de informações, por favor.');

    }

}

export default new signup