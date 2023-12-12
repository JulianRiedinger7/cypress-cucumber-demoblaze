import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { home } from "../../support/pages/Home";
import { productDetails } from "../../support/pages/ProductDetails";

let productTitle;
let productPrice;
const productToCheck = 1

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

When('I click on any product item', () => {
  home.getProductTitle(productToCheck).invoke('text').then((text) => {
    productTitle = text.trim();
  });

  home.getProductPrice(productToCheck).invoke('text').then((text) => {
    productPrice = text.trim();
  });

  cy.intercept("POST", "https://api.demoblaze.com/view").as("details")
  home.clickProduct(productToCheck)
  cy.wait("@details", {timeout: 10000})
    .its("response.statusCode")
    .should("eq", 200)
})

Then("I should navigate to the product details", () => {
  cy.url().should("contain", "prod.html?idp_=" + (productToCheck + 1))
})

Then('I should be able to see product information', () => {
  productDetails.getTitle()
    .should("be.visible")
    .and("contain.text", productTitle)

  productDetails.getPrice()
    .should("be.visible")
    .and("contain.text", productPrice)

  productDetails.getImage()
    .should("be.visible")
})

Then('I should see {int} displayed items of that category', (quantity) => {
  home.getCategoryItems()
    .should("be.visible")
    .and("have.length", quantity)
})