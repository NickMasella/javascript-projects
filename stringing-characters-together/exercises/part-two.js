//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
let dnaTrimmed = dna.trim();
console.log(dnaTrimmed);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
let dnaUppercase = dna.toUpperCase();
console.log(dnaUppercase);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(dnaTwo.replace("GCT","AGG"));

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
console.log(dnaTwo.indexOf("CAT"));
if (dnaTwo.indexOf("CAT") >= 0){
    console.log("CAT gene found");
} else {
    console.log("CAT gene not found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(dnaTwo.indexOf("CGT"),dnaTwo.indexOf("CGT")+3));

//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long`)

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(dna.indexOf("TAC"),dna.indexOf("TAC")+3).toLowerCase()}o ${dna.slice(dna.indexOf("CAT"),dna.indexOf("CAT")+3).toLowerCase()}`);
console.log("Wow all that just to print taco cat");