# Telnyx Automation Project

## Introduction
This project is a comprehensive automated testing framework designed for the Telnyx website. The primary objective is to ensure the reliability and quality of critical user interfaces and functional flows by implementing robust end-to-end (E2E) automated tests. This project serves as a capstone demonstration of modern QA automation practices, integrating advanced tooling for continuous testing and reporting.

## Tech Stack
* Framework: WebdriverIO
* Language: JavaScript (Node.js)
* Architecture: Page Object Model (POM)
* Reporting: Allure Report
* CI/CD: GitHub Actions & GitHub Pages
* Containerization: Docker

### Core devDependencies
* `@wdio/cli`, `@wdio/local-runner`, `@wdio/mocha-framework`, `@wdio/spec-reporter`
* `@wdio/allure-reporter`
* `allure-commandline`

## Project Structure
The project follows a clean, modular structure to ensure maintainability and scalability:

- .github/workflows/main.yml: Configuration for the CI/CD pipeline.
- test/pages/: Contains Page Object Model classes representing different pages of the Telnyx website (e.g., HomePage, VoiceAIPage, PricingAIPage, SignUpPage).
- test/specs/: Contains the actual test specifications (e.g., test.e2e.js) that execute the user journeys.
- wdio.conf.js: The base configuration file for WebdriverIO.
- wdio.chrome.conf.js: Configuration specifically for Chrome browser execution.
- wdio.firefox.conf.js: Configuration specifically for Firefox browser execution.
- package.json: Lists project dependencies and defines custom npm scripts for test execution.
- Dockerfile: Docker image configuration for isolated environment execution.
- README.md: This documentation file.

## Key Features
* Page Object Model (POM): Decouples test logic from the page elements, making the framework easier to maintain and extend.
* Cross-Browser Testing: Configured to support automated testing in both Chrome and Firefox.
* Integrated Reporting: Utilizes Allure Report to generate detailed, visually intuitive test results, including automated screenshot capture for failed test cases.
* Automated CI/CD Pipeline: Uses GitHub Actions to run tests in isolated Docker environments on every push, ensuring consistent results and automatic deployment of test reports to GitHub Pages.

## Configuration
The framework uses dynamic headless mode configuration:
* Locally: headless: false for visual debugging.
* In CI/Docker: headless: true for efficient and stable execution.

## Docker Setup
This project is containerized to ensure consistent testing environments across all machines and CI pipelines.
```bash
# Build the Docker image
docker build -t telnyx-tests .

# Run tests in the container
docker run --rm telnyx-tests
```

## CI/CD Pipeline
The project is automatically tested on every push to the main or master branches. The pipeline includes:
* Dependency and browser installation.
* Running tests in headless mode.
* Generating the Allure Report.
* Deploying the report to GitHub Pages.

## Getting Started

### Prerequisites
* Node.js (v18 or later)
* npm

### Installation
1. Clone the repository:
   `git clone https://github.com/GodMaxim/TelnyxTest-Webdriver-.git` 
2. Navigate to the project directory:
   `cd "Telnyx (Webdriver)"`
3. Install the dependencies (this will automatically pull all WebdriverIO CLI, runner, framework, and Allure reporter packages from your package.json):
   `npm install`

## Execution & Report Generation
* Run all tests:
  `npm test`
* Run specific E2E test file:
  `npm run test:single`
* Run tests in Chrome:
  `npm run test:chrome`
* Run tests in Firefox:
  `npm run test:firefox`
* Generate Allure Report locally:
  `npm run allure:generate`
* Open Allure Report:
  `npm run allure:open`