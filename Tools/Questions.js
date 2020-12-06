const inquirer = require("inquirer");

const initialPrompt = [
  {
    type: "list",
    name: "start",
    message: "What operation do you require?",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Roles",
      "Add Employee",
    ],
  },
];

const employeePrompts = [
  {
    type: "input",
    name: "firstName",
    message: "What is your first Name?",
  },
  {
    type: "input",
    name: "secondName",
    message: "What is your second Name?",
  },
  {
    type: "input",
    name: "role",
    message: "What is your role at the Company?",
  },
];

module.exports = { initialPrompt, employeePrompts };
