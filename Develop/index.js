// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
console.log(inquirer)
console.log(fs)
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
          'default',
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
      message: 'Describe how to use your application.',
      name: 'projectUse',
    },
    {
      type: 'input',
      message: "What's your github username?",
      name: 'projectGithub',
    },
  ])
  .then((response) => {
    const projectName = response.projectName
    const projectDescription = response.projectDescription
    const projectInstall = response.projectInstall
    const projectUse = response.projectUse
    const projectLicense = response.projectLicense
        switch (projectLicense) {
            case "BSD":
                let licenseIcon = [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
                break;
            case "MIT":
                let licenseIcon = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
                break;
            case "GNU":
                let licenseIcon = [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
                break;
            default:
                let licenseIcon = [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
        }
    const projectContribution = response.projectContribution
    const projectGithub = response.projectGithub
    const generateReadme = 
    `
# ${projectName} Readme <a name="readme"></a>
## Description <a name="description"></a>
        ${projectDescription}
## Table of Contents
* [Top of Page](#readme)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributor)
* [Tests](#tests)
* [Questions](#questions)
## Installation <a name="installation"></a>
        ${projectInstall}
## Usage <a name="usage"></a>
        ${projectUse}
## License <a name="license"></a>
        ${projectLicense}
## Contributors <a name="contributor"></a>
        ${projectContribution}
## Tests <a name="tests"></a>
    
## Questions <a name="questions"></a>
        For any questions, refer to my [Github.](https://github.com/${projectGithub})`
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
