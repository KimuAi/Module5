import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
let vormen = await userInput.question("wilt u een Cirkel, Driehoek, Rechthoek of een Vierkant? ")
 
if(vormen == 'cirkel'){
    let straal = parseFloat(await userInput.question("Geef de straal van de cirkel: "));
    cirkel(straal);
    console.log(cirkel(straal));
}
else if(vormen == 'driehoek'){
    let basis = parseFloat(await userInput.question("Hoe groot wilt je de basis van een driehoek: "));
    let hoogte = parseFloat(await userInput.question("Hoe groot wilt je de hoogte van een driehoek: "));
    driehoek(basis, hoogte);
    console.log(driehoek(basis, hoogte));
   
}
else if(vormen == 'rechthoek'){
    let zijde1 = parseFloat(await userInput.question("Hoe groot wilt je de zijde1 : "));
    let zijde2 = parseFloat(await userInput.question("Hoe groot wilt je de zijde2  "));
   rechthoek(zijde1, zijde2);
    console.log(rechthoek(zijde1, zijde2));

}
else if(vormen == 'vierkant'){
    let zijde = parseFloat(await userInput.question("Hoe groot wilt je de vierkant  "));
    vierkant(zijde);
    console.log(vierkant(zijde));
}
 
function cirkel(straal){
  let berekening = (Math.PI * straal * straal);
  return berekening
}
function driehoek(basis, hoogte){
    let berekening =  (basis * hoogte) / 2
    return berekening
}
function rechthoek(zijde1, zijde2){
    let berekening =  (zijde1 * zijde2) 
    return berekening
}
function vierkant(zijde){
    let berekening =  (zijde * zijde) 
    return berekening
}