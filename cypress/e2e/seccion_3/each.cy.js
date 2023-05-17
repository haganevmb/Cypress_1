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

describe("Bucles for y each", () => {

    it("For uno", () =>{
        
      for(let x=1; x<=100; x++){
        cy.log("El número es: " + x)
      }
    
    })

    it("For dos", () =>{
        
      for(let x=1; x<=10; x++){
        let y=5
        cy.log(y + " x " + x +" = " +y*x)
      }
    
    })

    it("Each uno", () =>{
      cy.viewport(1500,900)
      cy.visit("https://demowebshop.tricentis.com/books")
      cy.title("eq","Demo Web Shop. Books")
      cy.wait(1000)
      cy.get(".product-title").each(($el,index,$list)=>{
        cy.log($el.text())
      })

        
    
    })

    it("Each dos", () =>{
      cy.viewport(1500,900)
      cy.visit("https://demowebshop.tricentis.com/books")
      cy.title("eq","Demo Web Shop. Books")
      cy.wait(1000)
      cy.get(".product-title").each(($el,index,$list)=>{
        let libro=$el.text()
        if(libro.includes("Internet EX")){
          cy.wrap($el).click()
        }
      })

        
    
    })

    it.only("Each tres", () =>{
      cy.viewport(1500,900)
      cy.visit("https://demowebshop.tricentis.com/books")
      cy.title("eq","Demo Web Shop. Books")
      cy.wait(1000)

      const datos=[];

      cy.get(".product-title").each(($el,index,$list)=>{
        datos[index]=$el.text()
      }).then(()=>{
      
      for(let x=0; x<datos.length; x++){
        cy.get(".picture").eq(x).click()
        cy.wait(1000)
        cy.get(".compare-products > .button-2").click()
        cy.wait(1000)
        cy.visit("https://demowebshop.tricentis.com/books")
        cy.wait(1000)
      }
      cy.visit("https://demowebshop.tricentis.com/compareproducts")
      cy.wait(1000)
      cy.get(".clear-list").click()

    })



        
    
    })
    
    })// Cierre de describre.