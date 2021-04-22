const inquirer = require("inquirer");
const fs = require('fs');

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager'
    },
    {
        type: 'input',
        message: 'What is your team manager email?',
        name: 'managerEmail',
    }
];


// inquirer.prompt(teamQuestions).then((response))

function makeManager() {
    inquirer.prompt(managerQuestions).then((response) =>
    makeCard("manager", 
    `Name of Team Member: ${response.manager} 
    Email of Team Member: ${response.managerEmail}`)
    )
}

function makeCard(member,input) {
    fs.writeFile(`${member}.html`, input, (err) =>
    err ? console.error(err) : console.log(`Success!`)
    )
}