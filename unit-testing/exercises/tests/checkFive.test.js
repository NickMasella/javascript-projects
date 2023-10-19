const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("produces the correct output when passed a number less than 5", function() {
        expect(checkFive(2)).toBe('2 is less than 5.');
   });

    test("produces the correct output when passed 5", function() {
        expect(checkFive(5)).toBe('5 is equal to 5.');
 });

    test("produces the correct output when passed a number greater than 5", function() {
        expect(checkFive(6)).toBe('6 is greater than 5.');
 });

});