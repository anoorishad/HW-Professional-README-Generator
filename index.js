// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License type:',
        choices: ['MIT', 'B', 'C','D']
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    }
]).then(function ({title,description,installation,usage,contribution,tests,license,github,email}) {
    
    // console.log(title,description,installation,usage,contribution,tests,license,github,email);

    let generatedReadme = generateMarkdown({title,description,installation,usage,contribution,tests,license,github,email});

    console.log(generatedReadme);

    fs.writeFileSync('testme.md' , generatedReadme)

})