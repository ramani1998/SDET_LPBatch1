@Training
Feature: This feature is to automate training page
  I want to create and verify training session

  @CreateTrainingSessionScenarioOutline
  Scenario Outline: to verify admin to create training session using scenario outline
  	Given I open the browser and enter the url "http://elearningm1.upskills.in/"
  	Then I enter username "<username>" and password "<password>" field
  	When I Click Login button
  	Then I validate login is successful
    Then I click the Administration tab
    When I click on Add a training session link
    Then I validate Add a training session page title
    Given Enter session name "<sessionname>" in Session name textbox
    And Enter coach name "<coachname>" in Coach name textbox
    When Click on Next step button
    Then I validate Add Courses page title
    Given select course name "<coursename>" in course list window
    When Click on > step button
    Then I validate added course "<coursename>" list
    And click on Next step button in course list
    Then I validate Subscribe users to this session page title
    Given I enter student name "<studentname>" in Portal users list
    And click on student name "<studentname>" link
    When click on Finish session creation button
    Then I validate created training session "<sessionname>", "<coursename>" and "<studentname>" details
    Then I finally close the browser
    
    Examples: 
      | username | password | sessionname | coachname | coursename 							 | studentname |
      |  admin 	 | admin@123| Selenium		| man       | coursee (SELENIUM77)		 | Sunil       |
      |  admin 	 | admin@123| Selenium		| man       | automation (AUTOMATION)  | Sunil       |
  
   
  @CreateTrainingSessionExcel
  Scenario: to verify admin to create training session using excel sheet
  	Given I open the browser and enter the url "http://elearningm1.upskills.in/"
  	Then I enter user name and password field
  	When I Click Login button
  	Then I validate login is successful
    Then I click the Administration tab
    When I click on Add a training session link
    Then I validate Add a training session page title
    Given Enter value in Session name textbox
    And Enter value in Coach name textbox
    When Click on Next step button
    Then I validate Add Courses page title
    Given select coursename in course list window
    When Click on > step button
    Then I validate added courselist
    And click on Next step button in course list
    Then I validate Subscribe users to this session page title
    Given I enter studentname in Portal users list
    And click on studentname link
    When click on Finish session creation button
    Then I validate created training session details
    Then I finally close the browser
  