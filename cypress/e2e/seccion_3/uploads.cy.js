///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.
import 'cypress-file-upload'

describe("upload images", () => {

    it("Cargando imagenes", () =>{
        cy.viewport(1500, 900)
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        const ruta="sacarosa.png"
        cy.get('[type="file"]').should("be.visible").attachFile(ruta)
        cy.wait(2000)

        
    
    })
    
    })// Cierre de describre.