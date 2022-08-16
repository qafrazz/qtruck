describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Francisco',
      instagram: '@f.frazzon',
      password: 'pwd123'
    }
    cy.loginVisit()
    cy.login(user)
    cy.loginButton()
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@f.frazzon',
      password: '123456'
    }
    cy.loginVisit()
    cy.login(user)
    cy.loginButton()
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@ffrazzon.f',
      password: 'pwd123'
    }
    cy.loginVisit()
    cy.login(user)
    cy.loginButton()
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram é obrigatório', () => {
    const user = {
      password: 'pwd123'
    }
    cy.loginVisit()
    cy.loginRequired(user)
    cy.loginButton()
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha é obrigatória', () => {
    const user = {
      instagram: '@f.frazzon',
    }
    cy.loginVisit()
    cy.passwordRequired(user)
    cy.loginButton()
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', () => {
    cy.loginVisit()
    cy.loginButton()
    cy.modalHaveText('Por favor, informe suas credenciais!')
  })

})
