/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { home } from "../../support/pages/Home";
import { productDetails } from "../../support/pages/ProductDetails";
import { cart } from "../../support/pages/Cart";

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

Then('I should see {int} displayed items of that category', (quantity) => {
  home.getCategoryItems()
    .should("be.visible")
    .and("have.length", quantity)
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
  cy.url()
    .should("contain", "prod.html?idp_=" + (productToCheck + 1))
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

When('I click on the add to cart button', () => {
  cy.intercept("POST", "https://api.demoblaze.com/addtocart").as("addCartApi")
  productDetails.addToCart()
  cy.wait("@addCartApi", {timeout: 10000})
    .its("response.statusCode")
    .should("eq", 200)
})

Then('I should see the "Product added" alert', ()=> {
  cy.on("window:alert", text => {
    expect(text).to.eq("Product added")
  })
})

When('I accept the alert', () => {
  cy.on('window:confirm', () => true) 
})

When('I navigate to the cart section', () => {
  cy.intercept("POST", "https://api.demoblaze.com/viewcart").as("cartViewApi")
  home.goToCart()
  cy.wait("@cartViewApi", {timeout: 10000})
    .its("response.statusCode")
    .should("eq", 200)
})

Then('I should be able to see the product added in the cart', () => {
  const formattedProductPrice = productPrice.replace("$", "")

  cy.url()
    .should("contain", "cart")
  cart.getPageTitle()
    .should("contain.text", "Products")
  cart.getTotalPrice()
    .should("contain.text", formattedProductPrice)
  cart.getTableTitle()
    .should("contain.text", productTitle)
  cart.getTablePrice()
    .should("contain.text", formattedProductPrice)
})