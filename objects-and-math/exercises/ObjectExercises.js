let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let bear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
}
// After you have created the other object literals, add the astronautID property to each one.
animals = [superChimpOne, superChimpTwo, salamander, dog, bear];

function createIDs(array){
   let oldIDs = [];
   let newID;
   for (let i = 0; i < array.length; i++){
      newID = Math.ceil(Math.random() * 10)
      oldIDs.push[newID];
      while(oldIDs.includes(newID)){
         newID = Math.ceil(Math.random() * 10)
      }
      array[i]["astronautID"] = newID;
   }

}
createIDs(animals);

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID number is ${animal.astronautID}.`)

}
// Start an animal race!


function race(candidates){
   let numSteps;
   let results = [];
   let turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  console.log(race(animals));
  crewReports(animals[Math.floor(Math.random()*5)]);
