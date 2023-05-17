    Given ('Abrir el navegador principal',()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.wait(500)
    
    })

     When ('Cargando el nombre {word}',(name)=>{
        cy.get("#userName").should("be.visible").type(name)
        cy.wait(500)

    })

     When ('Cargando el email {word}',(email)=>{
        cy.get("#userEmail").should("be.visible").type(email)
        cy.wait(500)
    
    })

     And ('Cargando la dirección {word}',(dir)=>{
        cy.get("#currentAdress").should("be.visible").type(dir)
        cy.wait(500)
    
    })

     Then ('Validar el nombre de la página',()=>{
        cy.title().should('eq','DEMOQA')
        cy.wait(500)
    
    })