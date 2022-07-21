import 'cypress-file-upload'


class signup {

    homepage() {

        cy.visit('/index.html');
        cy.get('#subtitle').should('have.text', 'Forneça o máximo de informações, por favor.');

    }

    fillform(user) {
        cy.get('.group input[name=firstName]').type(user.name);
        cy.get('.group input[name=lastName]').type(user.lastname);
        cy.get('.field input[name=phone]').type(user.phonenumber);
        cy.get('.group .field input[name$=email]').type(user.email);
        cy.get('#support-type input[type=radio]').check('elogio');
        cy.get('.field #product').select(user.product);
        cy.get('#check input[type=checkbox]').check('phone');
        cy.get('.field #open-text-area').type(user.message, { delay: 0 }); //delay: 0 é usado para diminuir o tempo de digitação do cypress em caso de textos longos
        cy.get('input[type^=file]').attachFile('/images/' + user.image);

    }

    privacypage() {
        cy.visit('/privacy.html');
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade');


    }

    submit() {
        cy.get('div button[type=submit]').click();

    }

    checksuccess(expectatemessage) {
        cy.clock()
        cy.contains('.success', expectatemessage).should('be.visible')
        cy.tick(3000)
        cy.contains('.success', expectatemessage).should('not.be.visible')
    }

    checkfailed(expectatemessage) {
        cy.clock()
        cy.contains('.error', expectatemessage).should('be.visible')
        cy.tick(3000)
        cy.contains('.error', expectatemessage).should('not.be.visible')
    }



}

export default new signup