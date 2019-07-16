module.exports = {
  url:
    "https://publicmobile-get-help-staging-publicmobile.c1b9.telusdigital.openshiftapps.com/en/on/get-help/form",
  elements: {
    header: {
      selector: "h1"
    },
    title: {
      selector: "h2"
    },
    // Selectors for first part: problem
    problem_main: {
      selector: ".select-contain"
    },
    problem_subcategory: {
      selector: ".problem-buttons-grid"
    },
    problem_next: {
      selector: "#next-to-detail"
    },
    // Selectors for second part: details
    detail_next: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div.button-wrapper > button"
    },
    // selector for the third part: verification
    // Self serve selectors
    verification_ss: {
      selector:
        "#verification-card > div > div > div > div.container-buttons > button:nth-child(1)"
    },
    verification_ss_login: {
      selector: ".user-login-contain"
    },
    verification_ss_verify: {
      selector:
        "#verification-card > div > div > div > div.verification__option > div > form > div:nth-child(3) > button"
    },
    // Pin selectors
    verification_pin: {
      selector:
        "#verification-card > div > div > div > div.container-buttons > button:nth-child(1)"
    },
    verification_pin_firstName: {
      selector: ".firstName__wrap > input"
    },
    verification_pin_lastName: {
      selector: ".lastName__wrap > input"
    },
    verification_pin_phone: {
      selector: ".phone__wrap > input"
    },
    verification_pin_pin: {
      selector: ".pinNumber__wrap > input"
    },
    verification_pin_verify: {
      selector:
        "#verification-card > div > div > div > div.verification__option > div > form > div:nth-child(3) > div > button"
    },
    // SMS selectors
    verification_sms: {
      selector:
        "#verification-card > div > div > div > div.container-buttons > button:nth-child(3)"
    },
    verification_sms_phone: {
      selector: ".verify-phonenumber-form > input"
    },
    verification_sms_send: {
      selector: "#send-code-btn"
    },
    verification_sms_error: {
      selector:
        "#verification-card > div > div > div > div.verification__option > div > form > div > h3"
    },
    //3 PII selectors
    verification_3pii: {
      selector: "#verification-card > div > div > div > div.button-noverify > button"
    },
    verification_3pii_credit: {
      selector: ".creditCard__wrap > input"
    },
    verification_3pii_alternate: {
      selector: ".alternateNumber__wrap > input"
    },
    verification_3pii_account: {
      selector: ".accountNumber__wrap > input"
    },
    // General selectors
    verification_message: {
      selector: "#verification-card > h2"
    },
    form_submit_button: {
      selector: ".button-wrapper__submit > button"
    }
  },
  // Custom commands of form page
  commands: [
    {
      // Flow Operations
      // 1. Services_Add-ons
      select_service_addons(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(2)";
        const subSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(5)";
        // Detail inputs selectors
        const addon_title_input = "#add-ons-title";
        const added_date_input = "#date-added-add-on";
        const used_date_input = "#date-use-add-on";
        const no_button =
          "#details-card > div:nth-child(5) > div > button:nth-child(2)";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector, timeout)
            .click(subSelector)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Enter the infos and go next
            .waitForElementPresent(addon_title_input, timeout)
            .setValue(addon_title_input, "Worm hole teleport")
            .waitForElementPresent(added_date_input, timeout)
            .setValue(added_date_input, "002015-01-01")
            .waitForElementPresent(used_date_input, timeout)
            .setValue(used_date_input, "002075-01-01")
            .waitForElementPresent(no_button, timeout)
            .click(no_button)
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // 2. Payment_Payment issues & Enough fund but did not renew
      select_payment_paymentIssueAndEnoughFund(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(3)";
        const subSelector_one =
          this.elements.problem_subcategory.selector + " > button:nth-child(3)";
        const subSelector_second =
          this.elements.problem_subcategory.selector + " > button:nth-child(4)";
        // Detail inputs selectors
        const visa_checkbox = "label[for=payment-issue-visa]";
        const visa_error_input = "#visa-error";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector_one, timeout)
            .click(subSelector_one)
            .waitForElementVisible(subSelector_second, timeout)
            .click(subSelector_second)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Select the payment method and input its corresponding description and go next
            .waitForElementPresent(visa_checkbox, timeout)
            .click(visa_checkbox)
            .waitForElementPresent(visa_error_input, timeout)
            .setValue(
              visa_error_input,
              "You are too rich to use a visa credit card"
            )
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // 3. Rewards_Community rewards
      select_rewards_community(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(4)";
        const subSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(4)";
        // Detail inputs selectors
        const missing_input = "#community-rewards-missing";
        const month_input = "#community-rewards-missing-months";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector, timeout)
            .click(subSelector)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Enter the missing amount and missiing months and go next
            .waitForElementPresent(missing_input, timeout)
            .setValue(
              missing_input,
              "Quite a lot, enough to buy half of the world's enterprises"
            )
            .waitForElementPresent(month_input, timeout)
            .setValue(month_input, "12")
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // 4. Password_Self serve password reset
      select_password_selfserve(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(5)";
        const subSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(1)";
        // Detail inputs selectors
        const email_input = "#self-serve-password-title";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector, timeout)
            .click(subSelector)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Enter the email address and go next
            .waitForElementPresent(email_input, timeout)
            .setValue(email_input, "nobody@anywhere.com")
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // 5. SIM_Phone unlock
      select_sim_phone(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(6)";
        const subSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(4)";
        // Detail inputs selectors
        const IMEI_input = "#imei-num";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector, timeout)
            .click(subSelector)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Enter the IEMI# and go next
            .waitForElementPresent(IMEI_input, timeout)
            .setValue(IMEI_input, "987654321123456789")
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // 6. Other_Early Renewal Request
      select_other_earlyrenewal(timeout) {
        // Main and subcategory selectors
        const mainSelector =
          this.elements.problem_main.selector + " > option:nth-child(7)";
        const subSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(2)";
        // Detail inputs selectors
        const yes_checkbox = "label[for=early-renewal-check]";

        return (
          this
            // Select the corresponding flow, and go next
            .waitForElementVisible(mainSelector, timeout)
            .click(mainSelector)
            .waitForElementVisible(subSelector, timeout)
            .click(subSelector)
            .waitForElementVisible("@problem_next", timeout)
            .click("@problem_next")

            // Select yes of the question and go next
            .waitForElementPresent(yes_checkbox, timeout)
            .click(yes_checkbox)
            .waitForElementVisible("@detail_next", timeout)
            .click("@detail_next")
        );
      },
      // Verification operations
      // Self serve validation
      input_verification_ss(timeout) {
        const verification_ss_username =
          this.elements.verification_ss_login.selector +
          " > input:nth-child(1)";
        const verification_ss_password =
          this.elements.verification_ss_login.selector +
          " > input:nth-child(2)";

        return this.waitForElementVisible("@verification_ss", timeout)
          .click("@verification_ss")
          .waitForElementVisible(verification_ss_username, timeout)
          .setValue(verification_ss_username, "qa@nascentdigital.com")
          .waitForElementVisible(verification_ss_password, timeout)
          .setValue(verification_ss_password, "catch1bug")
          .waitForElementVisible("@verification_ss_verify", timeout)
          .click("@verification_ss_verify");
      },
      // Pin validation
      input_verification_pin(timeout) {
        return this.waitForElementVisible("@verification_ss", timeout)
          .click("@verification_ss")
          .waitForElementVisible("@verification_pin_firstName", timeout)
          .setValue("@verification_pin_firstName", "Robert")
          .waitForElementVisible("@verification_pin_lastName", timeout)
          .setValue("@verification_pin_lastName", "Langdon")
          .waitForElementVisible("@verification_pin_phone", timeout)
          .setValue("@verification_pin_phone", "1234567890")
          .waitForElementVisible("@verification_pin_pin", timeout)
          .setValue("@verification_pin_pin", "1234")
          .waitForElementVisible("@verification_pin_verify", timeout)
          .click("@verification_pin_verify");
      },
      // SMS validation
      input_verification_sms(timeout) {
        return this.waitForElementVisible("@verification_sms", timeout)
          .click("@verification_sms")
          .waitForElementVisible("@verification_sms_phone", timeout)
          .setValue("@verification_sms_phone", "1234567890")
          .waitForElementVisible("@verification_sms_send", timeout)
          .click("@verification_sms_send");
      },
      // 3 PII validation
      input_verification_3pii(timeout) {
        return this.waitForElementVisible("@verification_3pii", timeout)
          .click("@verification_3pii")
          .waitForElementVisible("@verification_3pii_credit", timeout)
          .setValue("@verification_3pii_credit", "1234")
          .waitForElementVisible("@verification_3pii_alternate", timeout)
          .setValue("@verification_3pii_alternate", "1234567890")
          .waitForElementVisible("@verification_3pii_account", timeout)
          .setValue("@verification_3pii_account", "123456");
      }
    }
  ]
};
