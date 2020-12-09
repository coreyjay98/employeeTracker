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


INSERT INTO department (name) VALUES ('Sales'); -- 1
INSERT INTO department (name) VALUES ('Engineering'); -- 2
INSERT INTO department (name) VALUES ('Finance'); -- 3
INSERT INTO department (name) VALUES ('Legal'); -- 4

INSERT INTO role (title,salary,departmentID) VALUES ('Sales Lead',50000,1); -- 1
INSERT INTO role (title,salary,departmentID) VALUES ('Sales Person',25000,1); -- 2
INSERT INTO role (title,salary,departmentID) VALUES ('Senior Engineer',60000,2); -- 3
INSERT INTO role (title,salary,departmentID) VALUES ('Junior Engineer',30000,2); -- 4
INSERT INTO role (title,salary,departmentID) VALUES ('Account Manager',70000,3); -- 5
INSERT INTO role (title,salary,departmentID) VALUES ('Accountant',50000,3); -- 6
INSERT INTO role (title,salary,departmentID) VALUES ('Lawyer',70000,4); -- 7
INSERT INTO role (title,salary,departmentID) VALUES ('Legal Team',30000,4); -- 8

INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Lisa','Hawtin',1,NULL);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Corey','Samuels',3,NULL);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Ethan','Johnson',5,NULL);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Louis','Cogez',7,NULL);

INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Kyle','Dhaliwal',2,1);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Kai','Stuart',4,3);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Jamie','McGrath',6,5);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Reece','Mitchell',8,7);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Kariss','Rowe',4,3);
INSERT INTO employee (firstName,lastName,roleID,managerID)
VALUES ('Keaton','Amory',4,3);

SELECT role.id,employee.firstName,
employee.lastName,department.name,role.title,role.salary,employee.managerID
from department
inner join role on departmentID = department.id
inner join employee on roleID = role.id
order by id;