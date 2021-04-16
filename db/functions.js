const connection = require('./connection');

class Functions {
constructor(connection){
    this.connection = connection;
}
// This is adding the answer to the department table
addDepartment (dpt) {
    return this.connection.query(
        `INSERT INTO department SET ? ${dpt}`
    )
};

addRole (role)  {
    return this.connection.query(
        `INSERT INTO role SET ? ${role}`
    )
};

addEmployee (emp)  {
    return this.connection.query(
        `INSERT INTO employee SET ? ${emp}`
    )
}

viewDepartments ()  {}

viewRoles ()  {}

viewEmployees ()  {}
}

module.exports = new Functions

