
Feature: As a user
  I want select country language, perform search and apply filters
  So that I can see the list of articles
  
 
 Scenario: Homepage select country language, Perform search and apply filters
   Given I am on homepage with Global | English
   When I perform search with test
   Then I see search results displayed
   When I set results sort by Date
   And I refined search industry Transportation
   Then I see all search results



