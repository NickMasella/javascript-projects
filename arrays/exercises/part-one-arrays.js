//Create an array that can hold 4 items named practiceFile.
let item1;
let item2;
let item3;
let item4;
let practiceFile = [
    item1, 
    item2, 
    item3, 
    item4
];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile[0] = 42;
console.log(practiceFile);
practiceFile[1] = "hello";
console.log(practiceFile);
//Use a SetValue to add the items "false", and "-4.6" to the array.  Print the array to confirm the changes.
practiceFile.unshift("false");
practiceFile.unshift(-4.6);
console.log(practiceFile);

