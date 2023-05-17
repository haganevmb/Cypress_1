///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.
//it.only es para que solo ejecute uno de los procesos.

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe(" ", () => {

    it(" ", () =>{
        cy.viewport(1500, 900)
        cy.visit(" ")
        
    
    })
    
    })// Cierre de describre.