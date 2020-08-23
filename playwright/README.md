# Playwright E2E Tests

A quick guide to getting up and running with Playwright locally

### Prerequisites

* Knowledge of npm script execution
* Node >= 12
* npm >= 6

## Execution
  Set a testing url.

    ```bash
    export TEST_URL=<YOUR_TESTING_URL>
    ```

  To run tests locally, please run the command npm run _`test:e2e:playwright`_. Each browser in the `jest-playwright.config.js` should be seen and simulated (headed)

## Debugging with VSCode
- To debug Playwright locally, a `.vscode/launch.json` file can be used to have in-editor debugging that looks very similar to this:
```
  {
    "type": "node",
    "request": "launch",
    "name": "PlayWright Debug",
    "program": "${workspaceFolder}/node_modules/jest/bin/jest",
    "args": ["--runInBand", "--watch", "--no-cache"],
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen"
  }
```
