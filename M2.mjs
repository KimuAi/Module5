import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let min = 1
let max = 10
let computer = random(min, max)
let gebruiker;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do{
    gebruiker = parseFloat(await userInput.question("Raad het getal tussen 1 - 10? "))
if(gebruiker < computer){
    console.log("Je hebt het niet geraden het getal moet hoger zijn!");
    }
    else if(gebruiker > computer){
    console.log("Je hebt het niet geraden het getal moet lager zijn!");
    }
    else{
    console.log("je hebt het goed geraden ")
    }
}
while(gebruiker !== computer )

console.log("Het juiste getal was " + computer)
