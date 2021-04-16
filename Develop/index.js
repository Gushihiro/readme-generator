// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Give a brief description of your project.',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Describe any packages required for the project and how to install them.',
      name: 'projectInstall',
    },
    {
      type: 'input',
      message: 'Describe how to use your application.',
      name: 'projectUse',
    },
    {
      type: 'list',
      message: 'Which license do you choose?',
      name: 'projectLicense',
      choices: [
          'BSD',
          'MIT',
          'GNU',
      ]
    },
    {
      type: 'input',
      message: 'List contributors to the project here.',
      name: 'projectContribution',
    },
    {
      type: 'input',
      message: 'Describe what the purpose of the application is.',
      name: 'projectUse',
    },
    {
      type: 'input',
      message: 'Explain how to properly test the application.',
      name: 'projectTests',
    },
    {
      type: 'input',
      message: "What's your github username?",
      name: 'projectGithub',
    },
    {
      type: 'input',
      message: "What's your email address?",
      name: 'projectEmail',
    },
    {
      type: 'input',
      message: "Any additional content you want to provide.",
      name: 'projectAdditional',
    },
  ])
  .then((response) => {
    const projectName = response.projectName;
    const projectDescription = response.projectDescription;
    const projectInstall = response.projectInstall;
    const projectUse = response.projectUse;
    const projectLicense = response.projectLicense;
    const projectTests = response.projectTests;
    const projectAdditional = response.projectAdditional;
    let licenseIcon;
    let licenseDescription;
        switch (projectLicense) {
            case "BSD":
                licenseIcon = "[![License: BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                licenseDescription = "BSD 2-Clause “Simplified” License is a permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause.";
                break;
            case "MIT":
                licenseIcon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                licenseDescription = "An MIT license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
                break;
            case "GNU":
                licenseIcon = "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                licenseDescription = "The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements."
                break;
            default:
                licenseIcon = "[![License: BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        }
    const projectContribution = response.projectContribution
    const projectGithub = response.projectGithub
    const projectEmail = response.projectEmail
    const generateReadme = 
    `
# ${projectName} Readme
${licenseIcon}
## Description
${projectDescription}
## Table of Contents
* [Top of Page](#${projectName}-readme)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [In Addition](#in-addition)
* [Questions](#questions)
## Installation
${projectInstall}
## Usage
${projectUse}
## License
${licenseDescription}
## Contributors
${projectContribution}
## Tests
${projectTests}
## In Addition
${projectAdditional}
## Questions
For any questions, refer to my [Github.](https://github.com/${projectGithub})
Or send me an email at <${projectEmail}>`
      console.log(response)
    fs.writeFile('README.md', generateReadme, (err) => {
        if (err) {
            throw err
        }
    })
  }
  );
// TODO: Create a function to write README file


// // TODO: Create a function to initialize app
// function init() {}
// //use inquirer
// //get the answers object
// //

// // Function call to initialize app
// init();
