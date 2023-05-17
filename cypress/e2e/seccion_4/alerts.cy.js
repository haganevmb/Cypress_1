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

describe("Alertas en cypress", () => {

    it("Alerta uno", () =>{
        cy.viewport(1500, 900)
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.title().should('eq','Alerts')
        cy.get("#OKTab > .btn").click()
        cy.on("window:alert", (str)=>{
          expect(str).to.equal("I am an alert box!")
          return true
        })
        
    
    })
    
    })// Cierre de describre.