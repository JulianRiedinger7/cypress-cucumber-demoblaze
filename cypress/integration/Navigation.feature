@navigation @smoke
Feature: Check correct navigation to all header links

    As a user i should be able to navigate correctly between different header links

    Background:
      Given I visit the home page

    Scenario: Check Contact navigation
      When I click the "Contact" link in the header
      Then I should be able to see the contact modal displayed

    Scenario: Check About Us navigation
      When I click the "About Us" link in the header
      Then I should be able to see the about us modal displayed

    Scenario: Check Cart navigation
      When I click the "Cart" link in the header
      Then I should navigate to the cart page
      And I should see the cart page correctly displayed

    Scenario: Check Log in navigation
      When I click the "Log in" link in the header
      Then I should be able to see the log in modal displayed

    Scenario: Check Sign up navigation
      When I click the "Sign up" link in the header
      Then I should be able to see the sign up modal displayed