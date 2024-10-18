import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
let getal = parseFloat(await userInput.question("Geef een getal in: "));

 
do
{
    if(getal < 1){
    console.error("Getal moet 1 of hoger zijn!");
    getal = parseFloat(await userInput.question("Geef een getal in: "));
    }
 
}while(getal < 1);
 
for(let a = 1; getal >= a; a++){
    if(a == 1){
    process.stdout.write("" + a);
    }
    else{
    process.stdout.write(" x " + a);
    } 
}
process.stdout.write(" = ");
let resultaat = factorial(getal);
process.stdout.write("" + resultaat);
 
function factorial(getal){
    let resultaat = 1;
 
    for(let a = 1; a <= getal; a++){
        resultaat *= a;
    }
    return resultaat;
}