const inquirer = require("inquirer");
const { addEmployees } = require("./Queries");
const { employeePrompts, resetPrompt } = require("./Questions");
const initPrompt = require("./Prompts");

const employeeInquire = () => {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(employeePrompts).then((data) => {
      resolve(addEmployees(data));
    });
  });
};

const restartFromEmployees = () => {
  inquirer.prompt(resetPrompt).then((answer) => {
    if (answer.restart == "Yes") {
      return initPrompt();
    } else {
      return console.log("GoodBye");
    }
  });
};
module.exports = {
  employeeInquire: employeeInquire,
  restartFromEmployees: restartFromEmployees,
};
