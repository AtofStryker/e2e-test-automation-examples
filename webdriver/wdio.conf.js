const dotenv = require("dotenv");
const config = require("./config");
let browsers = require("./browsers");

const DEBUG = Number(process.env.DEBUG) || false;

// CI is a default variable set in github actions. Please see https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables
const IS_CI = process.env.CI || false;
let USE_SAUCE_LOCAL = false;

let username = "";
let accessKey = "";
const services = [];

if (!IS_CI) {
  // If local, load the variables specified in the .env file to populate TEST_URL, SAUCE_USERNAME and SAUCE_ACCESS_KEY
  dotenv.config({ path: "../.env" });
}

const USE_SAUCE = Number(process.env.USE_SAUCE) || IS_CI || false;
if (USE_SAUCE) {
  if (!IS_CI) {
    USE_SAUCE_LOCAL = true;
  } else {
    const sauceOptions = {
      name: process.env.GITHUB_REF,
      build: process.env.GITHUB_SHA,
    };
    // set the build name and number for Sauce Recordings for JSONWP and W3C capabilities
    browsers = browsers.map((browser) => {
      const optionsObj = browser["sauce:options"] || browser;

      Object.assign(optionsObj, sauceOptions);

      return browser;
    });
  }

  username = process.env.SAUCE_USERNAME || null;
  accessKey = process.env.SAUCE_ACCESS_KEY || null;

  const sauceConfig = [
    "sauce",
    {
      sauceConnect: USE_SAUCE_LOCAL,
    },
  ];
  services.push(sauceConfig);
} else {
  services.push("selenium-standalone");
}

const capabilities = USE_SAUCE
  ? browsers
  : [
      {
        maxInstances: DEBUG ? 1 : 10,
        browserName: "chrome",
        ...(DEBUG
          ? {
              "goog:chromeOptions": {
                args: [
                  `--window-size=${config.browserWidth},${config.browserHeight}`,
                  "--auto-open-devtools-for-tabs",
                ],
              },
            }
          : {}),
      },
    ];

const BASE_URL = process.env.TEST_URL;

exports.config = {
  runner: "local",
  specs: ["./specs/*.spec.ts"],
  capabilities: DEBUG ? [capabilities[0]] : capabilities,
  logLevel: "info",
  baseUrl: BASE_URL,
  waitforTimeout: config.waitForTimeout,
  connectionRetryTimeout: config.connectionRetryTimeout,
  connectionRetryCount: config.connectionRetryCount,
  services,
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    require: "ts-node/register",
    timeout: DEBUG ? 10000000000 : 300000,
  },
  ...(USE_SAUCE
    ? {
        user: username,
        key: accessKey,
      }
    : {}),
  /**
   * DEBUGGING: We can only debug one browser at a time and since we are listening on a process, we can only
   * debug one instance at a time, which means one spec file at a time:
   *
   * This port is configured in vscode launch.json to have in editor debugging
   * the REPL can always be used
   */
  ...(DEBUG ? { execArgv: ["--inspect-brk=127.0.0.1:5859"] } : {}),
  before() {
    browser.setTimeout({ pageLoad: config.pageLoadTimeout });
    browser.setTimeout({ implicit: config.implicitTimeout });
    browser.setWindowSize(config.browserWidth, config.browserHeight);
  },
};
