//Import the backages
const inquirer = require('inquirer');
const fs       = require('fs');
//Import the classes
const Employee = require('./lib/Employee');
const Manager  = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern   = require('./lib/Intern');


function addMember(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name:"
        },
        {
            type: 'list',
            name: 'role',
            choices: ['Manager',' Engineer','Intern'],
            message: "Select team member's role"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter team member's ID:"
        },

        {
        type: 'input',
        message: "Enter team member's email address",
        name: "email"
        }
    ])


    }


}
