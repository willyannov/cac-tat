import signup from '../pages/signup'
import signupdata from '../factories/signupdata'



describe('CAC-TAT', function () {
  it('Home verify and Fillform', function () {
    var user = signupdata.user()

    signup.homepage()
    signup.fillform(user)
    signup.submit()
    signup.checksuccess('Mensagem enviada com sucesso.')

  })

  it('Invalid Email', function () {
    var user = signupdata.user()

    user.email = 'willyan.com.com'

    signup.homepage()
    signup.fillform(user)
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')

  });

  it('Check if the phone number is empty ', function () {
    var user = signupdata.user()

    user.phonenumber = 'aaaaaa'
    signup.homepage()
    cy.get('#phone').type(user.phonenumber).should('have.value', '');


  });

  it('Phone Number is required', function () {
    var user = signupdata.user()

    user.phonenumber = 'a' // foi dado como 'a' para que não colocasse nada em Telefone

    signup.homepage()
    signup.fillform(user)
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')

  });


  it('Required Fields', function () {

    signup.homepage()
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')

  });

  it('Check and Uncheck checkbox', function () {

    signup.homepage()
    cy.get('#check input[type=checkbox]').check('phone').should('be.checked'); // marcando input do tipo checkbox
    cy.get('#check input[type=checkbox]').uncheck('phone');

  });

  it('Open new link in browser', function () {
    signup.homepage()
    cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target').click()
    cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade');


  });

  it('Verify Privacy page', function () {
    signup.privacypage()

  });

  it('Clock Addition in signup.js', function () {
    signup.homepage()
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')



  });

  it('Show and hide messages', function () {
    signup.homepage()
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible');
  });


  it('Fill TextArea using invoke', function () {
    const longText = Cypress._.repeat('0123123123', 20)

    signup.homepage()

    cy.get('.field #open-text-area')
      .invoke('val', longText)
      .should('have.value', longText)
  });

  it('Make a request HTTP', function () {
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should(function (response) {
        const { status, statusText, body } = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')

      })


  });

  it.only('Find Cat', function()  {
    signup.homepage()
    cy.get('#cat')
      .invoke('show')
      .should('have.text', '🐈');
      
    
    
  });






  Cypress._.times(5, function () { //documentação do lodash https://docs.cypress.io/api/utilities/_#Syntax

    it('Test Lodash Functions', function () {
      const longText = Cypress._.repeat('0123123123', 20)

      signup.homepage();
      cy.get('.field #open-text-area').type(longText).should('have.value', longText)
      signup.submit();

    });






  });





})