// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
            message: "Provide project title:",
        validate(title) {
        if (title != '' || title != null) {
            return true;
        }
        return 'Please enter project title';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide project description:",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide installation instructions:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide usage information:",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Provide contribution guidelines:",
    },
    {
        type: 'input',
        name: 'test',
        message: "Provide test instructions:",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for an application:',
        choices: ['Apache 2.0 License',
            'Boost Software License 1.0',
            'ISC License (ISC)',
            'Eclipse Public Licens 2.0',
            'The MIT License',
            'The Unlicense',
            'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: "Provide GitHub username:",
    },
    {
        type: 'input',
        name: 'github_url',
        message: "Provide link to your GitHub profile:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Provide email address:",
        validate(email) {
        if (email.includes("@")) {
            return true;
        }
        return 'Please enter valid email address';
        },
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully');
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('./README.md', answers);
        });
}

// Function call to initialize app
init();