const { add } = require("../add");

test.each`
  x    | y    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${2} | ${4}
`("add($x, $y) = $expected", ({ x, y, expected }) => {
  expect(add(x, y)).toBe(expected);
});
