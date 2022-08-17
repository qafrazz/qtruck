import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Francisco',
      instagram: '@f.frazzon',
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@f.frazzon',
      password: '123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal
      .haveText('Credenciais inválidas, tente novamente!')

  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@ffrazzon.f',
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal
      .haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram é obrigatório', () => {
    const user = {
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal
      .haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha é obrigatória', () => {
    const user = {
      instagram: '@f.frazzon',
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal
      .haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', () => {

    loginPage.go()
    loginPage.submit()
    loginPage.modal
      .haveText('Por favor, informe suas credenciais!')
  })

})
