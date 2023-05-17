///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  require('cypress-xpath')
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Nueva sección select ", () => {

    it("funcion select ", () =>{
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq','ComboBox | TestingQaRvn')
        cy.wait(500)
        
        cy.get("#wsf-1-field-53").should("be.visible").select("Mac").should("have.value","Mac")
        cy.wait(1000)
        cy.get("#wsf-1-field-53").should("be.visible").select("Linux").should("have.value","Linux")
    
    })

    it("funcion select autocompletado", () =>{
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
      cy.wait(500)
      cy.get("#L2AGLb > .QS5gu").click()
      cy.get(".SDkEP").should("be.visible").type("Ferrari")
      cy.wait(500)
      cy.get("#c7mM1c > .wM6W7d > span").click()
      
      
  
  })

  it.only("funcion select then", () =>{
    cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
    cy.title().should('eq','ComboBox Dependiente | TestingQaRvn')
    cy.wait(1000)
    cy.get("#wsf-1-field-61").select("Linux").then(()=>{
      cy.get("#wsf-1-field-64").select("Debian")
      cy.wait(500)
      cy.get("#wsf-1-field-62").should("be.visible").click()
  })
    
    
    

})



    
    })// Cierre de describre.