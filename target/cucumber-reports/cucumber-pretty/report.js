$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Training.feature");
formatter.feature({
  "line": 3,
  "name": "This feature is to automate training, Careers and promotions page",
  "description": "I want to create and verify training session",
  "id": "this-feature-is-to-automate-training,-careers-and-promotions-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Training"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "to verify admin to create training session",
  "description": "",
  "id": "this-feature-is-to-automate-training,-careers-and-promotions-page;to-verify-admin-to-create-training-session",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CreateTraining"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I validate login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click the Administration tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Add a training session link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I validate Add a training session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter session name \"\u003csessionname\u003e\" in Session name textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter coach name \"\u003ccoachname\u003e\" in Coach name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Next step button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate Add Courses page title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "select course name \"\u003ccoursename\u003e\" in course list window",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on \u003e step button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I validate added course \"\u003ccoursename\u003e\" list",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on Next step button in course list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I validate Subscribe users to this session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I enter student name \"\u003cstudentname\u003e\" in Portal users list",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "click on student name \"\u003cstudentname\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Finish session creation button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate created training session \"\u003csessionname\u003e\", \"\u003ccoursename\u003e\" and \"\u003cstudentname\u003e\" details",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "this-feature-is-to-automate-training,-careers-and-promotions-page;to-verify-admin-to-create-training-session;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sessionname",
        "coachname",
        "coursename",
        "studentname"
      ],
      "line": 30,
      "id": "this-feature-is-to-automate-training,-careers-and-promotions-page;to-verify-admin-to-create-training-session;;1"
    },
    {
      "cells": [
        "admin",
        "admin@123",
        "Selenium1259",
        "man",
        "AWS (AWS)",
        "Sunil"
      ],
      "line": 31,
      "id": "this-feature-is-to-automate-training,-careers-and-promotions-page;to-verify-admin-to-create-training-session;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "to verify admin to create training session",
  "description": "",
  "id": "this-feature-is-to-automate-training,-careers-and-promotions-page;to-verify-admin-to-create-training-session;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CreateTraining"
    },
    {
      "line": 2,
      "name": "@Training"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter username \"admin\" and password \"admin@123\" field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I validate login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click the Administration tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Add a training session link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I validate Add a training session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter session name \"Selenium1259\" in Session name textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter coach name \"man\" in Coach name textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Next step button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate Add Courses page title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "select course name \"AWS (AWS)\" in course list window",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on \u003e step button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I validate added course \"AWS (AWS)\" list",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on Next step button in course list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I validate Subscribe users to this session page title",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I enter student name \"Sunil\" in Portal users list",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "click on student name \"Sunil\" link",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Finish session creation button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate created training session \"Selenium1259\", \"AWS (AWS)\" and \"Sunil\" details",
  "matchedColumns": [
    2,
    4,
    5
  ],
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
  "duration": 13706378000,
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
  "duration": 254562800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_Click_Login_button()"
});
formatter.result({
  "duration": 5262013000,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_login_is_successful()"
});
formatter.result({
  "duration": 35698400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_the_Administration_tab()"
});
formatter.result({
  "duration": 716997300,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_click_on_Add_a_training_session_link()"
});
formatter.result({
  "duration": 4930917400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_a_training_session_page_title()"
});
formatter.result({
  "duration": 5968800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium1259",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.enter_session_name_in_Session_name_textbox(String)"
});
formatter.result({
  "duration": 184943200,
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
  "duration": 9310830400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button()"
});
formatter.result({
  "duration": 2305146800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Add_Courses_page_title()"
});
formatter.result({
  "duration": 6455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AWS (AWS)",
      "offset": 20
    }
  ],
  "location": "Training_StepDefinitions.select_course_name_in_course_list_window(String)"
});
formatter.result({
  "duration": 110406500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_step_button()"
});
formatter.result({
  "duration": 140352300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AWS (AWS)",
      "offset": 25
    }
  ],
  "location": "Training_StepDefinitions.i_validate_added_course_list(String)"
});
formatter.result({
  "duration": 81591500,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Next_step_button_in_course_list()"
});
formatter.result({
  "duration": 1550262800,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.i_validate_Subscribe_users_to_this_session_page_title()"
});
formatter.result({
  "duration": 12189600,
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
  "duration": 107431000,
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
  "duration": 5095852400,
  "status": "passed"
});
formatter.match({
  "location": "Training_StepDefinitions.click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 3380586500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium1259",
      "offset": 37
    },
    {
      "val": "AWS (AWS)",
      "offset": 53
    },
    {
      "val": "Sunil",
      "offset": 69
    }
  ],
  "location": "Training_StepDefinitions.i_validate_created_training_session_and_details(String,String,String)"
});
formatter.result({
  "duration": 99396000,
  "status": "passed"
});
});