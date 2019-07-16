module.exports = {
    "@tags": ["local"],
  
    "Test for Public Mobile Form: Other": function(browser) {
      // eslint-disable-line func-names
      const timeout = 10000;
      const FormPage = browser.page.form();
      const LoginPage = browser.page.login();
      const header = "@header";
      const title = "@title";
  
      // Navigate to the staging form page
      LoginPage.navigate()
  
        // Test the heading
        .waitForElementVisible(header)
        .verify.elementPresent(header)
        .verify.containsText(header, "Submit a ticket")
  
        // Test the heading
        .waitForElementVisible(title)
        .verify.elementPresent(title)
        .verify.containsText(
          title,
          "Please login with your Community account to complete your ticket"
        )
  
        // Try to login
        .loginCommunity(timeout);
      
      // Now it should be in the form
      FormPage
  
        // Test the heading
        .waitForElementVisible(header)
        .verify.containsText(header, "Submit a ticket")
  
        // Test the heading
        .waitForElementVisible(title)
        .verify.containsText(
          title,
          "1. Select an issue category"
        )
        
        // Flow operation
        .select_password_selfserve(timeout)
  
        // Set up the verification fields  
        .input_verification_pin(timeout)
        
        // Wait for the loading screen
        .pause(timeout)
  
        // Check the message
        .waitForElementVisible("@verification_message", timeout)
        .verify.containsText("@verification_message", "Verification Submitted!")
  
        // Submit the form
        .waitForElementVisible("@form_submit_button", timeout)
        .click("@form_submit_button");
    }
  };
  