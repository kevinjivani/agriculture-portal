# Agriculture Portal

## Project Description
The Agriculture Portal is a TypeScript project designed to monitor and manage crop health, irrigation systems, and other aspects of precision farming using IoT-driven sensors and automation. It consists of several modules, including Sensor Management, Crop Monitoring, and Precision Irrigation, with test cases provided for each module.

## Prerequisites
Make sure you have the following installed:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **TypeScript**: Install TypeScript globally using npm:
  ```
  npm install -g typescript

## Project Setup
1. Clone the Repository
First, clone the repository to your local machine:
```
git clone https://github.com/kevinjivani/agriculture-portal.git
```
```
cd agriculture-portal
```

2. Install Dependencies
If the project has any external dependencies (listed in package.json), install them:
```
npm install
```

3. Initialize TypeScript Configuration
If there's no tsconfig.json file, create it by running the following command:
```
tsc --init
```

This will generate a basic tsconfig.json file for TypeScript compilation settings.

## Compiling TypeScript Files
To compile the TypeScript files into JavaScript, run the following command:
```
tsc
```
This will generate JavaScript files from your TypeScript source files into a specified directory (e.g., dist/).


## Running the Application
After compiling the TypeScript files, you can run the JavaScript output using Node.js:
```
node main.js
```
Alternatively, you can run the TypeScript files directly using ts-node without having to compile:
```
ts-node src/main.ts
```
Running Test Cases
The project includes test cases for each module, located in the tests/ directory.
Compile the tests:
```
tsc
```
Run the test cases: After compiling, run the test cases for individual modules:
```
node tests/sensor.test.js
node tests/cropMonitor.test.js
node tests/precisionIrrigation.test.js
```
Or, if using ts-node, directly run the TypeScript test files:
```
ts-node tests/sensor.test.ts
ts-node tests/cropMonitor.test.ts
ts-node tests/precisionIrrigation.test.ts
```
Expected Output
```
Sensor Moisture: 50
Crop health is good!
Irrigation ON: Soil moisture is low.
```
## To run all the tests:
```
npm test
```
## GitHub CLI Setup
To use GitHub CLI, after installation, run the following command to authenticate with your GitHub account:

```
gh auth login
```

## GitHub Actions Setup

1. Create the Workflow Directory: In your repository, create a .github/workflows directory in the root of your project.

2. Create a Workflow File: Inside the .github/workflows directory, create a workflow YAML file

```
git add .github/workflows/ci.yml
git commit -m "Add GitHub Actions workflow for CI"
git push origin main
```

   I have three yml files:

   1). ci.yml
   2). newci.yml
   3). test.yml

## Screenshots of Workflow Logs and Console Output

![GitHub Actions Workflow Logs](images/workflow-logs.png)
![Jest Test Running](images/test.png)





## License
This project is licensed under the MIT License. See the LICENSE file for details.

