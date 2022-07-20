import signup from '../pages/signup'
import signupdata from '../factories/signupdata'

describe('CAC-TAT', function () {
  it('Home verify and fillform', function () {
    var user = signupdata.user()

    signup.homepage()
    signup.fillform(user)
    signup.submit()
    signup.checksuccess('Mensagem enviada com sucesso.')

  })

  it('Required Fields', function () {

    signup.homepage()
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')

  });

  it.only('check and uncheck checkbox', function () {
    signup.homepage()

    cy.get('#check input[type=checkbox]').check('phone');
    cy.get('#check input[type=checkbox]').uncheck('phone');

  });


})