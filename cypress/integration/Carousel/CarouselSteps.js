/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import { home } from '../../support/pages/Home'


Given('I visit the home page', () => {
  home.visit()
})

When('I interact with the featured items carousel', () => {
  home.nextCarouselItem()
})

Then('I should see at least one featured item displayed', () => {
  home.getCarouselItems()
    .should("be.visible")
  home.getCarouselItems()
    .should("have.length.greaterThan", 1)
})

Then('I should be able to navigate through different featured items', () => {
  home.getCarouselItems().eq(1)
    .should("be.visible")
    .and("have.class", "active")
})