const inquirer = require("inquirer");
const fs = require('fs');

let fullTeam = [];

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

// function makeManager() {
//     inquirer.prompt(managerQuestions).then(function (response) {
//         let teamManager = `${response.manager}`;
//         fullTeam.push(teamManager);
//     }
//     )};

function makeManager() {
    inquirer.prompt(managerQuestions).then( function (response) {
        const teamManager = `${response.manager}`;
        fullTeam.push(teamManager);
    })
}



// function makeCard(member,input) {
//     fs.writeFile(`${member}.html`, input, (err) =>
//     err ? console.error(err) : console.log(`Success!`)
//     )
// }

function makeTeamHTML(input) {
    fs.writeFile(`team.html`), input, (err) =>
    err ? console.error(err) : console.log(`Success!`)
}

makeManager();
makeTeamHTML(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    <div>
    <h1>Team Member Position: </h1>
    </div>
        
    </body>
    </html>`
    );