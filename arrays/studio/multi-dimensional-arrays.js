let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetFood = food.split(",");
let cabinetEquipment = equipment.split(",");
let cabinetPets = pets.split(",");
let cabinetSleepAids = sleepAids.split(",");
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinetFood, cabinetEquipment, cabinetPets, cabinetSleepAids];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinet = Number(input.question("Which cabinet do you want to get your grubby little fingers into? 0, 1 ,2 or 3?"));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinet === 0){
    console.log(`this cabinet contains ${cargoHold[0]}`);
} else if (cabinet === 1){
    console.log(`this cabinet contains ${cargoHold[1]}`);
} else if (cabinet === 2){
    console.log(`this cabinet contains ${cargoHold[2]}`);
} else if (cabinet === 3){
    console.log(`this cabinet contains ${cargoHold[3]}`);
} else {
    console.log("That wasn't one of the options! You piece");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let item = String(input.question("Which item would you like to steal you thief?"))
console.log(cargoHold[item]);
if (cargoHold[cabinet].includes(item)){
    console.log("cabinet does include that item.");
} else {
    console.log("cabinet does not include that item.");
}