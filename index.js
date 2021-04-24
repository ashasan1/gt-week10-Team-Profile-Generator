const inquirer = require("inquirer");
const fs = require('fs');


const Worker = require("./team/worker");
const Manager = require("./team/manager");

makeManager();

let fullTeam = ["test"];


function makeManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'manager'
        },
        {
            type: 'input',
            message: 'What is your team manager email?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is the manager office number?',
            name: 'office'
        }
    ]).then( function (response) {
        const name = response.manager;
        const id = 1;
        const email = response.managerEmail;
        const office = response.office;
        const workerMember = new Manager(name, id, email, office)
        fullTeam.push(workerMember);
        console.log(fullTeam);
    });
    
}


function makeTeamHTML(input) {
    fs.writeFile("team.html"), input, (err) =>
    err ? console.error(err) : console.log(`Success!`)
};

console.log(fullTeam);
makeTeamHTML("Hello World!");
// makeTeamHTML(
//     `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
    
//     <div>
//     <h1>Team Member Position:</h1>
//     </div>
        
//     </body>
//     </html>`
//     );