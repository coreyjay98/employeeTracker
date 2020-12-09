const inquirer = require("inquirer");
const { addEmployees } = require("./Queries");
const { employeePrompts, resetPrompt } = require("./Questions");
const initPrompt = require("./Prompts");

const employeeInquire = () => {
  inquirer.prompt(employeePrompts).then((data) => {
    addEmployees(data);
    restartFromEmployees();
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
