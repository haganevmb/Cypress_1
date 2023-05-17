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

describe("Manejo de los alias", () => {

    it("alias uno", () =>{
        cy.viewport(1500, 900)
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        
        cy.get("#wsf-1-field-21").should("be.visible").as("nombre")
        cy.get("@nombre").type("Pepito")

        cy.get("#wsf-1-field-22").should("be.visible").as("apellido")
        cy.get("@apellido").type("Mendez")

        cy.get("#wsf-1-field-23").should("be.visible").as("email")
        cy.get("@email").type("pepitomendez@email.com")
    
    })
    
    })// Cierre de describre.