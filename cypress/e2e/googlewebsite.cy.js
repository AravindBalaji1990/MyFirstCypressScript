/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    // cy.visit command is used to launch the application url 
    // it can be with http or https or simple www.example.com
    // cy.visit('www.bing.com')
    // cy.reload()// refresh the browser,goback and forward 
    // cy.wait(5000) // like a static wait it waits for n milliseconds that we have denoted, during this time it does not do anything

    cy.visit('www.google.com')
    cy.get("#APjFqb").type('cypress', {wait: 5000})// we are identifying the textbox and typing
    cy.wait(5000)
    cy.get("#jZ2SBf").click({wait:5000}) // we are identifying the auto-suggested item and clicking it
    cy.wait(10000)
    cy.go(-1) //backward in page history
    cy.wait(5000)
    cy.go(1) //forward in page history
  })
})