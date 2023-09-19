const input = require('readline-sync');
let str = "LaunchCode";
let sliceAmount = Number(input.question("How many letters would you like to switch?"));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3,str.length)+str.slice(0,3);
console.log(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Orginal string: ${str}. New string: ${newStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let newNewStr = str.slice(sliceAmount,str.length)+str.slice(0,sliceAmount);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (sliceAmount > str.length) {
    console.log(`The word is not big enough to switch that many characters. Let's see what 3 looks like: ${newStr}`)
} else {
    console.log(newNewStr);
}