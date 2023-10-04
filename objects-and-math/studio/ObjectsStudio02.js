// Code your orbitCircumference function here:
//Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.

function getCircumferenceOfOrbit(r){
  let C = Math.round(2 * Math.PI * r);
  return C;
}
// Code your missionDuration function here:
function missionDuration(numOrbit, radiusOrbit = 2000, speedOrbit = 28000){
let time = Math.round(numOrbit*getCircumferenceOfOrbit(radiusOrbit)/speedOrbit*100)/100;
console.log(`The mission will travel ${numOrbit*getCircumferenceOfOrbit(radiusOrbit)} km around the planet, and it will take ${time} hours to complete.`)
}

// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = function (array) {
  let index;
  index = Math.floor(Math.random()*array.length);
  return array[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, radiusOrbit, speedOrbit){
  let duration = missionDuration(3, radiusOrbit, speedOrbit );
  let oxUsed = Math.round(candidate.o2Used(duration)*1000)/1000;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 