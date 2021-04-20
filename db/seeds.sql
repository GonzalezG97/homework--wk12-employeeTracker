INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 160000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Garza", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Madison", "Vega", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gustavo", "Gonzalez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeremy", "ProCoder", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pete", "Davison", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bruce", "Wayne", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Dick", "Grayson", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tim", "Drake", 8, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Barbara", "Gordon", 5, null);
INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES ("Oscar", "Kitty", 6, null);