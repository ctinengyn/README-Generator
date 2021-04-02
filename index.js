// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "UserName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is the project name?"
    },
    {
        type: "input",
        name: "Description",
        message: "Write a brief description of your project:"
    },
    {
        type: "input",
        name: "Instsall",
        message: "Describe the installation process steps if any:"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide examples of how your project could be used:"
    },
    {
        type: "list",
        name: "License",
        messgae: "Please choose what license you would like to use for your project"
        choices: [{
            name: "Apache License 2.0"
        },
        {
            name: "The Unlicense"
        },
        {
            name: "Boost Software License 1.0"
        },
        }]
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
