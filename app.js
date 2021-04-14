const mysql = require("mysql");
const inquirer = require("inquirer");

// Database connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "",
  database: "",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  mainMenu();
});

// Prompts
const mainMenu = () => {
    inquirer
        .prompt([
            {
            type: 'list',
            message: 'What do you want to do?',
            name: 'direction',
            choices: ['Add new', 'View current', 'Update roles']
            },
        ]).then(answer => {
            switch (answer.direction) {
                case 'Add new':
                    addMenu();
                    break;
                case 'View current':
                    viewMenu();
                    break;
                case 'Update roles':
                    updateRoles();
                    break;                
            }
        });
};

const addMenu = () => {
    inquirer
        .prompt([
            {
            type: 'list',
            message: 'What do you want to add?',
            name: 'addWhat',
            choices: ['Add new Department', 'Add new Roles', 'Add employee']
            },
        ]).then(answers => {
            switch (answers.addWhat) {
                case 'Add new Department':
                  addDepartment();
                  break;
                case 'Add new Roles':
                  addRoles();
                  break;
                case 'Add employee':
                  addEmployee();
                  break;
              }
        })
};

const viewMenu = () => {
    inquirer
        .prompt([
            {
            type: 'list',
            message: 'What do you want to view?',
            name: 'view',
            choices: ['View Departments', 'View Roles', 'View Employee']
            },
        ]).then(answer => {
            switch (answer.view {
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Employee':
                    viewEmployee();
                    break;                
            }
        });
};

const updateRoles = () => {

};