///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import ProyectoUno_PO from '../../support/page_objects/proyecto_uno_PO/proyecto_uno_po.cy'

import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')

describe('page opjects models', () => {

    const master=new ProyectoUno_PO()

    master.visitHome()
   

    it('test uno', () =>{
        master.datos1("Victor","Mora","victormora@email.com")
    })

})