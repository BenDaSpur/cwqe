/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the title", () => {
    cy.get(".display-1").contains("Cooking With QE");
  });

  it("shows the posts", () => {
    cy.get(".card").each(($card) => {
      cy.wrap($card).should("be.visible");
    });
  });
});
