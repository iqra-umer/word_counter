#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow(`\n\t*****Welcome To IQRA'S Word Counter****\t\n`));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words"
    }
]);
const words = answers.Sentence.trim().split(" ");
//print the array to console
console.log(words);
//print the word count of the sentence
console.log(chalk.bgGreenBright.bold(`Your Words Sentence Count Is ${words.length} Words`));
