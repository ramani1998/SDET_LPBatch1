$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Careers.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate Careers and promotions page",
  "description": "I want to create and verify Careers and promotions",
  "id": "this-feature-is-to-automate-careers-and-promotions-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Careers"
    }
  ]
});
formatter.scenarioOutline({
  "line": 42,
  "name": "to verify admin to add career, promotion and add a session in career and promotions link using scenario outline",
  "description": "",
  "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@CreateCareersPromotionsScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" field",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I validate login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the Administration tab",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on careers icon",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter value in Name \"\u003ccareername\u003e\" textbox in Careers",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on Add button for Careers",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I navigate back to Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I click on Promotions icon",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter value in Name \"\u003cpromotionsname\u003e\" textbox in Promotions",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I click on Add button for Promotions",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I click on Add a training session link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I validate Add a training session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter session name \"\u003csessionname\u003e\" in Session name textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "Enter coach name \"\u003ccoachname\u003e\" in Coach name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click on Next step button",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I validate Add Courses page title",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "select course name \"\u003ccoursename\u003e\" in course list window",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "Click on \u003e step button",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I validate added course \"\u003ccoursename\u003e\" list",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "click on Next step button in course list",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I validate Subscribe users to this session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I enter student name \"\u003cstudentname\u003e\" in Portal users list",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "click on student name \"\u003cstudentname\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "click on Finish session creation button",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate created training session \"\u003csessionname\u003e\", \"\u003ccoursename\u003e\" and \"\u003cstudentname\u003e\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I finally close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sessionname",
        "coachname",
        "coursename",
        "studentname",
        "careername",
        "promotionsname"
      ],
      "line": 78,
      "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;;1"
    },
    {
      "cells": [
        "admin",
        "admin@123",
        "Selenium",
        "man",
        "coursee22 (SELENIUM778)",
        "Sunil",
        "QA",
        "QA for tester"
      ],
      "line": 79,
      "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;;2"
    },
    {
      "cells": [
        "admin",
        "admin@123",
        "Selenium",
        "man",
        "cour8022 (SELEN099)",
        "Sunil",
        "QA",
        "QA for tester"
      ],
      "line": 80,
      "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "to verify admin to add career, promotion and add a session in career and promotions link using scenario outline",
  "description": "",
  "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@CreateCareersPromotionsScenarioOutline"
    },
    {
      "line": 1,
      "name": "@Careers"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I enter username \"admin\" and password \"admin@123\" field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I validate login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the Administration tab",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on careers icon",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter value in Name \"QA\" textbox in Careers",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on Add button for Careers",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I navigate back to Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I click on Promotions icon",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter value in Name \"QA for tester\" textbox in Promotions",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I click on Add button for Promotions",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I click on Add a training session link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I validate Add a training session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter session name \"Selenium\" in Session name textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "Enter coach name \"man\" in Coach name textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click on Next step button",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I validate Add Courses page title",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "select course name \"coursee22 (SELENIUM778)\" in course list window",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "Click on \u003e step button",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I validate added course \"coursee22 (SELENIUM778)\" list",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "click on Next step button in course list",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I validate Subscribe users to this session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I enter student name \"Sunil\" in Portal users list",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "click on student name \"Sunil\" link",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "click on Finish session creation button",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate created training session \"Selenium\", \"coursee22 (SELENIUM778)\" and \"Sunil\" details",
  "matchedColumns": [
    2,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I finally close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 38
    }
  ],
  "location": "Training_StepDefinitions.i_open_the_browser_and_enter_the_url(String)"
});
formatter.result({
  "duration": 15836923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin@123",
      "offset": 39
    }
  ],
  "location": "Training_StepDefinitions.i_enter_username_and_password_field(String,String)"
});
formatter.result({
  "duration": 634934200,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_Click_Login_button()"
});
formatter.result({
  "duration": 5885653500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_login_is_successful()"
});
formatter.result({
  "duration": 102971600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_the_Administration_tab()"
});
formatter.result({
  "duration": 1858096500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 3612441800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_careers_icon()"
});
formatter.result({
  "duration": 2405906300,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 1300133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.i_enter_value_in_Name_textbox_in_Careers(String)"
});
formatter.result({
  "duration": 184855900,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_button_for_Careers()"
});
formatter.result({
  "duration": 1884551800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_success_message()"
});
formatter.result({
  "duration": 82286100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_navigate_back_to_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 1884413100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Promotions_icon()"
});
formatter.result({
  "duration": 1135373400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 1081377500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA for tester",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.i_enter_value_in_Name_textbox_in_Promotions(String)"
});
formatter.result({
  "duration": 346057100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_button_for_Promotions()"
});
formatter.result({
  "duration": 1029880600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_success_message()"
});
formatter.result({
  "duration": 51235600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_a_training_session_link()"
});
formatter.result({
  "duration": 5337556100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_a_training_session_page_title()"
});
formatter.result({
  "duration": 13659100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.enter_session_name_in_Session_name_textbox(String)"
});
formatter.result({
  "duration": 484255700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man",
      "offset": 18
    }
  ],
  "location": "Training_StepDefinitions.enter_coach_name_in_Coach_name_textbox(String)"
});
formatter.result({
  "duration": 9547406300,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button()"
});
formatter.result({
  "duration": 2921495800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_Courses_page_title()"
});
formatter.result({
  "duration": 21078400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coursee22 (SELENIUM778)",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.select_course_name_in_course_list_window(String)"
});
formatter.result({
  "duration": 270518500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_step_button()"
});
formatter.result({
  "duration": 220787400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coursee22 (SELENIUM778)",
      "offset": 25
    }
  ],
  "location": "Training_StepDefinitions.i_validate_added_course_list(String)"
});
formatter.result({
  "duration": 179617200,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button_in_course_list()"
});
formatter.result({
  "duration": 2181122200,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Subscribe_users_to_this_session_page_title()"
});
formatter.result({
  "duration": 22687400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunil",
      "offset": 22
    }
  ],
  "location": "Training_StepDefinitions.i_enter_student_name_in_Portal_users_list(String)"
});
formatter.result({
  "duration": 326017700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunil",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.click_on_student_name_link(String)"
});
formatter.result({
  "duration": 6226780200,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 4265194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 37
    },
    {
      "val": "coursee22 (SELENIUM778)",
      "offset": 49
    },
    {
      "val": "Sunil",
      "offset": 79
    }
  ],
  "location": "Training_StepDefinitions.i_validate_created_training_session_and_details(String,String,String)"
});
formatter.result({
  "duration": 353382800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_finally_close_the_browser()"
});
formatter.result({
  "duration": 265374600,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "to verify admin to add career, promotion and add a session in career and promotions link using scenario outline",
  "description": "",
  "id": "this-feature-is-to-automate-careers-and-promotions-page;to-verify-admin-to-add-career,-promotion-and-add-a-session-in-career-and-promotions-link-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@CreateCareersPromotionsScenarioOutline"
    },
    {
      "line": 1,
      "name": "@Careers"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I enter username \"admin\" and password \"admin@123\" field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I validate login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the Administration tab",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on careers icon",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter value in Name \"QA\" textbox in Careers",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on Add button for Careers",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I navigate back to Careers and promotions link",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I click on Promotions icon",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter value in Name \"QA for tester\" textbox in Promotions",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I click on Add button for Promotions",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I validate success message",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I click on Add a training session link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I validate Add a training session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter session name \"Selenium\" in Session name textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "Enter coach name \"man\" in Coach name textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click on Next step button",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I validate Add Courses page title",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "select course name \"cour8022 (SELEN099)\" in course list window",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "Click on \u003e step button",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I validate added course \"cour8022 (SELEN099)\" list",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "click on Next step button in course list",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I validate Subscribe users to this session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I enter student name \"Sunil\" in Portal users list",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "click on student name \"Sunil\" link",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "click on Finish session creation button",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate created training session \"Selenium\", \"cour8022 (SELEN099)\" and \"Sunil\" details",
  "matchedColumns": [
    2,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I finally close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 38
    }
  ],
  "location": "Training_StepDefinitions.i_open_the_browser_and_enter_the_url(String)"
});
formatter.result({
  "duration": 12153957900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin@123",
      "offset": 39
    }
  ],
  "location": "Training_StepDefinitions.i_enter_username_and_password_field(String,String)"
});
formatter.result({
  "duration": 375638900,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_Click_Login_button()"
});
formatter.result({
  "duration": 5078688000,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_login_is_successful()"
});
formatter.result({
  "duration": 101588900,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_the_Administration_tab()"
});
formatter.result({
  "duration": 1278638000,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 3834346100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_careers_icon()"
});
formatter.result({
  "duration": 2272416000,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 1405789800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.i_enter_value_in_Name_textbox_in_Careers(String)"
});
formatter.result({
  "duration": 321195500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_button_for_Careers()"
});
formatter.result({
  "duration": 1500929600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_success_message()"
});
formatter.result({
  "duration": 57202100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_navigate_back_to_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 1450354600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Promotions_icon()"
});
formatter.result({
  "duration": 1171897700,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 1295044800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA for tester",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.i_enter_value_in_Name_textbox_in_Promotions(String)"
});
formatter.result({
  "duration": 419346900,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_button_for_Promotions()"
});
formatter.result({
  "duration": 1964438300,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_success_message()"
});
formatter.result({
  "duration": 65652100,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_a_training_session_link()"
});
formatter.result({
  "duration": 5311470000,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_a_training_session_page_title()"
});
formatter.result({
  "duration": 21384300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.enter_session_name_in_Session_name_textbox(String)"
});
formatter.result({
  "duration": 600649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man",
      "offset": 18
    }
  ],
  "location": "Training_StepDefinitions.enter_coach_name_in_Coach_name_textbox(String)"
});
formatter.result({
  "duration": 9363441900,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button()"
});
formatter.result({
  "duration": 2720880600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_Courses_page_title()"
});
formatter.result({
  "duration": 14162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cour8022 (SELEN099)",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.select_course_name_in_course_list_window(String)"
});
formatter.result({
  "duration": 189196200,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_step_button()"
});
formatter.result({
  "duration": 324163200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cour8022 (SELEN099)",
      "offset": 25
    }
  ],
  "location": "Training_StepDefinitions.i_validate_added_course_list(String)"
});
formatter.result({
  "duration": 159184300,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button_in_course_list()"
});
formatter.result({
  "duration": 2087605700,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Subscribe_users_to_this_session_page_title()"
});
formatter.result({
  "duration": 16355700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunil",
      "offset": 22
    }
  ],
  "location": "Training_StepDefinitions.i_enter_student_name_in_Portal_users_list(String)"
});
formatter.result({
  "duration": 249003100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunil",
      "offset": 23
    }
  ],
  "location": "Training_StepDefinitions.click_on_student_name_link(String)"
});
formatter.result({
  "duration": 6229987600,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 4148132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 37
    },
    {
      "val": "cour8022 (SELEN099)",
      "offset": 49
    },
    {
      "val": "Sunil",
      "offset": 75
    }
  ],
  "location": "Training_StepDefinitions.i_validate_created_training_session_and_details(String,String,String)"
});
formatter.result({
  "duration": 347656400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_finally_close_the_browser()"
});
formatter.result({
  "duration": 184167900,
  "status": "passed"
});
});