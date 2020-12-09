const inquirer = require("inquirer");
const { addRole } = require("./Queries");

const roleInquire = () => {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(rolePrompts).then((data) => {
      resolve(addRole(data));
    });
  });
};

const rolePrompts = [
  {
    type: "input",
    name: "name",
    message: "What is the Name of the role?",
  },
  {
    type: "number",
    name: "salary",
    message: "What is the Salary for the role?",
  },
  {
    type: "list",
    name: "departmentID",
    message: "What department is this Role in?",
    choices: [
      { name: "Sales", value: 1 },
      { name: "Engineering", value: 2 },
      { name: "Finance", value: 3 },
      { name: "Legal", value: 4 },
    ],
  },
];

module.exports = { roleInquire: roleInquire };
