let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;

console.log(`${num2} has ${String(num2).length} characters`);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num2).includes(".")){
    console.log(`${num2} has ${String(num2).length-1} digits`);
} else {
    console.log(`${num2} has ${String(num2).length} digits`);
}