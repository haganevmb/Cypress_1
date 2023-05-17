///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  require('cypress-xpath')
  require('cypress-plugin-tab')
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Segundo reto", () => {

    it(" ", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1000)

        //buscando...
        cy.xpath("//*[@id='searchbox']").should("be.visible").type("ACER")
        cy.wait(1000)
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
        cy.get("#add").should("be.visible").click()
        cy.wait(1000)

        //añadir...
        cy.get("#name").should("be.visible").type("ASUS PEPITO")
        cy.wait(1000)
        cy.get("#introduced").should("be.visible").type("2021-04-01").tab().type("2023-04-12")

        //combo...
        cy.get("#company").should("be.visible").select("ASUS").should("have.value","36")
        cy.wait(1000)
        cy.get(".primary").should("be.visible").click()
        cy.wait(1000)

        //buscar el elemento creado...
        cy.get("#searchbox").should("be.visible").type("ASUS")
        cy.wait(1000)
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)

        
    
    })
    
    })// Cierre de describre.