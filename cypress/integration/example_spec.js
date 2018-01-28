describe("Let me know app", function() {
  it("should work", function() {
    cy.visit("https://letmeknow-csm.herokuapp.com/");
    cy
      .get(".portal-button")
      .eq(0)
      .click();
    cy
      .get(".modal-open")
      .eq(0)
      .click();
    cy
      .get("input")
      .eq(0)
      .type("Test");
    cy.get("#add-button").click();
    cy
      .get(".modal-open")
      .eq(2)
      .click();
    cy.get("#delete-name").select("Test");
  });
});

// cy.url().should("be", "https://letmeknow-csm.herokuapp.com/host");
