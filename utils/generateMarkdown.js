// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license!== "None") {
    // Filling in the white space with "%20"
    license = license.split (" ").join("%20")
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license`
  }
};

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
  * ${renderLicenseLink(data.license)}
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

  ## Contributors
  ${data.contributors}

  ---

  ${renderLicenseSection(data.license)}

  ---

  ## Badges
  ${renderLicenseBadge(data.license)}

  ---

  ## How can I contact you if I have any further questions?

  **Email:**
  ${data.email}

  **GitHub:**
  ${data.github}
`;
};

module.exports = generateMarkdown;
