import signup from '../pages/signup'
import signupdata from '../factories/signupdata'

describe('CAC-TAT', function()  {
  it('Home verify and fillform', function()  {
    var user = signupdata.user()

    signup.homepage()
    signup.fillform(user)
    signup.submit()
    signup.checksuccess('Mensagem enviada com sucesso.')

  })

  it.only('Required Fields', function() {
    var user = signupdata.user()
    
    signup.homepage()
    signup.submit()
    signup.checkfailed('Valide os campos obrigatórios!')
    
  });

  
})