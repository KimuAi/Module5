import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
let jaartal = parseFloat(await userInput.question("Geef een jaartal: "));
let maand = await userInput.question("Geef een maand: ");
 
let dagen = DagenInMaand(jaartal, maand);
function DagenInMaand(jaartal, maand) {
    switch (maand) {
        case "januari":
            console.log("In het jaar " + jaartal + " heeft " + maand + " heeft 31 dagen");
        break;
   
        case "februari":
            if((jaartal % 4 == 0 && jaartal % 100 !== 0) || (jaartal % 400 == 0))
            {console.log("In het jaar " + jaartal + " heeft februari 29 dagen");}
            else
            {console.log("In het jaar " + jaartal + " heeft februari 28 dagen");}
        break;
   
        case "maart":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
   
        case "april":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 30 dagen");
        break;
   
        case "mei":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
        case "juni":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 30 dagen");
        break;
   
        case "juli":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
   
        case "augustus":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
   
        case "september":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 30 dagen");
        break;
   
        case "oktober":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
   
        case "november":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 30 dagen");
        break;
   
        case "december":
            console.log("In het jaar " + jaartal + " heeft " + maand + " 31 dagen");
        break;
        default:
            console.log("ongeldige keuze") }
}