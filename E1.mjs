import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam = await userInput.question("Wat is jouw naam? ")

begroeting(naam)

function begroeting(naam){
   console.log("Hello, " + naam)
}