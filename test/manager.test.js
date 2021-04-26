const Manager = require("../team/manager");
const Employee = require("../team/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Andrew", 1, "email@test.com", testValue);
  expect(e.office).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Andrew", 1, "email@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Andrew", 1, "email@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});