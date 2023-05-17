///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Nueva sección checkbox ", () => {

    it("check uno ", () =>{
        cy.visit("https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html")
        cy.title().should('eq','checkbox - states test')
        cy.wait(500)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(500)
        cy.get("[type='checkbox']").uncheck().should("not.checked")
        
    
    })

    it("check por selección ", () =>{
      cy.visit("https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html")
      cy.title().should('eq','checkbox - states test')
      cy.wait(500)

      cy.get("body > :nth-child(3)").should("be.visible").check().should("be.checked")
      cy.wait(1000)
      cy.get("[checked='']").should("be.visible").uncheck().should("not.checked")
      cy.wait(1000)
      cy.get("#in").should("be.visible").click()
  
  })

  it.only("radio buttons", () =>{
    cy.visit("https://testingqarvn.com.es/radio-buttons/")
    cy.title().should('eq','Radio Buttons | TestingQaRvn')
    cy.wait(500)
    cy.get("#wsf-1-label-44-row-1").click()
    cy.wait(1000)
    cy.get("#wsf-1-label-44-row-2").click()
    cy.wait(1000)
    cy.get("#wsf-1-label-44-row-3").click()


})
    
    })// Cierre de describre.