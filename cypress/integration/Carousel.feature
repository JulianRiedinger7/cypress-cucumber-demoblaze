@regression @smoke
Feature: Check Carousel items

  As a user i should be able to see the carousel items correctly displayed

  Background: 
    Given I visit the home page

  Scenario: Verify the presence of the featured items carousel
    Then I should see at least one featured item displayed


  Scenario: Verify navigation in the featured items carousel
    When I interact with the featured items carousel
    Then I should be able to navigate through different featured items