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

describe("Elementos de una tabla", () => {

    it("children", () =>{
        cy.viewport(1500, 900)
        let t=1000
        cy.visit("https://myhappyfun.com/")
        cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
        cy.wait(t)
        cy.get("#mega-menu-mobile-menu").children("#mega-menu-item-22074").click({force:true})
        
    
    })

    it("seleccionar por medio de los elementos eq", () =>{
      cy.viewport(1500, 900)
      let t=1000
      cy.visit("https://myhappyfun.com/")
      cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
      cy.wait(t)
      cy.get(".wrap-product-loop-content").eq(1).should("contain","Black").click({force:true})
      
  
  })

  it("seleccionar por medio de filtros", () =>{
    cy.viewport(1500, 900)
    let t=1000
    cy.visit("https://myhappyfun.com/")
    cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
    cy.wait(t)
    cy.get(".elementor-element-0d20df8 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap").filter(".post").should('contain','24231')

    //NO ME TERMINA DE FUNCIONAR PERO ENTIENDO EL CONCEPTO. LA FUNCIÓN FILTER SE USA PARA FILTRAR VALORES DENTRO DE UN GRUPO.
    

})
    
it("seleccionar por medio de la funcion find", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://myhappyfun.com/")
  cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
  cy.wait(t)
  cy.get(".elementor-element-0d20df8 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap").
  find(".wrap-product-loop-content").contains("Black Panther").click()
 
  

})

it("seleccionar por medio de la funcion first", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://myhappyfun.com/")
  cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
  cy.wait(t)
  cy.get(".elementor-element-0d20df8 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap").
  find(".wrap-product-loop-content").first().should('contain','mujer')
  cy.wait(t)
  cy.get(".elementor-element-0d20df8 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap").
  find(".wrap-product-loop-content").last().should('contain','Mago')

 
  

})

it("seleccionar los elementos siguientes next all", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://myhappyfun.com/")
  cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
  cy.wait(t)
  cy.get(".wrap-product-loop-content").contains("Black Panther").nextAll()

  //NO FUNCIONA PERO CON ESTE EJERCICIO LO QUE HACES ES SELECCIONAR UN ELEMENTO Y BUSCAR LOS SIGUIENTES A PARTIR DE ESE ELEMENTO
 
  

})

it("seleccionar elemento padre", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://myhappyfun.com/")
  cy.title().should("eq","MyHappyFun -Disfraces y complementos | Venta Online | Be Funny!")
  cy.wait(t)
  cy.get(".wrap-product-loop-content").parent().should('have.length',48)
 
  

})

it("mostrando los campos de una tabla", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://tablepress.org/demo/")
  cy.title().should("eq","TablePress Demo – TablePress")
  cy.wait(t)

  const datos=[]
  cy.get(".row-hover td").each(($el,index,$list)=>{
    datos[index]=$el.text()
  }).then(()=>{
    for(let i=0; i<=datos.length; i++){
      cy.log(datos[i])
    }
  }) 

  
})

it("Sumando los valores de los campos", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://tablepress.org/demo/")
  cy.title().should("eq","TablePress Demo – TablePress")
  cy.wait(t)

  const datos=[]
  let cantidadOdd=0


  cy.get(".row-hover td").each(($el,index,$list)=>{
    datos[index]=$el.text()
  }).then(()=>{
    for(let i=0; i<=datos.length; i++){
      cy.log(datos[i])
      if(Number(datos[i])){
        cantidadOdd+=Number(datos[i])
      }
    }
    cy.log("La cantidad es: "+cantidadOdd)
  }) 

  
})

it.only("Valor de un campo en especifico", () =>{
  cy.viewport(1500, 900)
  let t=1000
  cy.visit("https://tablepress.org/demo/")
  cy.title().should("eq","TablePress Demo – TablePress")
  cy.wait(t)

 const campo=cy.get(".row-7 > .column-2")
 campo.each(($el,index,$list)=>{
  const dato=$el.text()

  if(dato.includes("English")){
    campo.eq(index).next().next().then((age)=>{
      const edad=age.text()
      cy.log ("El empleado nació en la fecha: "+edad)
    })
  }
 })
  
})


    })// Cierre de describre.