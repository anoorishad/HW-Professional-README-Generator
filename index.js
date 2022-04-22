// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select license type.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }
])