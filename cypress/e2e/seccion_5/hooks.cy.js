///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Hooks', () => {
    before(() => {
        cy.log("#####PRINCIPIO DE LOS TEST#####")
      // Esto inicia antes de todo una sola vez
    })
  
    beforeEach(() => {
        cy.log("Esto se inicia al principio de todos los test")
      // Esto se inica antes en cada uno de los test MUY IMPORTANTE
    })
  
    afterEach(() => {
        cy.log("Esto se inicia al final de todos los test")
      // Esto se inicia al final de cada uno de los test
    })
  
    after(() => {
        cy.log("#####FINAL DE LOS TEST#####")
      // Esto se inicia al final de todo el proceso
    })

    it("test uno",()=>{
        cy.log("Primer test")
    })
    
    it("test dos",()=>{
        cy.log("Segundo test")
    })
  
})