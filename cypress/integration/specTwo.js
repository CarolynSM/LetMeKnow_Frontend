describe("Let me know app", function() {
  it("should work", function() {
    cy.visit("http://localhost:3000/");
    cy.get("small").should("contain", "2018");
  });
});
