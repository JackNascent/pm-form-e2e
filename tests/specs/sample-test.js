module.exports = {
  "@tags": ["local"],

  "Sample test for Public Mobile Form": function(browser) {
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
      
      // Choose main category "Other" and subcategory "Early Renewal Request", then go next
      .select_main_Other(timeout)
      .select_sub_EarlyRenewal(timeout)
      .waitForElementVisible("@problem_next", timeout)
      .click("@problem_next")

      // Select yes of the question and go next
      .waitForElementPresent("@detail_yes", timeout)
      .click("@detail_yes")
      .waitForElementVisible("@detail_next", timeout)
      .click("@detail_next")

      // Set up the verification fields  
      .input_verification(timeout)
      
      // Wait for the loading screen
      .pause(10000)

      // Check the message
      // .waitForElementVisible("@verification_ss_message", timeout)
      // .verify.containsText("@verification_ss_message", "Verification Submitted!")

      // Submit the form
      .waitForElementVisible("@form_submit_button", timeout)
      .click("@form_submit_button")

      // Dummy wait
      .pause(timeout);
  }
};
