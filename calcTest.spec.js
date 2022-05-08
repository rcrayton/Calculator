import { numEnter } from "./activeCalc.js"

describe("Testing setup", () => {
  xtest("Testing jest configuration", () => {
    expect(123).toEqual(123);
  });
});

describe("Number enter", () => {
  test("Numbers that user clicks return to the calculator screen", () => {
    expect(numEnter(1)).toEqual(1);
    expect(numEnter(123)).toEqual(123);
  });
});