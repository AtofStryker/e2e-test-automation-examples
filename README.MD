
# E2E Test Automation Examples
A repository setting up basic infrastructure with Cypress, Playwright, and Webdriver.IO to automate the testing of web applications. The flavor of this repository uses the following concepts

* Configuration based, to run locally, remotely (if applicable), or in CI via Github Actions
* Strongly Typed tests via Typescript
* Debugging configuration (via VSCode)

### Prerequisites
```
Node >= 12.x
npm >= 6.x
Java >= 14.x
```
A `.env` configuration is needed in certain cases, such as to run again SauceLabs with WebdriverIO. Please contact the author for details.
### Getting Started
##### install the required dependencies for Cypress, Playwright, and Webdriver.IO
```
npm install
```

## Cypress
Cypress is a modern web testing framework that has a lot of benefits over traditional Selenium based testing. Please read more about it on [cypress.io](https://www.cypress.io/). To get started, Please read about the more about our [Cypress Configuration](cypress)

## Playwright
Playwright is a Node.js library used to automate testing for various different browsers. It is very similar to Puppeteer. Please read more about [Playright](https://github.com/microsoft/playwright). To get started, Please read about the more about our [Playwright Documentation](playwright)

## WebdriverIO
Playwright is a Node.js library used to automate testing for various different browsers, typically using Selenium under the hood. Please read more about [WebdriverIO](https://webdriver.io/). To get started, Please read about the more about our [Webdriver Documentation](webdriver)