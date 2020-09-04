/// <reference types="cypress" />

describe("Recipes Page", () => {
  beforeEach(() => {
    cy.visit("/recipes");
  });

  it("shows a title", () => {
    cy.get(".display-4").contains("Recent posts");
  });

  it("shows the posts", () => {
    cy.get(".recipe-row").each(($row) => {
      cy.wrap($row).should("be.visible");
    });
  });
});
