package stepdefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Training_StepDefinitions {
	WebDriver driver;
	public static String selstudentname;
	
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
		String expTitle = "Add a training session";
	    String actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Add a training page is loaded");
	    } else {
	        System.out.println("Add a training page is not loaded");
	    }
	}
	
	@Given("^Enter session name \"([^\"]*)\" in Session name textbox$")
	public void enter_session_name_in_Session_name_textbox(String sessionname) throws Throwable {
		driver.findElement(By.xpath("//input[@id='add_session_name']")).sendKeys(sessionname);
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
		String expTitle = "Add courses to this session";
	    String actTitle = driver.getTitle();
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
		boolean courseaddedflag = false;
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
		String expTitle = "Subscribe users to this session";
	    String actTitle = driver.getTitle();
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
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[contains(text(),'"+studentname+"')]")).click();
		
		
	}
	
	@When("^click on Finish session creation button$")
	public void click_on_Finish_session_creation_button() throws Throwable {
		driver.findElement(By.xpath("//button[@name='next']")).click();
		String expMsg = "Update successful";
	    String actMsg = driver.findElement(By.xpath("//div[@class='alert alert-info']")).getText();
	    System.out.println(actMsg);
	    if(actMsg.equalsIgnoreCase(expMsg)) {
	        System.out.println("Training session created successfully");
	    } else {
	        System.out.println("Creation of training session - failed");
	    }	    
	}	

	@Then("^I validate created training session \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" details$")
	public void i_validate_created_training_session_and_details(String sessionname, String coursename, String studentname) throws Throwable {
		String expTitle = "Session overview";
	    String actTitle = driver.getTitle();
	    System.out.println(actTitle);
	    if(actTitle.contains(expTitle)) {
	        System.out.println("Session Overview page title is verified");
	    } else {
	        System.out.println("Verify Session overview page title - failed");
	    }
	    
	    String act_SessionName = driver.findElement(By.xpath("//h3[@class='page-header']")).getText();
	    if (act_SessionName.equalsIgnoreCase(sessionname)) {
			System.out.println("Session name is displayed properly");
		}
		else {
			System.out.println("Session name is not displayed");
		}
	    
	    String act_CourseName = driver.findElement(By.xpath("(//a[contains(@href,'courses')])[2]")).getText();
	    if (act_CourseName.equalsIgnoreCase(coursename)) {
			System.out.println("Course name is displayed properly");
		}
		else {
			System.out.println("Course name is not displayed");
		}
	    
	    String act_studentName = driver.findElement(By.xpath("//a[contains(@href,'user_information')]")).getText().trim().toLowerCase();
	    System.out.println("Actual student name = "+act_studentName);
	    
		if (act_studentName.contains(studentname.trim().toLowerCase())) {
			System.out.println("Student name is added and displayed properly");
		}
		else {
			System.out.println("Student name is not added");
		}
			
	}
	
}