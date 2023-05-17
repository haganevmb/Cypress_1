///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('hooks ejemplos', () => {
    
    beforeEach(()=>{
        cy.viewport(1500, 900)
        let t=1000
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.wait(t)
    })
    
    it('Test uno', () =>{
           cy.get("#wsf-1-label-36-row-2").should("be.visible").click()
    })

    it('Test dos', () =>{
        cy.get("#wsf-1-field-29").should("be.visible").type("Pepito Perez")
 })
})