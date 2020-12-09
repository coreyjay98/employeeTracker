const inquirer = require("inquirer");
const { viewDb, viewAllEmployees } = require("./Queries");
const { initialPrompt, resetPrompt } = require("./Questions");
const cTable = require("console.table");
const { employeeInquire } = require("./Employee");
const departmentInquire = require("./Department");

const initPrompt = () => {
  inquirer
    .prompt(initialPrompt)
    .then((answer) => {
      switch (answer.start) {
        case "View All Employees by Department":
          viewDb("department")
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
          addRoles();
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
    }
  });
};

const managerFilter = (data) => {
  data.forEach(({ managerID }) => {
    switch (managerID) {
      case 1:
        managerID = "Lisa";
        break;
      case 3:
        return "Corey Samuels";
      case 5:
        return "Ethan Johnson";
      case 7:
        return "Louis Cogez";
    }
  });
};

module.exports = { initPrompt: initPrompt, restartQuestion: restartQuestion };
