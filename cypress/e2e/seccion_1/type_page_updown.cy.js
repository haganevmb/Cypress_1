///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.

describe("Ejemplo type pageUp, pageDown ", () => {

    it("Type pageDown ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type("{pagedown}")
        cy.wait(2000)
 
    })

    it("Type pageUP ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type("{pageup}")
        cy.wait(2000)
 
    })
    
    })// Cierre de describre.