/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "User Name",
    message: "What is your Name? (required)",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please provide your name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (required)",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please provide an email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Project Name",
    message: "What is your Project Name? (required)",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please provide an Project Name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Project Name",
    message: "What is your Project Name? (required)",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please provide and Project Name.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been created.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}
// Function call to initialize app
init();
