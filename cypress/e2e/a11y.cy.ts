/// <reference types="cypress" />
import type { Result } from "axe-core";

function failIfViolations(violations: Result[]) {
  if (violations.length) {
    const summary = violations
      .map((v) => `• ${v.id} (${v.impact}) - ${v.nodes.length} nodes`)
      .join("\n");
    throw new Error(`A11y violations:\n${summary}`);
  }
}

describe("A11y checks (critical/serious)", () => {
  it("Home", () => {
    cy.visit("/");
    cy.get("main", { timeout: 10000 }).should("be.visible");
    cy.injectAxe();
    cy.checkA11y(
      undefined,
      { includedImpacts: ["critical", "serious"] },
      failIfViolations,
    );
  });

  it("Product", () => {
    cy.visit("/");
    cy.get('a[href^="/product/"]').first().click();
    cy.injectAxe();
    cy.checkA11y(
      undefined,
      { includedImpacts: ["critical", "serious"] },
      failIfViolations,
    );
  });
});
