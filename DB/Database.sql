CREATE SCHEMA employeeDatabase;
USE employeeDatabase;
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary decimal,
departmentID INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (departmentID) REFERENCES department(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(30),
lastName VARCHAR(30),
roleID INT NOT NULL,
managerID INT,
PRIMARY KEY (id),
FOREIGN KEY (roleID) REFERENCES role(id)
);


INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

INSERT INTO role (title,salary,departmentID) VALUES ('Sales Lead',50000,1);
INSERT INTO role (title,salary,departmentID) VALUES ('Sales Person',25000,1);
INSERT INTO role (title,salary,departmentID) VALUES ('Senior Engineer',60000,2);
INSERT INTO role (title,salary,departmentID) VALUES ('Junior Engineer',30000,2);
INSERT INTO role (title,salary,departmentID) VALUES ('Account Manager',70000,3);
INSERT INTO role (title,salary,departmentID) VALUES ('Accountant',50000,3);
INSERT INTO role (title,salary,departmentID) VALUES ('Lawyer',70000,4);
INSERT INTO role (title,salary,departmentID) VALUES ('Legal Team',30000,4);

INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Lisa','Hawtin',1,1);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Corey','Samuels',3,2);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Ethan','Johnson',5,3);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Louis','Cogez',7,4);