describe("Let me know app", function() {
  it("should work", function() {
    cy.visit("https://letmeknow-csm.herokuapp.com/");
    cy
      .get(".portal-button")
      .eq(0)
      .click();
    cy.url().should("be", "https://letmeknow-csm.herokuapp.com/host");
    cy
      .get(".modal-open")
      .eq(0)
      .click();
    cy
      .get("input")
      .eq(0)
      .type("Test");
  });
});
