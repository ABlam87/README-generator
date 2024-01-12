// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ${licenseBadge}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Contact](#contact)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  This project is license under the ${answers.license}
  
  ## Contributors
  
  ${answers.contributors}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${answers.test}
  \`\`\`
  
  ## Contact
  
  For any further questions, please 
  - email me at: ${answers.email}
  - contact me via my Github profile: https://github.com/${answers.username}
   `
}

module.exports = generateMarkdown;
