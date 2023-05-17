///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('', () => {

    let t=1000

    beforeEach(()=>{
        cy.viewport(1500, 900)
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(t)
    })

    //Para añadir comandos personalizados hay que ir al archivo commands.js
    it('Test uno', () =>{
        cy.datos_usuario("Victor","Mora Barea","vmb@email.com","123456789","calle inventada numero 7")
        cy.wait(t)

    })

})