let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split("n"));
console.log(str);
//.split removes and splits the array at each instance of the defined item
//it does not alter the array

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join("a"));
console.log(arr);
//.join does not alter the array. It combines all items in the array separated by the defined item
//3) Do split or join change the original string/array?
let splitAndJoin = "do not change the array";
console.log(`.split and .join ${splitAndJoin}`);
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(",").sort();
console.log(cargoHold);
