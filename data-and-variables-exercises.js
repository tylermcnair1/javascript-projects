// Declare and assign the variables below
const shuttle  = "Determination"
let speed = 17500;
let mars = 225000000;
let moon = 384400;
let MPK = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

// Calculate a space mission below
let milesToMars = mars * MPK;
let hoursToMars = milesToMars / speed;
let daysToMars = hoursToMars / 24;

console.log(daysToMars)

console.log("Determination will take 322.67857142857144 days to reach Mars.")


// Print the results of the space mission calculations below
console.log("Determination will take 322.67857142857144 days to reach Mars.")

// Calculate a trip to the moon below

let milesToMoon = moon * MPK;
let hoursToMoon = milesToMoon / speed;
let daysToMoon = hoursToMoon /24;


// Print the results of the trip to the moon below
 console.log(daysToMoon)
 console.log(shuttle + " will take " +daysToMoon + " days to reach the Moon.")