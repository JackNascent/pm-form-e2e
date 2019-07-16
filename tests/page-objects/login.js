module.exports = {
  url: "https://publicmobile-get-help-staging-publicmobile.c1b9.telusdigital.openshiftapps.com/en/on/get-help/form",
  elements: {
    header: {
      selector: "h1"
    },
    title:{
      selector: "h2"
    },
    community_username: {
      selector: "#lithium-username"
    },
    community_password: {
      selector: "#lithium-password"
    },
    community_button: {
      selector:
        "#lithium-login-button"
    }
  },
  commands: [
    {
      loginCommunity(timeout) {
        return this.waitForElementVisible("@community_username", timeout)
          .setValue("@community_username", "Consumer1")
          .waitForElementVisible("@community_password", timeout)
          .setValue("@community_password", "Catch1bug")
          .waitForElementVisible("@community_button", timeout)
          .click("@community_button");
      }
    }
  ]
};
