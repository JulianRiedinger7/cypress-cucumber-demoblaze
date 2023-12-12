import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { home } from "../../support/pages/Home";

Given('I visit the home page', () => {
  home.visit()
})

When('I click the category with the name {string}', (name) => {
  cy.intercept("POST", "https://api.demoblaze.com/bycat").as("apiDemoBlaze")
  home.clickCategory(name)
  cy.wait("@apiDemoBlaze", {timeout: 10000})
    .its("response.statusCode")
    .should("eq", 200)
})

Then('I should see {int} displayed items of that category', (quantity) => {
  home.getCategoryItems()
    .should("be.visible")
    .and("have.length", quantity)
})