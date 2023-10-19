const whoWon = require('../RPS.js');


describe("whoWon", function(){
    test("behaves correctly when the players tie (both choose the same option)", function() {
        expect(whoWon('paper','paper')).toBe('TIE!');
    });

   test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        expect(whoWon('rock','paper')).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
        expect(whoWon('paper','scissors')).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function() {
        expect(whoWon('scissors','rock')).toBe('Player 2 wins!');
    });

    test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function() {
        expect(whoWon('rock','scissors')).toBe('Player 1 wins!');
    });

    test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function() {
        expect(whoWon('paper','rock')).toBe('Player 1 wins!');
    });

    test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
        expect(whoWon('scissors','paper')).toBe('Player 1 wins!');
    });





});