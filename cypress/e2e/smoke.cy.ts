it("Home → valida errores del formulario con campos vacíos", () => {
  cy.visit("/");

  cy.get('[data-testid="contact-form"]').scrollIntoView().should("be.visible");

  cy.get('[data-testid="contact-submit"]').click();

  cy.get('[data-testid="contact-error"]').its("length").should("be.gte", 1);
});
