// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('datos_usuario',(nombre,apellidos,email,telefono,direccion)=>{
    cy.get("#wsf-1-field-21").should("be.visible").type(nombre)
    cy.get("#wsf-1-field-22").should("be.visible").type(apellidos)
    cy.get("#wsf-1-field-23").should("be.visible").type(email)
    cy.get("#wsf-1-field-24").should("be.visible").type(telefono)
    cy.get("#wsf-1-field-28").should("be.visible").type(direccion)
    cy.get("[type='submit']").should("be.visible").click()

})