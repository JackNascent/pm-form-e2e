module.exports = {
  url: "https://publicmobile-get-help-staging-publicmobile.c1b9.telusdigital.openshiftapps.com/en/on/get-help/form",
  elements: {
    header: {
      selector: "h1"
    },
    title:{
      selector: "h2"
    },
    community: {
      selector: "#app > div > div:nth-child(2) > div > div > div > div > div > div > div.user-login-contain"
    },
    community_button: {
      selector:
        "#app > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(3) > button"
    }
  },
  commands: [
    {
      loginCommunity(timeout) {
        const community_username = this.elements.community.selector + " > input:nth-child(1)";
        const community_password = this.elements.community.selector + " > input:nth-child(2)";

        return this.waitForElementVisible(community_username, timeout)
          .setValue(community_username, "Consumer1")
          .waitForElementVisible(community_password, timeout)
          .setValue(community_password, "Catch1bug")
          .waitForElementVisible("@community_button", timeout)
          .click("@community_button");
      }
    }
  ]
};
