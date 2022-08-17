import signupPage from '../support/pages/Signup'

describe('Signup', () => {

  it('deve cadastrar um novo usuario', () => {
    const user = {
      name: 'Becca Milano',
      instagram: '@becca_milano',
      password: 'pwd123'
    }

    cy.deleteMany({ instagram: user.instagram }, { collection: 'users'}).then(res => {
      cy.log(res);
    });

    signupPage.go()
    signupPage.form(user)
    signupPage.submit()

    signupPage.modal
      .haveText('Agora você pode recomendar e/ou avaliar Food trucks.')

  });

});