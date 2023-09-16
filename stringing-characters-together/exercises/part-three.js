//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("ava","").replace("cript",""));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0]+language[4]}'`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace(language[0],"You").replace(language[1]+language[2]+language[3]," are").replace(language[4]+language[5]+language[6]+language[7]+language[8]+language[9]," REPLACABLE!"));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase[0].toUpperCase()+notTitleCase.slice(1,6)+notTitleCase[6].toUpperCase()+notTitleCase.slice(7,10));
console.log(notTitleCase.replace("t","T").replace("c","C"));