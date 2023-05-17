///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.
require('cypress-plugin-tab')
describe("Primer reto", () => {

    it(" ", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","DEMOQA")
        cy.wait
        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(2000)
        cy.get("#searchBox").should("be.visible").clear()

        //agregando un valor.
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(2000)
        cy.get("#firstName").should("be.visible").type("Juan").tab().
        type("Perez").tab().
        type("juanperez@gmail.com").tab().
        type("57").tab().
        type("3000").tab().
        type("informatica")
        cy.wait(2000)
        cy.get("#submit").should("be.visible").click()
        cy.wait(2000)
        cy.get("#searchBox").should("be.visible").type("Juan")
        cy.wait(2000)
        cy.get("#searchBox").should("be.visible").clear()
        cy.wait(2000)

        //Editar un campo
        cy.get("#edit-record-1").should("be.visible").click()
        cy.wait(2000)
        cy.get("#age").should("be.visible").clear().type("35")
        cy.get("#salary").should("be.visible").clear().type("9000")
        cy.get("#submit").should("be.visible").click()
        cy.wait(2000)
        cy.get("#delete-record-3").should("be.visible").click()


    
    })
    
    })// Cierre de describre.