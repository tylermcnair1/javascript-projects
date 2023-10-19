const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let arrays = [food, equipment, pets, sleepAids]
let check = ','

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = arrays[0].split(check).sort()
let equipmentCabinet = arrays[1].split(check).sort()
let petCabinet = arrays[2].split(check).sort()
let sleepCabinet = arrays[3].split(check).sort()


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petCabinet, sleepCabinet];
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userPick = input.question("choose a cabinet 0-3");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userpick = cargoHold['']) {
    console.log(cargoHold['']);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
