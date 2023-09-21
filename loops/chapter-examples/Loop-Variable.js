// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

for (let i = 0; i < 51; i++) {
   console.log(i);
 }

 let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
   reversed = reversed + str[i];
}

console.log(reversed);

let numbers = [ /* some numbers */ ];
let searchVal = 42; // the value we want to search for in the numbers array(could be a string)
let i = 0; // arbitrary starting value

while (i < numbers.length) { //while i is less than the length of the numbers array, iterate
   if (numbers[i] === searchVal) { 
      break; //if our search value is equal to the numbers array at index i, stop iterating
   }
   i++; //add 1 to i 
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}