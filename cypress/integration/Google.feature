Feature: Scenario Outline

  Scenario Outline:  Login functionality for a project.
    Given user navigates to Jarvis
    When I enter Email as "<email>" and Password as "<password>"
    And the user clicks on the sign-in button
    Then it should validate the "<error>" message
    Examples:
      | email                         | password  | error                                        |
      | Admin123@jarvisempg.com       | Super@321 | Invalid login credentials. Please try again. |
      | Admin123567777@jarvisempg.com | Super@321 | Invalid login credentials. Please try again. |