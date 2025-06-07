describe("CodeCraft E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Generates Python code and downloads it", () => {
    cy.get("#prompt").type("Write a Python function to calculate Fibonacci numbers");
    cy.get("#generate").click();
    cy.get("#code-output").contains("def fibonacci(n):");
    cy.get("#download-py").click();
    cy.readFile("cypress/downloads/code.py").should("contain", "def fibonacci(n):");
  });
});