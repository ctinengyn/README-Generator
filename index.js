// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project:"
    },
    {
        type: "input",
        name: "install",
        message: "Describe the installation process steps if any:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide examples of how your project could be used:"
    },
    {
        type: "input",
        name: "test",
        message: "Is there a test included?"
    },
    {
        type: "rawlist",
        name: "license",
        message: "Please choose what license you would like to use for your project",
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "The Artistic License 2.0",
            "The Unlicense",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
