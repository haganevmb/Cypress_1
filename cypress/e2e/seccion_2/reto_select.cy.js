///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  require('cypress-xpath')
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

describe("Reto de los select ", () => {

    it("funcion select ", () =>{
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")
        cy.title().should('eq','jQuery Dual List Box Demo')
        cy.wait(1000)
        cy.get(".atr").should("be.visible").click()
        cy.wait(1000)
        cy.get(".atl").should("be.visible").click()
        cy.wait(1000)

        cy.get(".unselected").should("be.visible").select(['Abigail Barber','Adele Pratt','Adrian Burton','Alberta Blevins']).then(()=>{
          cy.get(".str").click()
        })

        cy.wait(1000)
        cy.get(":nth-child(3) > .filter").should("be.visible").type("Adrian")
        cy.wait(1000)
        cy.get(".atl").click()
        cy.wait(1000)
        cy.get(":nth-child(1) > .filter").should("be.visible").type("Adrian")
   
   
      })



    
    })// Cierre de describre.