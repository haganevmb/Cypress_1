///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe("manejo del invoke", () => {

    it("invoke text", () =>{
        cy.viewport(1500, 900)
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        
        cy.get("h2").invoke("text").as("info")
        cy.get("@info").should("contain","Datos Personales Básicos")
        cy.wait(1000)

        cy.get("#wsf-1-label-21").invoke("text").as("name")
        cy.get("@name").should("contain","Nombre:").then(()=>{
          cy.get("#wsf-1-field-21").type("Manolito")
          cy.wait(1000)
        })
        
    
    })

    it("invoke estilos", () =>{
      cy.viewport(1500, 900)
      cy.visit("https://testingqarvn.com.es/datos-personales/")
      cy.title().should('eq','Datos Personales | TestingQaRvn')
      cy.wait(1000)
      
      cy.get("#wsf-1-label-21").invoke("attr","style","color:red; font-size: 50px")
  
  })

  it("invoke ocultar y mostrar elementos", () =>{
    cy.viewport(1500, 900)
    cy.visit("https://testingqarvn.com.es/datos-personales/")
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(1000)
    
    cy.get("#wsf-1-label-21").invoke("hide")
    cy.wait(1500)
    cy.get("#wsf-1-label-21").invoke("show")

})

it.only("invoke src", () =>{
  cy.viewport(1500, 900)
  cy.visit("https://testingqarvn.com.es/datos-personales/")
  cy.title().should('eq','Datos Personales | TestingQaRvn')
  cy.wait(1000)
  
  cy.get(".wp-image-230").invoke("attr","src",).should("include","http://testingqarvn.com.es/wp-content/uploads/2022/01/Formularios.jpg")
  

})
    
    })// Cierre de describre.

  