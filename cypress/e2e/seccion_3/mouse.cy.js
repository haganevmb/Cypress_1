///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

import 'cypress-file-upload'
require("@4tw/cypress-drag-drop")
require('cypress-xpath')

describe("Eventos del mouse", () => {

    it("Evento drag and drop", () =>{
        cy.viewport(1500, 900)
        let tiempo=1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')
        cy.wait(tiempo)
        cy.get("#column-a").drag("#column-b",{force:true})
        
    
    })

    it("Evento drag and drop", () =>{
      cy.viewport(1500, 900)
      let tiempo=1000
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
      cy.title().should('eq','Demo 2: Drag and drop')
      cy.wait(tiempo)
      cy.get("#box6").drag("#box106",{force:true})
      cy.wait(tiempo)
      cy.get("#box7").drag("#box107",{force:true})
      
  
  })

  it("Evento mouseover", () =>{
    cy.viewport(1500, 900)
    let tiempo=1000
    cy.visit("https://www.way2automation.com/")
    cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')

    cy.contains("Resources").trigger("mouseover")
    cy.wait(tiempo)
    cy.contains("Blog").invoke("removeAttr","target").click({force:true})
    

})

it.only("Evento slider", () =>{
  cy.viewport(1500, 900)
  let tiempo=1000
  cy.visit("https://www.globalsqa.com/demo-site/sliders/")
  cy.title().should('eq','Slider Online Testing Dummy Site | Demo Site- GlobalSQA')
  cy.wait(tiempo)
  cy.get("#Steps").click().then(()=>{
    cy.get(".resp-tab-content-active > p > .demo-frame").invoke("attr","left","70%")

  })
  

})
    
    })// Cierre de describre.