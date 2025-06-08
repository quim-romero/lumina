import "cypress-axe";

Cypress.on("uncaught:exception", () => {
  return false;
});
