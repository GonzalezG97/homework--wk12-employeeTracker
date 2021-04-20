DROP DATABASE IF EXISTS organization_db;

CREATE DATABASE organization_db;

USE organization_db;

CREATE TABLE department (
id INTEGER PRIMARY KEY,

name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
id INTEGER PRIMARY KEY,

title VARCHAR(30) NOT NULL,

salary DECIMAL NOT NULL,

department_id INTEGER NOT NULL

CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id)
);


CREATE TABLE employee (
 id INTEGER PRIMARY KEY,

 first_name VARCHAR(30) NOT NULL,

 last_name VARCHAR(30) NOT NULL,

 role_id INTEGER(100) NOT NULL,

 CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES role(id)

 manager_id INTEGER(100)

 CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id)
);
