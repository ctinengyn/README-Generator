// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

  ---

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
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

  **How can I contact you if I have any further questions?**
  ${data.email}
`;
}

module.exports = generateMarkdown;
