package stepdefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import common.Wrapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Training_StepDefinitions {
	WebDriver driver;
	public static String strSessionName;
	String act_SessionName, act_CourseName, act_studentName, expMsg, actMsg, expTitle, actTitle;
	boolean courseaddedflag;
	
	@Given("^I open the browser and enter the url \"([^\"]*)\"$")
	public void i_open_the_browser_and_enter_the_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
	}
	
	@Then("^I enter username \"([^\"]*)\" and password \"([^\"]*)\" field$")
	public void i_enter_username_and_password_field(String username, String password) throws Throwable {
		 driver.findElement(By.xpath("//input[@id='login']")).sendKeys(username);
		 driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password); 
	}
	
	@When("^I Click Login button$")
	public void i_Click_Login_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//button[@name='submitAuth']"))));
		driver.findElement(By.xpath("//button[@name='submitAuth']")).click();
	}
	
	@Then("^I validate login is successful$")
	public void i_validate_login_is_successful() throws Throwable {
	    if (driver.findElement(By.xpath("//a[@title='Administration']")).isDisplayed()){
	    	System.out.println("Admin Login is successful");
	    }
	    else {
	    	System.out.println("Admin Login - failed");
	    }	    	
	}
	
	@Then("^I click the Administration tab$")
	public void i_click_the_Administration_tab() throws Throwable {
		driver.findElement(By.xpath("//a[@title='Administration']")).click();				
	}
	
	@When("^I click on Add a training session link$")
	public void i_click_on_Add_a_training_session_link() throws Throwable {
		driver.findElement(By.xpath("//a[contains(@href, 'session_add')]")).click();
	}
	
	@Then("^I validate Add a training session page title$")
	public void i_validate_Add_a_training_session_page_title() throws Throwable {
		expTitle = "Add a training session";
	    actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Add a training page is loaded");
	    } else {
	        System.out.println("Add a training page is not loaded");
	    }
	}
	
	@Given("^Enter session name \"([^\"]*)\" in Session name textbox$")
	public void enter_session_name_in_Session_name_textbox(String sessionname) throws Throwable {
		Random rand = new Random(); 
		strSessionName = sessionname+rand.nextInt(10000000);
		System.out.println("unique Session name : " + strSessionName);
		driver.findElement(By.xpath("//input[@id='add_session_name']")).sendKeys(strSessionName);
	}

	@Given("^Enter coach name \"([^\"]*)\" in Coach name textbox$")
	public void enter_coach_name_in_Coach_name_textbox(String coachname) throws Throwable {
		driver.findElement(By.xpath("//span[@id='select2-coach_username-container']")).click();
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(coachname);
		Robot rob=new Robot();
        Thread.sleep(3000);
        rob.keyPress(KeyEvent.VK_DOWN);
        Thread.sleep(3000);
        rob.keyPress(KeyEvent.VK_ENTER);
        Thread.sleep(3000);
        rob.keyRelease(KeyEvent.VK_DOWN);
        rob.keyRelease(KeyEvent.VK_ENTER);
	}
	
	@When("^Click on Next step button$")
	public void click_on_Next_step_button() throws Throwable {
		driver.findElement(By.xpath("//button[@id='add_session_submit']")).click();		    
	}
	
	@Then("^I validate Add Courses page title$")
	public void i_validate_Add_Courses_page_title() throws Throwable {
		expTitle = "Add courses to this session";
	    actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Add courses page is loaded");
	    } else {
	        System.out.println("Add courses page is not loaded");
	    }
	}
		
	@Given("^select course name \"([^\"]*)\" in course list window$")
	public void select_course_name_in_course_list_window(String coursename) throws Throwable {
	    Select courselist = new Select(driver.findElement(By.xpath("//select[@id='origin']")));
	    courselist.selectByVisibleText(coursename);
	}
	
	@When("^Click on > step button$")
	public void click_on_step_button() throws Throwable {
		driver.findElement(By.xpath("//button[@name='add_course']")).click();	
		    
	}
	
	@Then("^I validate added course \"([^\"]*)\" list$")
	public void i_validate_added_course_list(String coursename) throws Throwable {
		courseaddedflag = false;
		Select addedcourse = new Select(driver.findElement(By.xpath("//select[@id='destination']")));
		List<WebElement> addedcourselist = addedcourse.getOptions();
		for (WebElement course_ele:addedcourselist){
			if (course_ele.getText().equalsIgnoreCase(coursename)) {
				courseaddedflag = true;
				break;
			}
		}
		if (courseaddedflag==true) 
			System.out.println("Selected Course is added successfully");
		else if (courseaddedflag==false) 
			System.out.println("Add Course - failed");
		
	}
	
	@When("^click on Next step button in course list$")
	public void click_on_Next_step_button_in_course_list() throws Throwable {
		driver.findElement(By.xpath("//button[@name='next']")).click();	
	}
	
	@Then("^I validate Subscribe users to this session page title$")
	public void i_validate_Subscribe_users_to_this_session_page_title() throws Throwable {
		expTitle = "Subscribe users to this session";
	    actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Subscribe users to this session page is loaded");
	    } else {
	        System.out.println("Subscribe users to this session page is not loaded");
	    }
	
	}
	
	@Given("^I enter student name \"([^\"]*)\" in Portal users list$")
	public void i_enter_student_name_in_Portal_users_list(String studentname) throws Throwable {
		driver.findElement(By.xpath("//input[@id='user_to_add']")).sendKeys(studentname);
	}
	
	@Given("^click on student name \"([^\"]*)\" link$")
	public void click_on_student_name_link(String studentname) throws Throwable {
		Thread.sleep(6000);
		driver.findElement(By.xpath("//a[contains(text(),'"+studentname+"')]")).click();
	}
	
	@When("^click on Finish session creation button$")
	public void click_on_Finish_session_creation_button() throws Throwable {
		driver.findElement(By.xpath("//button[@name='next']")).click();
		expMsg = "Update successful";
	    actMsg = driver.findElement(By.xpath("//div[@class='alert alert-info']")).getText();
	    System.out.println(actMsg);
	    if(actMsg.equalsIgnoreCase(expMsg)) {
	        System.out.println("Training session created successfully");
	    } else {
	        System.out.println("Creation of training session - failed");
	    }	
	}	

	@Then("^I validate created training session \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" details$")
	public void i_validate_created_training_session_and_details(String sessionname, String coursename, String studentname) throws Throwable {
		expTitle = "Session overview";
	    actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Session Overview page title is verified");
	    } else {
	        System.out.println("Verify Session overview page title - failed");
	    }
	    
	    act_SessionName = driver.findElement(By.xpath("//h3[@class='page-header']")).getText();
	    if (act_SessionName.equalsIgnoreCase(strSessionName)) {
			System.out.println("Session name is displayed properly");
		}
		else {
			System.out.println("Session name is not displayed");
		}
	    
	    act_CourseName = driver.findElement(By.xpath("(//a[contains(@href,'courses')])[2]")).getText();
	    if (act_CourseName.equalsIgnoreCase(coursename)) {
			System.out.println("Course name is displayed properly");
		}
		else {
			System.out.println("Course name is not displayed");
		}
	    
	    act_studentName = driver.findElement(By.xpath("//a[contains(@href,'user_information')]")).getText().trim().toLowerCase();
	    System.out.println("Actual student name = "+act_studentName);
	    
		if (act_studentName.contains(studentname.trim().toLowerCase())) {
			System.out.println("Student name is added and displayed properly");
		}
		else {
			System.out.println("Student name is not added");
		}
			
	}
		
	@Then("^I enter user name and password field$")
	public void i_enter_user_name_and_password_field() throws Throwable {
		driver.findElement(By.xpath("//input[@id='login']")).sendKeys(Wrapper.getDataFromExcel(1,0));
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(Wrapper.getDataFromExcel(1,1));
	}
	
	@Given("^Enter value in Session name textbox$")
	public void enter_value_in_Session_name_textbox() throws Throwable {
		Random rand = new Random(); 
		strSessionName = Wrapper.getDataFromExcel(1,2).trim()+rand.nextInt(10000000);
		System.out.println("unique Session name : " + strSessionName);
		driver.findElement(By.xpath("//input[@id='add_session_name']")).sendKeys(strSessionName);
	}
	
	@Given("^Enter value in Coach name textbox$")
	public void enter_value_in_Coach_name_textbox() throws Throwable {
		driver.findElement(By.xpath("//span[@id='select2-coach_username-container']")).click();
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(Wrapper.getDataFromExcel(1,3));
		Robot rob=new Robot();
        Thread.sleep(3000);
        rob.keyPress(KeyEvent.VK_DOWN);
        Thread.sleep(3000);
        rob.keyPress(KeyEvent.VK_ENTER);
        Thread.sleep(3000);
        rob.keyRelease(KeyEvent.VK_DOWN);
        rob.keyRelease(KeyEvent.VK_ENTER);
	}
	
	@Given("^select coursename in course list window$")
	public void select_coursename_in_course_list_window() throws Throwable {
		Select courselist = new Select(driver.findElement(By.xpath("//select[@id='origin']")));
	    courselist.selectByVisibleText(Wrapper.getDataFromExcel(1,4));	
	
	}
	
	@Then("^I validate added courselist$")
	public void i_validate_added_courselist() throws Throwable {
		boolean courseaddedflag = false;
		Select addedcourse = new Select(driver.findElement(By.xpath("//select[@id='destination']")));
		List<WebElement> addedcourselist = addedcourse.getOptions();
		for (WebElement course_ele:addedcourselist){
			if (course_ele.getText().equalsIgnoreCase(Wrapper.getDataFromExcel(1,4))) {
				courseaddedflag = true;
				break;
			}
		}
		if (courseaddedflag==true) 
			System.out.println("Selected Course is added successfully");
		else if (courseaddedflag==false) 
			System.out.println("Add Course - failed");
		
	}
	
	@Given("^I enter studentname in Portal users list$")
	public void i_enter_studentname_in_Portal_users_list() throws Throwable {
		driver.findElement(By.xpath("//input[@id='user_to_add']")).sendKeys(Wrapper.getDataFromExcel(1,5));
	}
	
	@Given("^click on studentname link$")
	public void click_on_studentname_link() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[contains(text(),'"+Wrapper.getDataFromExcel(1,5)+"')]")).click();
	}
	
	@Then("^I validate created training session details$")
	public void i_validate_created_training_session_details() throws Throwable {
		expTitle = "Session overview";
	    actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Session Overview page title is verified");
	    } else {
	        System.out.println("Verify Session overview page title - failed");
	    }
	    
	    act_SessionName = driver.findElement(By.xpath("//h3[@class='page-header']")).getText();
	    if (act_SessionName.equalsIgnoreCase(strSessionName)) {
			System.out.println("Session name is displayed properly");
		}
		else {
			System.out.println("Session name is not displayed");
		}
	    
	    act_CourseName = driver.findElement(By.xpath("(//a[contains(@href,'courses')])[2]")).getText();
	    if (act_CourseName.equalsIgnoreCase(Wrapper.getDataFromExcel(1,4))) {
			System.out.println("Course name is displayed properly");
		}
		else {
			System.out.println("Course name is not displayed");
		}
	    
	    act_studentName = driver.findElement(By.xpath("//a[contains(@href,'user_information')]")).getText().trim().toLowerCase();
	    System.out.println("Actual student name = "+act_studentName);
	    
		if (act_studentName.contains(Wrapper.getDataFromExcel(1,5).trim().toLowerCase())) {
			System.out.println("Student name is added and displayed properly");
		}
		else {
			System.out.println("Student name is not added");
		}
	
	}
	
	@Given("^I click on Careers and promotions link$")
	public void i_click_on_Careers_and_promotions_link() throws Throwable {
	    driver.findElement(By.xpath("//a[contains(@href,'career_dashboard')]")).click();
	}
	
	@Given("^I click on careers icon$")
	public void i_click_on_careers_icon() throws Throwable {
	    driver.findElement(By.xpath("//img[@title='Careers']")).click();
	}
	
	@Given("^I click on Add icon$")
	public void i_click_on_Add_icon() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//a[contains(@href,'action=add')]"))));
		//Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(@href,'action=add')]")).click();
	}
	
	@When("^I enter Credentials in Name textbox in Careers$")
	public void i_enter_Credentials_in_Name_textbox_in_Careers() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(Wrapper.getDataFromExcel(1, 6));
	}
	
	@Then("^I click on Add button for Careers$")
	public void i_click_on_Add_button_for_Careers() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//button[@id='career_submit']"))));
		driver.findElement(By.xpath("//button[@id='career_submit']")).click();
	}
	
	@Then("^I validate success message$")
	public void i_validate_success_message() throws Throwable {
		expMsg = "Item added";
	    actMsg = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText().trim();
	    System.out.println(actMsg);
	    if(actMsg.equalsIgnoreCase(expMsg)) {
	        System.out.println("Item added - successfully verified");
	    } else {
	        System.out.println("Item added - not displayed");
	    }
	}
	
	@Given("^I navigate back to Careers and promotions link$")
	public void i_navigate_back_to_Careers_and_promotions_link() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Back']")).click();
	}
	
	@Given("^I click on Promotions icon$")
	public void i_click_on_Promotions_icon() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Promotions']")).click();
	}
	
	@When("^I enter Credentials in Name textbox in Promotions$")
	public void i_enter_Credentials_in_Name_textbox_in_Promotions() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='name']")).sendKeys(Wrapper.getDataFromExcel(1, 7));
	}
	
	@Then("^I click on Add button for Promotions$")
	public void i_click_on_Add_button_for_Promotions() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//button[@id='promotion_submit']"))));
		driver.findElement(By.xpath("//button[@id='promotion_submit']")).click();
	}
	
	
	@When("^I enter value in Name \"([^\"]*)\" textbox in Careers$")
	public void i_enter_value_in_Name_textbox_in_Careers(String careername) throws Throwable {
		driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(careername);
	}
	
	@When("^I enter value in Name \"([^\"]*)\" textbox in Promotions$")
	public void i_enter_value_in_Name_textbox_in_Promotions(String promotionsname) throws Throwable {
		driver.findElement(By.xpath("//input[@id='name']")).sendKeys(promotionsname);
	}

	@Then("^I finally close the browser$")
	public void i_finally_close_the_browser() throws Throwable {
		driver.close();
	}



}