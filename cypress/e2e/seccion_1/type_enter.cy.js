///<reference types="cypress"/>
//La función anterior es para que funcionen los comandos.

describe("Funciones para type", () => {

    it("Type(Cuando presionen enter)", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should("eq","Google")
        cy.wait(1500) 
        
        cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").type("cypress io {enter}")

        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
        
    
    })
    
    })// Cierre de describre.