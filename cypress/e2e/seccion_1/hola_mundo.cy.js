///<reference types="cypress"/>

describe("Bienvenido al curso de Cypress sección 1", () => {

it("Mi primer test -> Hola mundo", () =>{
    cy.log("hola mundo")
    cy.wait(2000)

})

it("Segundo test -> campo name", () =>{
    cy.visit("https://testingqarvn.com.es/datos-personales/")
    cy.get("#wsf-1-field-21").type("Victor")
    cy.wait(2000)
    cy.get("#wsf-1-field-22").type("Mora")
    cy.wait(2000)
    cy.get("#wsf-1-field-23").type("abcdefghi@gmail.com")
    cy.wait(2000)
    cy.get("#wsf-1-field-24").type("123456789")
    cy.wait(2000)
    cy.get("#wsf-1-field-28").type("hola hola hola caracola")
    cy.wait(2000)
    cy.get("#wsf-1-field-27").click()
    cy.wait(2000)


})

})// Cierre de describre.