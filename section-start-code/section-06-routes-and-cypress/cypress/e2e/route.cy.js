

it("displays correct heading when navigating to show route", () => {
  cy.visit("http://localhost:3006")
  cy.findByRole("button", {name:/shows/i}).click()
  cy.findByRole("heading", {name:/upcoming shows/i}).should("exist")
})
it("reset db", () => {
  cy.task("db:reset")
})