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

