const mysql = require("mysql");
const inquirer = require("inquirer");
const functions = require("functions")
// // Database connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: process.env.PORT || 8080,
//   user: "root",
//   password: "",
//   database: "organization_db",
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`connected as id ${connection.threadId}`);
//   mainMenu();
// });

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
          functions.addDepartment();
          break;
        case "Add new Roles":
          functions.addRole();
          break;
        case "Add employee":
          functions.addEmployee();
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

mainMenu();
