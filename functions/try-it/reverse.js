function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}


let nums = [3.14, 42, 4811];

let halved = nums.map(function (n){
   return n/2;
});

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n){
   return n.slice(0,1);
});

console.log(firstInitials);