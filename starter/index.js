const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {type: 'input',
        name: 'username',
        message: "What is your Github username?"}
    ,
        {type: 'input',
        name: 'email',
        message: "What is your email address?"}
    ,
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
        message: "Please provide any steps needed to install your project",
        default: 'N/A'}
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
        name: 'test',
        message: "Please type the command used to run a test of your project",
        default: 'npm test'}
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
];

// Badges URLS

ApacheUrl = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
GNUUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
MITUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
MozillaUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' 
UnlicenseUrl = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

// Inquirer functions
inquirer
    .prompt(questions)
    
    .then((answers) => {
    
    // Determines which badge should be used
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
        case 'Unlicense':
            licenseBadge = UnlicenseUrl
            break;
    
        default:
            break;
    }

    // writes user inputs to a file template
      const READMEfile = generateMarkdown(answers);
      
    // creates readme from template
    fs.writeFile('ProjectREADME.md', READMEfile, (err) => 
      err? console.error(err) : console.log('....README generated!'));

    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error;
      } else {
        console.log('Something went wrong, please try again!')
      }
    });

