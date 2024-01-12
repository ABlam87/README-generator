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
    ])
    
    .then((answers) => {

      const READMEfile = `
# ${answers.title}

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



## Usage



## License



## Contributors



## Test Instructions



## Contact

For any further questions, please email:


      `
      fs.writeFile('READMESample.md', READMEfile, (err) => 
      err? console.error(err) : console.log('success!'));

    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error;
      } else {
        console.log('Thank you!')
      }
    });

