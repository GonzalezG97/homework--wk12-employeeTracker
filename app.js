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
