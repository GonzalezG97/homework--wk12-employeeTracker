const mysql = require("mysql");
const util = require("util");
const App = require("../app");
require('dotenv').config();

// Database connection
const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 8080,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  app.mainMenu();
});

//This allows the code to use promises instead of callbacks
connection.query = util.promisify(connection.query);

module.exports = connection;
