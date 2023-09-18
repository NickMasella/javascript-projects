/*console.log(Boolean("true"));
console.log(Boolean("TRUTH"));
console.log(Boolean(4 == "4"));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean('banana' <= 'apple'));
console.log(Boolean('apple' <= 'banana'));
let banana = true;
console.log(Boolean(banana === 'banana'));
console.log((3 + 4 === 7));

let str = 'LaunchCode students rock!';
let strArray = str.split(" ");
console.log(strArray);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);
*/
let school = [
    ["science", "computer", "art" ],
    ["Jones", "Willoughby", "Rhodes"]
];

console.log(school[1][2]);

let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);

const school3 = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];

school3[0].push("dance");
console.log(school3[0]);