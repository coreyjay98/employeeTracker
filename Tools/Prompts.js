const inquirer = require("inquirer");
const { viewDepartments } = require("./Queries");
const { initialPrompt } = require("./Questions");

const initPrompt = () => {
  inquirer
    .prompt(initialPrompt)
    .then((answer) => {
      switch (answer.start) {
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
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
