/// <reference types="cypress" />

describe("Single Post Page", () => {
  beforeEach(() => {
    cy.visit("/recipes");
    cy.get(".recipe-row").first().find("a").first().click();
  });

  it("shows a title", () => {
    cy.get(".title-name").should("be.visible");
  });

  it("shows the post", () => {
    cy.get(".recipe-content").should("be.visible");
  });
});
