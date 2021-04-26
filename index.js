const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");

const render = require("./team/htmlCreate");


const Employee = require("./team/employee");
const Manager = require("./team/manager");
const Intern = require("./team/intern");
const Engineer = require("./team/engineer");
// const { Http2ServerRequest } = require("http2");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "fullTeam.html");

const fullTeam = [];

function nextEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Who else would you like to add to the team?",
          name: "name",
          choices: ["Intern", "Engineer", "Done"],
        },
      ])
      .then((response) => {
        if (response.name === "Intern") {
          makeIntern();
        } else if (response.name === "Engineer") {
          makeEngineer();
        } else {
          createTeam();
        }
      });
  }




function makeManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is your team manager's email?",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerOffice'
        },
        {
            type: 'input',
            message: "What is the manager's id number?",
            name: 'managerId'
        }
    ]).then( function (response) {
        const name = response.managerName;
        const id = response.managerId;
        const email = response.managerEmail;
        const office = response.managerOffice;
        const teamManager = new Manager(name, id, email, office)
        fullTeam.push(teamManager);
        nextEmployee();

    });
    
};

function makeIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: "internName",
            message: "What is the team intern's name?"
        },
        {
            type: 'input',
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type:'input',
            name: "internId",
            message: "What is the intern's id number?"
        },
        {
            type: 'input',
            name: "internSchool",
            message:"What school does the intern attend?"
        },
    ]).then( function (response) {
        const name = response.internName;
        const email = response.internEmail;
        const school = response.internSchool;
        const id = response.internId;
        const teamIntern = new Intern(name,id,email,school);
        fullTeam.push(teamIntern);
        nextEmployee();
    })
};

function makeEngineer() {
inquirer.prompt([
    {
        type:'input',
        name: "engineerName",
        message: "What is the team engineer's name?"
    },
    {
        type:'input',
        name: "engineerEmail",
        message: "What is the team engineer's email address?"
    },
    {
        type:'input',
        name: "engineerGithub",
        message: "What is the team engineer's github?"
    },
    {
        type:'input',
        name: "engineerId",
        message: "What is the team engineer's id?"
    },
]).then(function (response) {
     const name = response.engineerName;
        const email = response.engineerEmail;
        const github = response.engineerGithub;
        const id = response.engineerId;
        const teamEngineer = new Intern(name,id,email,github);
        fullTeam.push(teamEngineer);
        nextEmployee();
});
};

function createTeam(){
    console.log("Your team was successfully created!")
    fs.writeFileSync(outputPath, render(fullTeam), "utf8");
  };

makeManager(); 
  
