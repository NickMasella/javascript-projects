//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');
let startingFuel;
let numberOfAstronauts;
let altitudeKm = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (!(startingFuel >= 5000 && startingFuel <= 30000)){
  startingFuel = input.question("Please enter a starting fuel amount between 5000 and 30000: ");
  if (!(startingFuel >= 5000 && startingFuel <= 30000)){
    console.log("Invalid input");
  }
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (!(numberOfAstronauts > 0 && numberOfAstronauts <= 7)){
  numberOfAstronauts = input.question("How many astronauts will be aboard?(maximum 7) ");
  if (!(numberOfAstronauts > 0 && numberOfAstronauts <= 7)){
    console.log("Invalid input");
  }
}

  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel > 0){
  altitudeKm += 50;
  startingFuel -= (100 * numberOfAstronauts);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeKm} km.`)
if (altitudeKm >= 2000){
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}