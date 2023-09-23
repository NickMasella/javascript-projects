function sayHello() {
   console.log("Hello, World!");
}
function printArray(array) {
   for (let i = 0; i < array.length; i++) {
       console.log(array[i]);
   }
}

printArray("quasit");
console.log("---");
printArray(["orange", "apple", "pear"]);

sayHello();