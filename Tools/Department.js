const inquirer = require("inquirer");
const { departmentPrompts, resetPrompt } = require("./Questions");
const initPrompt = require("./Prompts");
const { addDepartment } = require("./Queries");
const { restartFromEmployees } = require("./Employee");

const departmentInquire = () => {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(departmentPrompts).then((data) => {
      resolve(addDepartment(data));
    });
  });
};

const restartFromDatabase = () => {
  inquirer.prompt(resetPrompt).then((answer) => {
    if (answer.restart == "Yes") {
      return initPrompt();
    } else {
      return console.log("GoodBye");
    }
  });
};
module.exports = departmentInquire;
