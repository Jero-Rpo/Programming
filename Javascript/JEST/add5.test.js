const add5 = require("./add5");

test("returns the number plus 5", () => {
    expect(add5(20)).toBe(25);
});