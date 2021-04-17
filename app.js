const mysql = require("mysql");
const inquirer = require("inquirer");
const functions = require("./db/functions");

// Prompts
const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do?",
        name: "direction",
        choices: ["Add new", "View current", "Update roles", "I'm done"],
      },
    ])
    .then((answer) => {
      switch (answer.direction) {
        case "Add new":
          addMenu();
          break;
        case "View current":
          viewMenu();
          break;
        case "Update roles":
          updateRoles();
          break;
        case "I'm done":
          connection.end();
          break;
      }
    });
};

const addMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to add?",
        name: "addWhat",
        choices: [
          "Add new Department",
          "Add new Roles",
          "Add employee",
          "Go back",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.addWhat) {
        case "Add new Department":
          createDepartment();
          break;
        case "Add new Roles":
          createRole();
          break;
        case "Add employee":
          createEmployee();
          break;
        case "Go Back":
          mainMenu();
          break;
      }
    });
};

const viewMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to view?",
        name: "view",
        choices: ["View Departments", "View Roles", "View Employee", "Go Back"],
      },
    ])
    .then((answer) => {
      switch (answer.view) {
        case "View Departments":
          functions.viewDepartments();
          break;
        case "View Roles":
          functions.viewRoles();
          break;
        case "View Employee":
          functions.viewEmployees();
          break;
        case "Go Back":
          mainMenu();
          break;
      }
    });
};

const updateRoles = () => {};

// These prompts handle all my creation inputs
async function createDepartment() {
  const newDepartment = await inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the department?",
      name: "dptName",
    },
  ]);

  await functions.addDepartment(newDepartment);
  await console.log('Department created!');
};

async function createRole() {
  const newRole = await inquirer.prompt([
    {
      type: "input",
      message: "What is the role title?",
      name: "roleTitle",
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "roleSalary",
    },
    {
      type: "input",
      message: "What is the Department ID that is connected to this role?",
      name: "roleDptID",
    },
  ]);

  await functions.addRole(newRole);
  await console.log('Role has been created!')
};

async function createEmployee() {
  const newEmployee = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name?",
      name: "empFirstName",
    },
    {
      type: "input",
      message: "What is the employees last name?",
      name: "empLastname",
    },
    {
      type: "input",
      message: "What is the role Id connected to this employee?",
      name: "empRID",
    },
    {
      type: "input",
      message: "What is the Manager ID that is connected to this employee?"
    },
  ]);

  await functions.addEmployee(newEmployee);
  console.log('You created a new Employee!');
};
