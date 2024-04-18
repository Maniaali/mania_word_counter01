#! /usr/bin/env node
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence please: ",
    },
]);
const word = Answer.sentence.trim().split(" ");
// print the arry
console.log(word);
// count  the words and print in console
console.log(`your sentence word count is ${word.length}`);
