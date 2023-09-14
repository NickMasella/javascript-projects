// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight =	"green blinking";
let spaceSuitsOn	= true;
let shuttleCabinReady =	true;
let crewStatus	= (spaceSuitsOn && shuttleCabinReady);
let computerStatusCode =	400;
let shuttleSpeed	= 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

// The engine indicator is blinking red meaning the engines are off, which is what will be printed to the console

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

// Confirmation of mission status

if (crewStatus) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if (computerStatusCode === 200){
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400){
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500){
   console.log("ALERT: Escape velocity reached!")
} else if (shuttleSpeed < 8000){
   console.log("ALERT: Cannot maintain orbit!")
} else {
   console.log("Stable speed")
}







