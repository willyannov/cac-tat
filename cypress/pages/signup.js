class signup {

    homepage() {

        cy.visit('/index.html');
        cy.get('#subtitle').should('have.text', 'Forneça o máximo de informações, por favor.');

    }

    fillform(user) {
        cy.get('.group input[name=firstName]').type(user.name);
        cy.get('.group input[name=lastName]').type(user.lastname);
        cy.get('.group .field input[name$=email]').type(user.email);
        cy.get('#support-type input[type=radio]').check('elogio');
        cy.get('.field #product').select(user.product);
        cy.get('#check input[type=checkbox]').check('email');
        cy.get('.field #open-text-area').type(user.message);
        cy.get('input[type=file]').attachFile('/images/' + user.image);




    }

    submit() {

        cy.get('div button[type=submit]').click();

    }

    checksuccess(expectatemessage) {
        cy.contains('.success', expectatemessage).should('be.visible')

    }

}

export default new signup