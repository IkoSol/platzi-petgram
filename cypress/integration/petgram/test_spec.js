/* global describe, it, cy */

describe('Petgram', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/')
  })
  it('navegamos a una categoria y vemos foto', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('navegar con la nav bar a la home', function () {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
