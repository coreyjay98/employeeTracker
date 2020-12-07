const inquirer = require("inquirer");
const { viewDb, viewAllEmployees } = require("./Queries");
const { initialPrompt } = require("./Questions");
const cTable = require("console.table");

const initPrompt = () => {
  inquirer
    .prompt(initialPrompt)
    .then((answer) => {
      switch (answer.start) {
        case "View All Employees by Department":
          viewDb("department")
            .then(function (data) {
              console.table(data);
            })
            .catch((err) => console.log(err));
          break;
        case "View All Employees by Roles":
          viewDb("role")
            .then(function (data) {
              console.table(data);
            })
            .catch((err) => console.log(err));
          break;
        case "View All Employees":
          viewAllEmployees("employee")
            .then(function (data) {
              console.table(data);
            })
            .catch((err) => console.log(err));
          break;
        case "Add Departments":
          addDepartments();
          break;
        case "Add Roles":
          addRoles();
          break;
        case "Add Employee":
          addEmployee();
          break;
      }
    })
    .catch((err) => console.log("inq error", err));
};

module.exports = initPrompt;
