//Create an array that can hold 4 items name practiceFile.

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.

//Use a SetValue to add the items "false", and "-4.6" to the array.  Print the array to confirm the changes.

let practiceFile = [273.15];
practiceFile.push((42) + ("hello"));
console.log(practiceFile);
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);
 
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

cargoHold[5] = ('space tether')
console.log(cargoHold);

cargoHold.pop('security blanket');
console.log(cargoHold);
cargoHold.shift('oxygen tanks');
console.log(cargoHold);
cargoHold.push('20 meters');
cargoHold.unshift(1138);
console.log(cargoHold);

console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);

cargoHold.splice(3,0,'keys');
console.log(cargoHold);
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);

holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]

holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

let str = ("In space, no one can hear you code.");
str.split();
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

arr = ['B', 'n', 'n', 5];
console.log(arr.join())
console.log(arr.join('a'))
console.log(arr.join(''))
console.log(arr.join(' '))

let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]

let table = (element1 + element2 + element26)

console.log(table[1], table[1][1]);






    