///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  require('cypress-xpath')
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Tipos de selectores ", () => {

    it("Selector por id ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Pepe")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").type("demo@hotmail.com")
        cy.wait(1000)
        
    
    })

    it("Selector por atributo ", () =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should("eq","DEMOQA")
      cy.wait(1000)

     cy.get("[placeholder='Full Name']").should("be.visible").type("Alberto")
      
  
  })

  it("Selector por xpath ", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should("eq","DEMOQA")
    cy.wait(1000)

  cy.xpath("//*[@id='userName']").should("be.visible").type("Antonio")
  cy.wait(1000)
  cy.xpath("//*[@id='userEmail']").should("be.visible").type("demoantonio@gmail.com")
  cy.wait(1000)

})

it("Selector por contains", () =>{
  cy.visit("https://demoqa.com/automation-practice-form")
  cy.title().should("eq","DEMOQA")
  cy.wait(1000)

  cy.get(".custom-control-label").contains("Female").click()
  cy.wait(1000)
  cy.get(".custom-control-label").contains("Sports").click()

})

it.only("Selector por copyselector", () =>{
  cy.visit("https://demoqa.com/automation-practice-form")
  cy.title().should("eq","DEMOQA")
  cy.wait(1000)

cy.get("#userNumber").should("be.visible").type("666888444")

})


    
    })// Cierre de describre.