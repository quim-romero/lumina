/// <reference types="cypress" />
import type { Result } from "axe-core";

function highlight(violations: Result[]) {
  const targets: string[] = [];
  violations.forEach((v) => {
    v.nodes.forEach((n) => {
      n.target.forEach((sel) => {
        targets.push(sel as string);
        Cypress.$(sel as string).css({
          outline: "3px solid magenta",
          "outline-offset": "2px",
          "background-color": "rgba(255, 255, 0, 0.25)",
        });
      });
    });
  });
  return targets;
}

function failIfViolations(violations: Result[]) {
  const targets = highlight(violations);
  if (violations.length) {
    const summary = violations
      .map(
        (v) =>
          `• ${v.id} (${v.impact}) - ${v.nodes.length} nodes\n   targets: ${v.nodes
            .map((n) => n.target.join(", "))
            .join(" | ")}`,
      )
      .join("\n");
    throw new Error(
      `A11y violations:\n${summary}\n\nALL TARGETS:\n${targets.join("\n")}`,
    );
  }
}

describe("A11y - Landing (/) y Product", () => {
  it("Landing (/)", () => {
    cy.visit("/", {
      onBeforeLoad: (win) => win.localStorage.setItem("theme", "light"),
    });
    cy.get("main", { timeout: 10000 }).should("be.visible");
    cy.injectAxe();
    cy.checkA11y(
      "main",
      { includedImpacts: ["critical", "serious"] },
      failIfViolations,
    );
  });

  it("Product (detalle)", () => {
    cy.visit("/", {
      onBeforeLoad: (win) => win.localStorage.setItem("theme", "light"),
    });
    cy.get('a[href^="/product/"]', { timeout: 10000 }).first().click();
    cy.get("main", { timeout: 10000 }).should("be.visible");
    cy.injectAxe();
    cy.checkA11y(
      "main",
      { includedImpacts: ["critical", "serious"] },
      failIfViolations,
    );
  });
});
