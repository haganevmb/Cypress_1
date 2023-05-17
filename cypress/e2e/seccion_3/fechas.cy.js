///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

import 'cypress-file-upload'

describe("Ejemplos fechas", () => {

    it("Fechas", () =>{
        cy.viewport(1500, 900)
        cy.visit("https://demos.telerik.com/kendo-ui/datepicker/index")
        cy.title().should('eq','Demo of core features in jQuery DatePicker widget | Kendo UI for jQuery')
        cy.get("#onetrust-accept-btn-handler").should("be.visible").click()
        cy.get("#datepicker").should("be.visible").clear().type("09/09/2023","{enter}")
        cy.wait(1000)
        cy.get("#datepicker").should("be.visible").clear()
        cy.wait(1000)
        cy.get(":nth-child(2) > .k-input-button").click().then(()=>{
          cy.get(".k-calendar-tbody").invoke("attr","data-value","2023/4/26").click({force:true})
        })
        
    
    })
    
    })// Cierre de describre.