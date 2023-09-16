// Initialize Variables below
let date = "Monday 2010-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKG = "astronautCount" * "averageAstronautMassKg";
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = "crewMassKg" + "fuelMassKg" + "shuttleMassKg";
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

if (astronautCount <= 7) {
    console.log('suitable staff');
} else {
    console.log('please hire more employees');
}
if (astronautStatus == "ready") {
    console.log("astronaut is ready for launch");
} else {
    console.log('please wait dont launch yet');
}
if (totalMassKg <= "maximumMassLimit") {
    console.log('Mass Kg requirement met');
} else {
    console.log('weight issue');
}
if (fuelTempCelsius >= -300 || "fuelTempCelsius" <= "maximumFuelTemp") {
    console.log('ready to go');
} else {
    console.log('do not even think about it');
}
if (fuelLevel == "100%") {
    console.log("go for launch");
} else {
    console.log("to close to E");
}
if (weatherStatus == "clear") {
    console.log('nothin but a hound dog')
} else {
    console.log ("wait, i see a hound dog");
}

console.log("Date:" , date);
console.log("Time:" , time);
console.log("Astronaut Count:" , astronautCount);
console.log("Crew Mass:" , crewMassKG);
console.log("Fuel Mass:" , fuelMassKg);
console.log("Shuttle Mass:" , shuttleMassKg);
console.log("Total Mass:" , "835407.21 kg" );
console.log("Fuel Temperature:" , fuelTempCelsius);
console.log("Weather Status:" , weatherStatus);


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions


