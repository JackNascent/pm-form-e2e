module.exports = (function(settings) {
  settings.test_workers = false;
  settings.custom_commands_path = "node_modules/nightwatch-vrt/commands";
  settings.custom_assertions_path = "node_modules/nightwatch-vrt/assertions";
  settings.test_settings.default.globals.visual_regression_settings.generate_screenshot_path = () =>
    function generateScreenshotFilePath(nightwatchClient, fileName) {
      const moduleName = nightwatchClient.currentTest.module,
        testName = nightwatchClient.currentTest.name;

      return path.join(
        process.cwd(),
        settings.test_settings.default.globals.visual_regression_settings.generate_screenshot_path,
        moduleName,
        testName,
        fileName
      );
    };

  return settings;
})(require("./nightwatch.json"));
