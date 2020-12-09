const inquirer = require("inquirer");

const initialPrompt = [
  {
    type: "list",
    name: "start",
    message: "What operation do you require?",
    choices: [
      "View All Employees by Department",
      "View All Roles",
      "View All Employees",
      "View Departments",
      "Add Roles",
      "Add Employee",
      "Add Departments",
    ],
  },
];

const managerChecker = (data) => {};

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
      { name: "Sales Lead", value: 1 },
      { name: "Sales Person", value: 2 },
      { name: "Senior Engineer", value: 3 },
      { name: "Junior Engineer", value: 4 },
      { name: "Account Manager", value: 5 },
      { name: "Accountant", value: 6 },
      { name: "Lawyer", value: 7 },
      { name: "Legal Team", value: 8 },
    ],
  },
  {
    type: "list",
    name: "manager",
    message: "Who is your Manager?",
    choices: [
      "None",
      { name: "Lisa Hawtin", value: 1, short: "Lisa Hawtin" },
      { name: "Corey Samuels", value: 3, short: "Corey Samuels" },
      { name: "Ethan Johnson", value: 5, short: "Ethan Johnson" },
      { name: "Louis Cogez", value: 7, short: "Louis Cogez" },
    ],
  },
];

const resetPrompt = [
  {
    type: "list",
    name: "restart",
    message: "Do you Require Something else?",
    choices: ["Yes", "No"],
  },
];

const departmentPrompts = [
  {
    type: "input",
    name: "departmentName",
    message: "What would you like to name the department?",
  },
];

module.exports = {
  initialPrompt,
  employeePrompts,
  resetPrompt,
  departmentPrompts,
};
