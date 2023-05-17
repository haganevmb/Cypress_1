///<reference types="cypress"/>

//La función anterior es para que funcionen los comandos.

describe("Sección 1: Validando el titulo ", () => {

    it("Test validar el título ", () =>{
        cy.visit("https://testingqarvn.com.es/")
        cy.title().should("eq","TestingQaRvn | Mundo del Testing")

        cy.log("La función title funcionó correctamente")
        
    
    })
    
    })// Cierre de describre.