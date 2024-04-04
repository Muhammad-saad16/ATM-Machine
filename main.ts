#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
;let myPin = 2008;

let code = await inquirer.prompt(
    [
        {
            name: "pin",
            message:"enter your pin",
            type: "number",
        }
    ]
);

if(code.pin == myPin){
    console.log(chalk.blue("Correct Pin Code"));

    let operations = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"Please select option",
                type: "list",
                choices: ["withdraw", "checkbalance", "fastCash"],
            }
        ]
    );
    if(operations.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Enter Your amount",
                    type: "number",
                }
            ]
        );
        
      if(amountAns.amount <= myBalance) {
        let balance = myBalance - amountAns.amount;
         console.log(chalk.green("your remaining amount is " + myBalance));
    }else if (myBalance -= amountAns.amount) {
        console.log(chalk.green(`your remaining amount is: ${myBalance}`));
     }
    };
    if(operations.operation === "checkbalance") {
        console.log(chalk.blue("your balance is " + myBalance));
    }
   if (operations.operation === "fastCash") {
    let cash = await inquirer.prompt(
        [
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "3000", "6000", "8000"],
            }
        ]
    );
    if (myBalance -= cash.options) {
        console.log(chalk.green("your remaining amount is " + myBalance));
    }
   }
}else {
    console.log(chalk.red("you entered wrong pin"));
}