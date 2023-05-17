///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Reto de los hooks', () => {

    let t=1000
    
    beforeEach(()=>{
        cy.viewport(1500, 900)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(t)
    })

    it('Primer test', () =>{
        cy.get("[placeholder='Username']").should("be.visible").type("Admin")
        cy.get("[placeholder='Password']").should("be.visible").type("admin123")
        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(t)
        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.wait(t)


    })

    it('Segundo test', () =>{
        cy.get("[placeholder='Username']").should("be.visible").type("Admin")
        cy.get("[placeholder='Password']").should("be.visible").type("admin123")
        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(t)
        cy.get(":nth-child(5) > .oxd-main-menu-item").should("be.visible").click()
        cy.get(".oxd-userdropdown-tab").should("be.visible").click()
        cy.get(":nth-child(4) > .oxd-userdropdown-link").should("be.visible").click()


    })

})