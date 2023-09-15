// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount =	7;
let astronautStatus =	"ready";
let averageAstronautMassKg =	80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg =	74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit =	850000;
let fuelTempCelsius =	-225;
let minimumFuelTemp =	-300;
let maximumFuelTemp	= -150;
let fuelLevel =	"100%";
let weatherStatus =	"clear";
let preparedForLiftOff = true;

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut count: " + astronautCount);
console.log("Crew mass(Kg): " + crewMassKg);
console.log("Fuel mass(Kg): " + fuelMassKg);
console.log("Shuttle mass(Kg): " + shuttleMassKg);
console.log("Total mass(Kg): " + totalMassKg);
console.log("Fuel temperature(C): " + fuelTempCelsius);
console.log("Weather: " + weatherStatus);

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    console.log("Too many Astronauts!");
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready"){
    console.log("Crew not ready!");
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000){
    console.log("Weight limit exceeded!");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp){
    console.log("Fuel temperature not within acceptable range!");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%"){
    console.log("Check fuel levels!");
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus !== "clear"){
    console.log("Weather conditions unacceptable for safe launch!")
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions


if (preparedForLiftOff === true){
    console.log("Cleared for Launch!");
    console.log("Have a safe flight space cadets!");
} else{
    console.log("Launch scrubbed!");
}

