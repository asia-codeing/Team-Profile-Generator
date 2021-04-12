//Import the backages
const inquirer = require('inquirer');
const fs       = require('fs');
//Import the classes
const Employee = require('./lib/Employee');
const Manager  = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern   = require('./lib/Intern');
const GenerateHTML = require('./template/generateHTML')

let manager = [];
let engineer = [];
let intern = [];
let employeesArr = {manager, engineer, intern};

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
            choices: ['Manager','Engineer','Intern'],
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
    ]).then(({name, id, email, role}) => {
        if (role === 'Manager'){
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message:"What is the Manager's office number?"
                },
                {
                    type:'confirm',
                    name:'nextEntery',
                    message:'Do you like to add more employee?',
                    default: false

                }
            ]).then(({office, nextEntery}) =>{
                manager.push(new Manager(name, id, email, office));
                if(nextEntery){
                    return addMember();
                }else{
                    generateFile();
                }
            })

        } else if (role === 'Engineer'){
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message:"Please enter emplyee's GitHub username: "
                },
                {
                    type:'confirm',
                    name:'nextEntery',
                    message:'Do you like to add more employee?',
                    default: false

                }
            ]).then(({github, nextEntery}) =>{
                engineer.push(new Engineer(name, id, email, github));
                if(nextEntery){
                    return addMember();
                }else{
                    generateFile();
                }
            })
        } else if (role === 'Intern'){
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message:"Please enter Intern's school:"
                },
                {
                    type:'confirm',
                    name:'nextEntery',
                    message:'Do you like to add more employee?',
                    default: false

                }
            ]).then(({school, nextEntery}) =>{
                intern.push(new Intern(name, id, email, school));
                if(nextEntery){
                    return addMember();
                }else{
                    generateFile();
                }
            })
        }
    })
    
}

const generateFile = () => {
    // employeesArr.push(manager,engineer,intern).join('');
    console.log(employeesArr);
fs.writeFile('./output/index.html', GenerateHTML(employeesArr), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});
}
    
// A function to write HTML file
// const createdFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./output/index.html', err => {
//             if (err) {
//                 reject(err);

//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message:'File created!'
//             })
//         })

// .then(() => {
//     return GenerateHTML(employeesArr)
// })
// .then(pageHTML => {
//     return createdFile(pageHTML)
// });
//     })
    
// }



// Function call to initialize app
addMember()




