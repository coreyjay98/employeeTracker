const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Snibster1!",
  database: "employeeDatabase",
});

const viewDepartments = function () {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM department", function (err, res) {
      if (err) {
        reject(new Error(err));
      } else {
        console.log(res);
        resolve();
      }
    });
  });
};
module.exports = { viewDepartments: viewDepartments };
