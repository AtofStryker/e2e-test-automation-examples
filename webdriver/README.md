# WebdriverIO E2E Tests

A quick guide to getting up and running with the Webdriver.io locally or against SauceLabs

### Prerequisites

* Sauce Credentials (Optional)
* Knowledge of npm script execution
* Node >= 12
* npm >= 6
* Java >= 14

## Setting up Webdrivers

- Java and the Java Compiler need to be installed. To verify, you can type `java --version` and `javac --version` into a Mac/Unix terminal. Java installs can be found [here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or can be installed with [homebrew](../README.md#system-requirements) via `brew cask install java`.

- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) needs to be installed. This can be installed with [homebrew](../README.md#system-requirements) via `brew cask install chromedriver` or can be downloaded and extracted into the binary path.
    Setting up chromedriver for the current user with a downloaded binary:
	  ```bash
    sudo mv ~/Downloads/chromedriver /usr/local/bin/chromedriver
    ```
    To verify install and setup was successful:
	  ```bash
    chromedriver --version
    ```

- SafariDriver is installed and set up with any modern install of safari. It can be turned on by typing `safaridriver --enable` into the terminal. You may need to turn on remote automation for webdriver execution. To enable, navigate to `Develop > Allow Remote Automation` under the safari application bar. NOTE: SafariDriver can only run one instance at a time and can not be interrupted or interfered with while it is automating a browser.

## Execution
* Set a testing url within the `.env` file in the root directory.

    ```bash
    TEST_URL=<YOUR_TESTING_ADDRESS>
    ```
    For example, YOUR_TESTING_ADDRESS being your localhost (**http://127.0.0.1:8000**)

    NOTE: Due to a bug in SauceConnect, running SauceConnect with the name `localhost` prompts the use
    of the local selenium standalone server, causing timeouts and slow performance. Please use `127.0.0.1` to avoid this issue.
    See this [issue](https://github.com/webdriverio/webdriverio/issues/3754) for additional details

* If using sauce, set the following within the `.env` file in the root directory:

    ```bash
    SAUCE_USERNAME=<YOUR_SAUCE_USERNAME>
    SAUCE_ACCESS_KEY=<YOUR_SAUCE_ACCESS_KEY>
    ```
* To run locally against sauce with `browsers.js` configuration (IE, chrome, safari), execute _`npm run test:e2e:webdriver`_ from the root directory with the `USE_SAUCE` env variable set to `1`. No additional set up is required.

* To run tests locally against chrome, execute _`npm run test:e2e:webdriver`_ from the root directory. To have these run successfully, you will need to have local webdrivers set up. Please read [Setting up Webdrivers](#setting-up-webdrivers) to accomplish this.

## Debugging with VSCode
- To debug webdriverIO locally, a `.vscode/launch.json` file can be used to have in-editor debugging that looks very similar to this:
```
  {
    "type": "node",
    "request": "launch",
    "name": "WebdriverIO Debug",
    "protocol": "inspector",
    "port": 5859,
    "timeout": 10000,
    "program": "${workspaceRoot}/node_modules/@wdio/cli/bin/wdio.js",
    "cwd": "${workspaceFolder}/webdriver",
    "args": ["wdio.conf.js"],
    "autoAttachChildProcesses": true,
    "console": "integratedTerminal",
    "env": {
        "DEBUG": "1"
        // use an environment variable to be able
        // to toggle debug mode on and off
    }
  }
```
