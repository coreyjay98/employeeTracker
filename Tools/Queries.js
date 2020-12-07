const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Snibster1!",
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

const viewDb = function (filter) {
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

module.exports = { viewAllEmployees: viewAllEmployees, viewDb: viewDb };
