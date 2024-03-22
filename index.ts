#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

async function restart() {
    
const SystemGeneratedNumber = Math.floor(Math.random()*10 + 1)



const answers = await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",  
        message : "Guess a Number between 1 to 10"
    }
])

if(answers.userGuess === SystemGeneratedNumber){
    console.log(chalk.green("Congratulations! Your Guess is Correct.")); 
}else{
    console.log(chalk.red("Better Luck Next Time"));
}
console.log("Your Guess :",answers.userGuess , "SystemGeneratedNumber :",SystemGeneratedNumber);
}



async function startAgain() {
    do{
        await restart ();
        var again = await inquirer.prompt([
            {
                type : "input",
                name : "Restart",
                message : "Dou You Want to Continue? Press Y"
            }
        ])
    }while(again.Restart === "Y" || again.Restart === "YES" || again.Restart === "yes" || again.Restart === "y" || again.Restart === "Yes")
}

startAgain()