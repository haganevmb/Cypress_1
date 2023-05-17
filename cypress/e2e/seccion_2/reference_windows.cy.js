///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Referencias a windows", () => {

    it("propiedad de windows charset", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1000)

        cy.document().should("have.property","charset").and('eq',"UTF-8")
        
    
    })

    it.only("windows url", () =>{
      cy.viewport(1500, 900)
      cy.visit("https://testsheepnz.github.io/random-number.html")
      cy.title().should('eq','The Number Game')
      cy.wait(1000)
      cy.url().should("include","random-number")
      cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
      
  
  })
    
    })// Cierre de describre.