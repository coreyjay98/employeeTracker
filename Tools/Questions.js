const inquirer = require("inquirer");

const initialPrompt = [
  {
    type: "list",
    name: "start",
    message: "What operation do you require?",
    choices: [
      "View All Employees by Department",
      "View All Employees by Roles",
      "View All Employees",
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
    type: "list",
    name: "role",
    message: "What is your role at the Company?",
    choices: [
      "Sales Lead",
      "Sales Person",
      "Senior Engineer",
      "Junior Engineer",
      "Account Manager",
      "Accountant",
      "Lawyer",
      "Legal Team",
    ],
  },
  {
    type: "list",
    name: "role",
    message: "Who is your Manager?",
    choices: [
      "None",
      "Lisa Hawtin",
      "Corey Samuels",
      "Ethan Johnson",
      "Louis Cogez",
    ],
  },
];

module.exports = { initialPrompt, employeePrompts };
