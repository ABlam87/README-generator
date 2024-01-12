const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    

}

// Badges URLS

ApacheUrl = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
GNUUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
MITUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
MozillaUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' 
UnlicenseUrl = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

// function call to initialize program
// init();

inquirer
    .prompt([
        {type: 'input',
        name: 'title',
        message: "What is the title of your project?"}
    ,
        {type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project'}
    ,
        {type: 'input',
        name: 'installation',
        message: "Please provide any steps needed to install your project (write N/A if none)"}
    ,   
        {type: 'input',
        name: 'usage',
        message: "Please provide a short paragraph on the main functionality of your project"}
    ,
        {type: 'input',
        name: 'contributors',
        message: "Please name any other contributors of code for your project"}
    ,
        {type: 'input',
        name: 'email',
        message: "What is your email address?"}
    ,
        {type: 'list',
        name: 'license',
        message: 'Please select which license your project will use',
        choices: ['Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'Mozilla Public License 2.0',
        'Unlicense']
    }
    ])
    
    .then((answers) => {

    switch (answers.license) {
        case 'Apache License 2.0':
            licenseBadge = ApacheUrl
            break;
        case 'GNU General Public License v3.0':
            licenseBadge = GNUUrl
            break;
        case 'MIT License':
            licenseBadge = MITUrl
            break;
        case 'Mozilla Public License 2.0':
            licenseBadge = MozillaUrl
            break;
        case 'The Unlicense':
            licenseBadge = UnlicenseUrl
            break;
    
        default:
            break;
    }

      const READMEfile = `
# ${answers.title}

${licenseBadge}

## Description

${answers.description}

## Table of Contents

- Description
- Installation
- Usage
- License
- Contributors
- Test Instructions
- Contact

## Installation

To install the necessary dependencies type:

'''
${answers.installation}
'''

## Usage

${answers.usage}

## License

This project is license under the ${answers.license}

## Contributors

${answers.contributors}

## Test Instructions



## Contact

For any further questions, please email: ${answers.email}


      `
      fs.writeFile('READMESample.md', READMEfile, (err) => 
      err? console.error(err) : console.log('....README generated!'));

    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error;
      } else {
        console.log('Thank you!')
      }
    });

