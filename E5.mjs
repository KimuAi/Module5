import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question("Geef een getal 1 in: "));
let getal2 = parseFloat(await userInput.question("Geef een getal 2 in: "));

min(getal1, getal2)
max(getal1, getal2)

function min(getal1, getal2){
    let grootsteGetal = Math.max(getal1, getal2);
    console.log("Grootste getal:" + grootsteGetal);}
    
function max(getal1, getal2){
    let kleinsteGetal = Math.min(getal1, getal2)
    console.log("Kleinste getal:" + kleinsteGetal);}


