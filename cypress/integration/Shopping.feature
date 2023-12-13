@regression
Feature: Check Shopping functionality

    As a user i should be able to change between categories, buy and remove a product

    Background: 
        Given I visit the home page


    Scenario Outline: Check products from categories are correctly displayed
        When I click the category with the name "<name>"
        Then I should see <quantity> displayed items of that category

        Examples:
            | name     | quantity |  
            | Phones   | 7        |
            | Laptops  | 6        |
            | Monitors | 2        |

    Scenario: Check product details correctly displayed
        When I click on any product item
        Then I should navigate to the product details
        And I should be able to see product information

    Scenario: Check product correctly added to cart
        When I click on any product item
        And I click on the add to cart button
        Then I should see the "Product added" alert
        When I accept the alert
        And I navigate to the cart section
        Then I should be able to see the product added in the cart

