DROP DATABASE IF EXISTS organization_db;

CREATE TABLE organization_db;

USE organization_db;

CREATE TABLE employee (
 id INTEGER PRIMARY KEY,

 first_name VARCHAR(30) NOT NULL,

 last_name VARCHAR(30) NOT NULL,

 role_id INTEGER(100) NOT NULL,

 manager_id INTEGER(100) NOT NULL,
);

CREATE TABLE role (
id INTEGER PRIMARY KEY,

title VARCHAR(30) NOT NULL,

salary DECIMAL NOT NULL,

department_id INTEGER NOT NULL,

);

CREATE TABLE department (

);