const inquirer = require("inquirer");

viewDepartments();
viewRoles();
viewEmployees();
addDepartments();
addRoles();
addEmployee();

const initPrompt = () => {
  inquirer.prompt(initialPrompt).then((answer) => {
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
  });
};

module.exports = initPrompt;
