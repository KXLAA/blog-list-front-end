describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "Kolade Afode",
      username: "Kxla",
      password: "Kola",
      blogs: [],
    };
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("Login form is shown", function () {
    cy.contains("LOG IN");
    cy.contains("Username");
    cy.contains("Password");
  });

  it("user can login", function () {
    cy.get("#username").type("Kxla");
    cy.get("#password").type("Kola");
    cy.get("#login-button").click();
    cy.contains("Kxla Logged In");
  });
});

describe("Blog app", function () {
  describe("When logged in", function () {
    beforeEach(function () {
      cy.request("POST", "http://localhost:3003/api/testing/reset");
      const user = {
        name: "Kolade Afode",
        username: "Kxla",
        password: "Kola",
        blogs: [],
      };
      cy.request("POST", "http://localhost:3003/api/users/", user);
    });

    it("A blog can be created", function () {
      cy.contains("create new blog").click();
      cy.get("#title").type("a note created by cypress");
      cy.get("#author").type("cypress");
      cy.get("#url").type("cypress.com");
      cy.get("#create").click();
      cy.contains("a note created by cypress");
    });

    it("A blog can be liked", function () {
      cy.contains("create new blog").click();
      cy.get("#title").type("a note created by cypress");
      cy.get("#author").type("cypress");
      cy.get("#url").type("cypress.com");
      cy.get("#create").click();
      cy.contains("a note created by cypress");
      cy.contains("view").click();
      cy.contains("like").click();
      cy.contains("1");
    });
  });
});
