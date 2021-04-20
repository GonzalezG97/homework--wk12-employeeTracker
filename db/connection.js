const mysql = require("mysql");
const util = require("util");
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../.env')});


// Database connection
const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
  if (err) console.log(err);
  console.log(`connected as id ${connection.threadId}`);
});

//This allows the code to use promises instead of callbacks
connection.query = util.promisify(connection.query);

module.exports = connection;

