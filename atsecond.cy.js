describe("Login Page Tests", function () {

    // Visit the base URL before each test
    beforeEach(function () {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.wait(2000); // Wait for 2 seconds to ensure the page is loaded
        cy.get(':nth-child(21) > a').click(); // Navigate to login page
        cy.wait(2000); // Wait for login page to load
    });

  

    it("Login with valid username and invalid password", function () {
        cy.get('#username').type('tomsmith'); // Enter valid username
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').type('WrongPassword'); // Enter invalid password
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for invalid password
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your password is invalid!');
    });

    it("Login with invalid username and valid password", function () {
        cy.get('#username').type('invaliduser'); // Enter invalid username
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').type('SuperSecretPassword!'); // Enter valid password
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for invalid username
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });

    it("Login with invalid username and invalid password", function () {
        cy.get('#username').type('invaliduser'); // Enter invalid username
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').type('WrongPassword'); // Enter invalid password
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for both invalid username and password
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });

    it("Login with empty username and password", function () {
        cy.get('#username').clear(); // Leave username field empty
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').clear(); // Leave password field empty
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for empty fields
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });

    it("Login with empty username and valid password", function () {
        cy.get('#username').clear(); // Leave username field empty
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').type('SuperSecretPassword!'); // Enter valid password
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for empty username
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });

    it("Login with valid username and empty password", function () {
        cy.get('#username').type('tomsmith'); // Enter valid username
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').clear(); // Leave password field empty
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify error message for empty password
        cy.wait(2000); // Wait for response
        cy.get('.flash.error').should('contain', 'Your password is invalid!');
    });
    
    it("Login with valid username and valid password", function () {
        cy.get('#username').type('tomsmith'); // Enter valid username
        cy.wait(1000); // Wait for 1 second
        cy.get('#password').type('SuperSecretPassword!'); // Enter valid password
        cy.wait(1000); // Wait for 1 second
        cy.get('.radius').click(); // Click Login button

        // Verify successful login
        cy.wait(2000); // Wait for response
        cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });

});
