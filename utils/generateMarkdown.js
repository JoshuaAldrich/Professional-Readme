// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "GNU GPL v3") {
    return "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (license === "Mozilla") {
    return "[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else {
    return "No Badge found.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Username](#username)
  - [Repository](#repository)
  - [Email](#email)

  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## License
  ${data.license}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Link to repository
  ${data.repository}

  ## Tests
  ${data.test}

  ### Contact
  If you need to message me contact me at ${
    data.email
  } or find my projects at ${data.username}

`;
}

module.exports = generateMarkdown;

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
