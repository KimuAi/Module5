import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
let getal = parseFloat(await userInput.question("Geef een getal in: "));
let som = 0;
 delers(getal);
 
function delers(getal){
for(let a = 1; (getal - 1) >= a; a++){
        if(getal % a == 0){
            if(a == 1){
             process.stdout.write("" + a);
            }
            else{
             process.stdout.write(" + " + a);
            }
          som += a;
        }
    }
    process.stdout.write(" = " + som);
}