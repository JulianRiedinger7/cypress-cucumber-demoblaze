import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { home } from '../../support/pages/Home';
import { contact } from '../../support/pages/Contact';
import { about } from '../../support/pages/About';
import { cart } from '../../support/pages/Cart';
import { auth } from '../../support/pages/Auth';

Given('I visit the home page', () => {
  home.visit()
})

When('I click the "Contact" link in the header', () => {
  home.goToContact()
})

Then('I should be able to see the contact modal displayed', () => {
  contact.getEmailInput()
    .should("be.visible")
  contact.getNameInput()
    .should("be.visible")
  contact.getMessageInput()
    .should("be.visible")
  contact.getSendMessageBtn()
    .should("be.visible")
})

When('I click the "About Us" link in the header', () => {
  home.gotToAboutUs()
})

Then('I should be able to see the about us modal displayed', () => {
  about.getVideo()
    .should("be.visible")
})

When('I click the "Cart" link in the header', () => {
  home.goToCart()
})

Then('I should navigate to the cart page', () => {
  cy.url().should("contain", "cart")
})

Then('I should see the cart page correctly displayed', () => {
  cart.getPageTitle()
    .should("be.visible")
    .and("contain.text", "Products")
})

When('I click the "Log in" link in the header', () => {
  home.goToLogin()
})

Then('I should be able to see the log in modal displayed', () => {
  auth.getLoginUsernameInput()
    .should("be.visible")
  auth.getLoginPasswordInput()
    .should("be.visible")
  auth.getLoginBtn()
    .should("be.visible")
})

When('I click the "Sign up" link in the header', () => {
  home.goToSignUp()
})

Then('I should be able to see the sign up modal displayed', () => {
  auth.getSignupUsernameInput()
    .should("be.visible")
  auth.getSignupPasswordInput()
    .should("be.visible")
  auth.getSignupBtn()
    .should("be.visible")
})