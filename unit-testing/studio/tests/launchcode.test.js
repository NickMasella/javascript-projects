// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit' for key organization", () => {
    expect(launchcode.organization).toBe("nonprofit");
});

test("should return 'Jeff' for key executiveDirector", () => {
  expect(launchcode.executiveDirector).toBe("Jeff");
});

test("should return 100 for key percentageCoolEmployees", () => {
  expect(launchcode.percentageCoolEmployees).toBe(100);
});

test("should return 100 for key percentageCoolEmployees", () => {
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toBe(3);
});

test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", () => {
  expect(launchcode.launchOutput(2)).toBe("launch");
});

test("When passed a number that is ONLY divisible by 3, return 'Code!'", () => {
  expect(launchcode.launchOutput(3)).toBe("Code!");
});

test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", () => {
  expect(launchcode.launchOutput(5)).toBe("Rocks!");
});

test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", () => {
  expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
});
test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", () => {
  expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
});
test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", () => {
  expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
});
test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", () => {
  expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
});
test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", () => {
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
});

});