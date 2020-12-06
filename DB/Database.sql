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
