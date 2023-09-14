//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.
//missing closed parenthesis on line 7. fixed.
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}