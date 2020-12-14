const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "employeeDatabase",
});

const viewAllEmployees = function (filter) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM ${filter}`, function (err, res) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(res);
      }
    });
  });
};

const viewDb = function () {
  return new Promise(function (resolve, reject) {
    connection.query(
      `SELECT role.id,employee.firstName,
    employee.lastName,department.name,role.title,role.salary,employee.managerID
    from department
    inner join role on departmentID = department.id
    inner join employee on roleID = role.id
    order by id;`,
      function (err, res) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(res);
        }
      }
    );
  });
};

const addEmployees = function (result) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO employee (firstName,lastName,roleID,managerID)
      VALUES ('${result.firstName}','${result.secondName}',${result.role},${result.manager});`,
      function (err, res) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(res);
        }
      }
    );
  });
};

const addDepartment = function (result) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO department (name) VALUES ('${result.departmentName}');`,
      function (err, res) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(res);
        }
      }
    );
  });
};

const addRole = function (result) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO role (title,salary,departmentID) VALUES ('${result.name}','${result.salary}',${result.departmentID});`,
      function (err, res) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports = {
  viewAllEmployees: viewAllEmployees,
  viewDb: viewDb,
  addEmployees: addEmployees,
  addDepartment: addDepartment,
  addRole: addRole,
  connection: connection,
};
