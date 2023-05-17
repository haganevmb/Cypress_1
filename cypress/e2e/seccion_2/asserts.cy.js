///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//La funcion anterior es para evitar errores al principio del test cuando visita una web.

require('cypress-xpath')
//it.only es para que solo ejecute uno de los procesos.

describe("Seccion asserts", () => {

    it("Assert contains ", () =>{
        cy.visit("https://myhappyfun.com/")
        cy.title().should('eq','MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!')
        cy.wait(1000)
        cy.get(".elementor-element-1061167.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > #mega-menu-wrap-mobile-menu > .mega-menu-toggle > .mega-toggle-blocks-left > #mega-toggle-block-2").click()
        cy.get("#mega-menu-mobile-menu").contains("DISFRACES").should("be.visible").click()
        
    
    })

    it("Assert find, eq ", () =>{
      cy.visit("https://myhappyfun.com/")
      cy.title().should('eq','MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!')
      cy.wait(1000)
      cy.get(".wrap-product-loop-content").find(".wrap-product-img").eq(2).click()
      
  
  })

  it("Assert find, eq, validando valores ", () =>{
    cy.visit("https://myhappyfun.com/")
    cy.title().should('eq','MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!')
    cy.wait(1000)
    cy.get(".wrap-product-loop-content").find(".wrap-product-img").eq(2).click()
    cy.get(".elementor-icon-box-description").first().then((e)=>{
      let estado=e.text()
      if (estado="Las medidas expresadas se refieren a la persona que llevará el producto, no son las medidas del producto."){
        cy.log("El producto cumple las condiciones")
      }

    })
    
    cy.get(".price").first().then((e)=>{
      cy.log(e.text())
      let precio=(e.text())
      precio=precio.slice(0,2)
      cy.log(precio)

      if(precio<40){
        cy.log("el vestido cumple la condición de precio")
        cy.wait(1000)
        cy.get(".elementor-element-146450b > .elementor-widget-container > .elementor-add-to-cart > .variations_form > .variations > tbody > tr > .value > .rtwpvs-terms-wrapper > .button-variable-term-3-4 > .rtwpvs-term-span").click()
        cy.wait(1000)
        cy.get(".wrap-group-qty > .single_add_to_cart_button").click()
        cy.get("#mega-toggle-block-5 > .mega-icon").click()
      }

      else{
        cy.log("el vestido no cumple con la condición del precio")
      }
     
    })
})

it("Assert have.text y contain.text", () =>{
  cy.visit("https://demoqa.com/text-box")
  cy.title().should('eq','DEMOQA')
  cy.wait(1000)

  cy.get("#userName").should("be.visible").type("Papito")
  cy.get("#userEmail").should("be.visible").type("papitoperron@gmail.com")
  cy.get("#submit").should("be.visible").click()
  cy.wait(1000)

  cy.get("#name").should("have.text","Name:Papito")
  //Debe tener el texto completo que aparece en la id de name.

  cy.get("#name").should("contain.text","Papito")
  //Debe contener en el texto la palabra que le indicas.
  
  

})

it("Assert have class", () =>{
  cy.visit("https://demoqa.com/text-box")
  cy.title().should('eq','DEMOQA')
  cy.wait(1000)

  cy.get("#userName").should("be.visible").should("have.class","mr-sm-2 form-control").then(()=>{
    cy.get("#userName").should("be.visible").type("Jose Luis")

  })
 
})

it("Assert and", () =>{
  cy.visit("https://demoqa.com/text-box")
  cy.title().should('eq','DEMOQA')
  cy.wait(1000)

  cy.get("#userName").should("be.visible").and("have.class","mr-sm-2 form-control").then(()=>{
    cy.get("#userName").should("be.visible").type("Jose Luis")

  })
 
})

it.only("Assert length", () =>{
  cy.visit("https://info.sice.indiana.edu/~hrosenba/Demo/Demo4.html")
  cy.title().should('eq','HTML Demo pages: Tables')
  cy.wait(1000)
  cy.xpath("//html/body/center[1]/table").should("have.length",1)

 
})
})// Cierre de describre.