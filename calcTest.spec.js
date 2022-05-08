import { keyEnter, numInput } from "./activeCalc.js"


describe("Keys enter", () => {
  test("Key that user clicks return to the calculator screen", () => {
    expect(keyEnter(1)).toEqual(1);
    expect(keyEnter('.')).toEqual('.');
    expect(keyEnter("+")).toEqual('+');
  });
});
describe("Numbers entered with decimal are only returned once regardless of how many times input", () => {
  test("Number returned", () => {
    expect(numInput(1)).toEqual(1);
    expect(numInput(36)).toEqual(36);
  });
});