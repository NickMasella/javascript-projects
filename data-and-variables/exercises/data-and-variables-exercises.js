
// Declare and assign the variables below

let shuttleName = "determination";
console.log(typeof shuttleName);

let shuttleSpeedMph = 17500;
console.log(typeof shuttleSpeedMph);

let kilometersToMars = 225000000;
console.log(typeof kilometersToMars);

let kilometersToMoon = 384400;
console.log(typeof kilometersToMoon);

let milesPerKilometer = 0.621;
console.log(typeof milesPerKilometer);

let milesToMars = kilometersToMars * milesPerKilometer;
console.log(typeof milesToMars);

let milesToMoon = kilometersToMoon * milesPerKilometer;
console.log(typeof milesToMoon);

let hoursToMars = milesToMars/shuttleSpeedMph;
console.log(typeof hoursToMars);
console.log(hoursToMars);

let daysToMars = hoursToMars/24;
console.log(typeof daysToMars);
console.log(daysToMars);

let hoursToMoon = milesToMoon/shuttleSpeedMph;
console.log(typeof hoursToMoon);
console.log(hoursToMoon);

let daysToMoon = hoursToMoon/24;
console.log(typeof daysToMoon);
console.log(daysToMoon);

console.log(shuttleName + " will take " + daysToMars +' days to reach Mars.');

console.log(shuttleName + " will take " + daysToMoon +' days to reach the Moon');


// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below