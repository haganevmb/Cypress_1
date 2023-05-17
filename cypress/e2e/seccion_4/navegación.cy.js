///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Navegación entre las páginas', () => {
    
    it('Back, forward, reload', () =>{
            cy.viewport(1500, 900)
            let t=1000
            cy.visit('https://demoqa.com/')
            cy.title().should('eq','DEMOQA')
            cy.wait(t)

            cy.get(".category-cards > :nth-child(1)").should("be.visible").click({force:true})
            cy.wait(t)

            cy.go("back")
            cy.wait(t)

            cy.go("forward")
            cy.wait(t)

            cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click({force:true})
            cy.wait(t)
            cy.get("#userName").should("be.visible").type("Pepito")
            cy.get("#userEmail").should("be.visible").type("Pepito@gmail.com")
            cy.wait(t)
            cy.reload()

        })
})