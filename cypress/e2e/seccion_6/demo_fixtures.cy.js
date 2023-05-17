///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Pruebas carga fixtures', () => {

    let t=1000

    before(function(){
        cy.fixture('datos').then(function(data){
            globalThis.data=data
        })
    })

    it('Cargando desde json', () =>{
        cy.viewport(1500, 900)
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(t)
        cy.get("#userName").should("be.visible").type(data.nombre)
        cy.get("#userEmail").should("be.visible").type(data.email)
        cy.get("#currentAddress").should("be.visible").type(data.dir1)
        cy.get("#permanentAddress").should("be.visible").type(data.dir2)
        cy.get("#submit").should("be.visible").click({force:true})

    })

})