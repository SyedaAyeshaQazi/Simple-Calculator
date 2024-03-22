#! /usr/bin/env node

import inquirer from "inquirer";

const answere = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "FirstNumber" },
  { message: "enter second number", type: "number", name: "SecondNumber" },
  {message: "select one of the operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "division"]}
]);

console.log(answere);


//conditional statement
if(answere.operators === "Addition"){
  console.log("your answere is" + [answere.FirstNumber + answere.SecondNumber]);
} else if(answere.operators === "Subtraction"){
  console.log("your answere is" + [answere.FirstNumber - answere.SecondNumber]);
} else if(answere.operators === "Multiplication"){
  console.log("your answere is" + [answere.FirstNumber * answere.SecondNumber]);
} else if(answere.operators === "Division"){
  console.log("your answere is" + [answere.FirstNumber / answere.SecondNumber]);
} else{
 console.log("please select a valid operator")
}