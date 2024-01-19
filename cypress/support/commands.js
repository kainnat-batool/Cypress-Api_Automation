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


Cypress.Commands.add('GetCall',()=>
{
    cy.request({
        method:'Get',
        url:'/',
        headers:{
            Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
        }
    })
})

Cypress.Commands.add('PostCall',(payload)=>
{
    cy.request({
        method:'POST',
        url:'/',
        headers:{
            Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
        },
        body:payload
    })
})

Cypress.Commands.add('PutCall',(pathParams,payload)=>
{
    cy.request({
        method:'PUT',
        url:'/'+pathParams,
        headers:{
            Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
        },
        body:payload
    })
})

Cypress.Commands.add('DeleteCall',(pathParams)=>
{
    cy.request({
        method:'Delete',
        url:'/'+pathParams,
        headers:{
            Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
        }
    })
})