describe("Let me know app", function() {
  it("should work", function() {
    cy.visit("http://localhost:3000/");
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
    cy.wait(500);
    cy
      .get(".modal-open")
      .eq(2)
      .click();
    cy
      .get("form")
      .children("select")
      .select("Test");
    cy.get("#delete-button").click();
    cy.get("#invites-table").should("not.have.text", "Test");
  });
});
