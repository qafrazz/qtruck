
import mapPage from "../support/pages/Map";


describe('Recomendação', () => {
  it('deve recomendar um food truck', () => {
    const user = {
     
      name: 'Benson',
      instagram: '@benson',
      password: 'pwd123'
    }

    const foodtruck = {
      latitude: '-21.174857820508862',
      longitude: '-47.787297964096076',
      name: 'Tienda del Chavo',
      description: 'Melhor lugar para tomar o suco de limão que parece de tamarindo.',
      opening_hours: 'das 14h as 20h'
    }

    cy.apiCreateUser(user)
    cy.uiLogin(user)
    mapPage.createLink()
    cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)

    cy.wait(30000)
  });
})