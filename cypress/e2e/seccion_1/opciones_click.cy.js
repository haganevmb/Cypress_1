///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.
//it.only es para que solo ejecute uno de los procesos.

describe("Opciones de click", () => {

    it("Click sencillo", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(2000)

        cy.get("#wsf-1-field-27").should("be.visible").click()
        cy.wait(2000)
        cy.get("#menu-item-178").should("be.visible").click()
        cy.wait(2000)
        cy.get(".et_pb_section_0 > .et_pb_row > .et_pb_column_3_5 > .et_pb_button_module_wrapper > .et_pb_button").should("be.visible").click()
        
    
    })

    it("Click force true", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(2000)

        cy.get("#wsf-1-field-27").should("be.visible").click()
        cy.wait(2000)
        cy.get("#menu-item-178").should("be.visible").click()
        cy.wait(2000)
        cy.get(".et_pb_section_0 > .et_pb_row > .et_pb_column_3_5 > .et_pb_button_module_wrapper > .et_pb_button").should("be.visible").click({force:true})
        
    
    })

    it.only("Click coordenadas x,y", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(2000)

        cy.get("#wsf-1-field-27").should("be.visible").click()
        cy.wait(2000)
        cy.get("#menu-item-178").should("be.visible").click(50,10)
        cy.wait(2000)
      
    
    })
    
})// Cierre de describre.