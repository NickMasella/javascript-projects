// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? No
// Did it? Yes
// Do not worry about fixing the code yet, we will do that in the next series of exercises.
// fixed by nesting the second set of conditionals within the first

let launchReady = false;
let fuelLevel = 20000;
let crewStatus = true;
let computerStatus = 'red';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
    if (crewStatus && computerStatus === 'green'){
      console.log('Crew & computer cleared.');
      launchReady = true;
}   else {
      console.log('WARNING: Crew or computer not ready!');
      launchReady = false;
} 
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}



if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}