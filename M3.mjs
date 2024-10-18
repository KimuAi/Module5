import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let min = 1;
let max = 10;
let computer = random(min, max);
let levens = 3;
let gebruiker;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do{
    gebruiker = parseFloat(await userInput.question("Raad het getal tussen 1 - 10? "));
    
    
    if (gebruiker < computer) {
        console.log("Je hebt het niet geraden, het getal moet hoger zijn!");
        levens--

    } else if (gebruiker > computer) {
        console.log("Je hebt het niet geraden, het getal moet lager zijn!");
        levens--

    } else {
        console.log("Je hebt het goed geraden!");
    }

    if (levens <= 0) {
        console.log("Je hebt geen levens meer. Het juiste getal was " + computer);
        break;
    }
} while (gebruiker !== computer && levens != 0);

if (levens > 0) {
    console.log("Het juiste getal was " + computer);
}

