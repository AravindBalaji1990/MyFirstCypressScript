/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
  cy.visit("https://www.amazon.com/")

  cy.get('.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss').should('be.visible').click({wait:1000})
  // cy.wait(5000)
  //each is a keyword in cypress it will loop through the elements that we have identified
  cy.get('div#nav-xshop>a').each(($label) => {
    //text() -> this will grab the text value within the attribute
        const labelText = $label.text(); 
        if(labelText == "Today's Deals"){
        cy.wrap($label).click(); 
        cy.log(`items available in amazon link ${labelText}`)
        return
      }
      });
  })
})