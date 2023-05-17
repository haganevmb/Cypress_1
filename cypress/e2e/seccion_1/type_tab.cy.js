///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
//it.only es para que solo ejecute uno de los procesos.

require('cypress-plugin-tab')

describe("Ejemplo función tab", () => {

    it("Type con un tab", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(2000)

        cy.get("#wsf-1-field-21").type("Victor").tab().
        type("Mora").tab().
        type("abcdefghi@gmail.com")

        
    
    })
    
    })// Cierre de describre.