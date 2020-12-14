const inquirer = require("inquirer");
const { viewDb, viewAllEmployees, connection } = require("./Queries");
const { initialPrompt, resetPrompt } = require("./Questions");
const cTable = require("console.table");
const { employeeInquire } = require("./Employee");
const departmentInquire = require("./Department");
const { roleInquire } = require("./Roles");

const initPrompt = () => {
  inquirer
    .prompt(initialPrompt)
    .then((answer) => {
      switch (answer.start) {
        case "View All Employees by Department":
          viewDb()
            .then(function (data) {
              console.table(data);
              return restartQuestion();
            })
            .catch((err) => console.log(err));
          break;
        case "View All Roles":
          viewAllEmployees("role")
            .then(function (data) {
              console.table(data);
              return restartQuestion();
            })
            .catch((err) => console.log(err));
          break;
        case "View All Employees":
          viewAllEmployees("employee")
            .then(function (data) {
              console.table(data);
              return restartQuestion();
            })
            .catch((err) => console.log(err));
          break;
        case "View Departments":
          viewAllEmployees("department")
            .then(function (data) {
              console.table(data);
              return restartQuestion();
            })
            .catch((err) => console.log(err));
          break;
        case "Add Departments":
          departmentInquire().then(() => {
            console.log("Department Added");
            return restartQuestion();
          });
          break;
        case "Add Roles":
          roleInquire().then(() => {
            console.log("Role Added");
            return restartQuestion();
          });
          break;
        case "Add Employee":
          employeeInquire().then(() => {
            console.log("Employee Added");
            return restartQuestion();
          });
          break;
      }
    })
    .catch((err) => console.log("inq error", err));
};

const restartQuestion = () => {
  inquirer.prompt(resetPrompt).then((answer) => {
    if (answer.restart == "Yes") {
      initPrompt();
    } else {
      console.log("GoodBye");
      connection.end();
    }
  });
};

module.exports = { initPrompt: initPrompt, restartQuestion: restartQuestion };
