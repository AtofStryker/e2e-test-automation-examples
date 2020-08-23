module.exports = [
  /**
   * IE 11, due to its age, must use the JSON Wire Protocol
   * See https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol for more details
   *
   * There are some additional options here to reduce flakiness by what IE webdriver is responsible for.
   * See https://sqa.stackexchange.com/questions/9496/webdriver-clicking-button-issue-in-ie-11 for more details
   */
  {
    browserName: "internet explorer",
    platform: "Windows 10",
    version: "11.103",
    screenResolution: "1920x1080",
    nativeEvents: false,
    unexpectedAlertBehaviour: "accept",
    ignoreProtectedModeSettings: true,
    "disable-popup-blocking": true,
    enablePersistentHover: true,
    ignoreZoomSetting: true,
  },
  {
    browserName: "chrome",
    platformName: "macOS 10.12",
    browserVersion: "latest-2",
    "sauce:options": {
      screenResolution: "1920x1440",
    },
  },
  /**
   * IMPORTANT: any version greater than safari 11.1 no longer supports JSON Wire Protocol
   *
   * The format of the below JSON is for the W3C standard, which is inferred by the
   * object keys by webdriver.io
   *
   * See the W3C protocol https://w3c.github.io/webdriver/#capabilities
   * See https://github.com/webdriverio/webdriverio/issues/4945 for more details on safari capabilities
   */
  {
    browserName: "safari",
    platformName: "macOS 10.13",
    browserVersion: "12.1",
    "sauce:options": {
      screenResolution: "1920x1440",
    },
  },
];
