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


})