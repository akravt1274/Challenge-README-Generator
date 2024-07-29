// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'Apache 2.0 License':
      badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'Boost Software License 1.0':
      badge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
      break;
    case 'ISC License (ISC)':
      badge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg';
      break;
    case 'Eclipse Public Licens 2.0':
      badge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg';
      break;
    case 'The MIT License':
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    default:
      badge = '';
  }  
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url = '';  
  switch (license) {
    case 'Apache 2.0 License':
      url = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License 1.0':
      url = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'ISC License (ISC)':
      url = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'Eclipse Public Licens 2.0':
      url = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'The MIT License':
      url = 'https://opensource.org/licenses/MIT';
      break;
    default:
      url = '';
  }  
  return url;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const url = renderLicenseLink(license);
  const licenseSection = `The application is covered under [${license}](${url}).`
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license = renderLicenseSection(data.license);

  if (badge != '' && license != '') {
    return `# ${data.title} ![license badge](${badge})
  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${license}

## Contributing
${data.contribution}

## Tests
To test application run the following commands in the terminal:
${data.test}

## Questions
Reach out with additional questions:
   
Email: ${data.email}

GitHub: [${data.github}](${data.github_url}).
`;
  } else {
    return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
To test application run the following commands in the terminal:
${data.test}

## Questions
Reach out with additional questions:
   
Email: ${data.email}

GitHub: [${data.github}](${data.github_url}).
`;
  }
}

module.exports = generateMarkdown;
