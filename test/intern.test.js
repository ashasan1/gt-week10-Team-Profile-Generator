  
const Intern = require("../team/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Janet", 1, "email@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Janet", 1, "email@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Janet", 1, "email@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});