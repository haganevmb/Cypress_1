class ProyectoUno_PO{

    visitHome(){
        let t=1000
        
        beforeEach(()=> {
            cy.viewport(1500, 900)
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.title().should('eq','Datos Personales | TestingQaRvn')
            cy.wait(t)
        })

    }
    
    datos1(nombre,apellidos,email){
        cy.get("#wsf-1-field-21").should("be.visible").type(nombre)
        cy.get("#wsf-1-field-22").should("be.visible").type(apellidos)
        cy.get("#wsf-1-field-23").should("be.visible").type(email)
    }

}//Final

export default ProyectoUno_PO;