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
    problem_main: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div.container__card.sc-htoDjs.eeTTFx > select"
    },
    problem_subcategory: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div.container__card.sc-htoDjs.eeTTFx > div.problem-buttons-grid"
    },
    problem_next: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div.container__card.sc-htoDjs.eeTTFx > div.button-wrapper > button"
    },
    detail_yes: {
      selector: "#verification-card > div.form-field > div > label"
    },
    detail_next: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div.button-wrapper > button"
    },
    verification_ss: {
      selector:
        "#verification-card > div > div > div > div.container-buttons > button:nth-child(1)"
    },
    verification_ss_login: {
      selector:
        "#verification-card > div > div > div > div.verification__option > div > form > div.user-login-contain"
    },
    verification_ss_verify: {
      selector:
        "#verification-card > div > div > div > div.verification__option > div > form > div:nth-child(3) > button"
    },
    verification_ss_message: {
      selector: "#verification-card > h2"
    },
    form_submit_button: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(4) > div > button"
    }
  },
  commands: [
    {
      select_main_Other(timeout) {
        const theSelector =
          this.elements.problem_main.selector + " > option:nth-child(7)";

        return this.waitForElementVisible(theSelector, timeout).click(
          theSelector
        );
      },
      select_sub_EarlyRenewal(timeout) {
        const theSelector =
          this.elements.problem_subcategory.selector + " > button:nth-child(2)";

        return this.waitForElementVisible(theSelector, timeout).click(
          theSelector
        );
      },
      input_verification(timeout) {
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
      }
    }
  ]
};
