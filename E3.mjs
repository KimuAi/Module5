import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
 
let isCelcius = await userInput.question("Wilt u Celcius converteren?\n(1)true\n(0)false\n ");
let temperatuur = parseFloat(await userInput.question("Hoeveel graden? "));
 
convert(temperatuur, isCelcius);
console.log(convert(temperatuur, isCelcius));
 
 
function convert(temperatuur, isCelcius){
    if(isCelcius == true){
     let farenheit = (9/5) * temperatuur + 32;
     return farenheit;
    }
    else if(isCelcius == false){
     let celcius = (5/9) * (temperatuur - 32);
     return celcius;
    }
}
