///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
//it.only es para que solo ejecute uno de los procesos.


describe("Introducción a los asserts ", () => {

    it("Demo de los asserts", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get("#wsf-1-field-21").should("be.visible").type("Juan")
        cy.get("#wsf-1-field-22").should("be.visible").type("Moreno")
        cy.get("#wsf-1-field-23").should("be.visible").should("be.enabled").type("juanmoreno@gmail.com")
        
    
    })
    
    })// Cierre de describre.