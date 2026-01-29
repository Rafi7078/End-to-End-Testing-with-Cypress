it("Google Test",function(){


    cy.visit("https://www.google.com")

    cy.get('#APjFqb').type("www.facebook.com {enter}")
    cy.get('[data-hveid="CBwQAA"] > .nPDzT > .YmvwI').click()
})