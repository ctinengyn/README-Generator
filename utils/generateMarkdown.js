// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (data.license) {
    case "Apache 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case "Boost Software License 1.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;

    case "The Artistic License 2.0":
    licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      break;

    case "The Unlicense":
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    break;
    default:
    break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectTitle}

  ## Description
  ${data.description}

  ---

  ## Table of Contents
  * [Installation](#install)
  * [Usage](#usage)
  * [Test](#test)
  * [License](#license)
  * [Contributors](#contributors)
  
  ---

  ## Installation
  ${data.install}

  ---

  ## Usage
  ${data.usage}

  ---

  ## Test
  ${data.test}

  ---

  ## License
  ${data.license}

  ---

  ## Contributors
  ${data.contributors}

  ## Badges
  

  **How can I contact you if I have any further questions?**

  **Email: ${data.email}**
  **GitHub: ${data.github}**
`;
}

module.exports = generateMarkdown;
