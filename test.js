const myModule = require("./lib.js");

const isEqual = (a = [], b = []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

const isEqualNum = (a, b) => a === b;

const testMap = (input, callback, expected) => {
  const actual = myModule.map(input, callback);
  console.log(`
      Inputs: ${input}
      Actual: ${actual}
      Expected: ${expected}
      Assess: ${isEqual(actual, expected)}
    `);
};

console.log("[map]: Testing started");
testMap([1, 2, 3, 4], (v) => v * 2, [2, 4, 6, 8]);
testMap([1, 2, 3, 4], (v) => v + 2, [3, 4, 5, 6]);
testMap([1, 2, 3, 4], (v) => v, [1, 2, 3, 4]);
console.log("[map]: Testing done");

const testReduce = (input, initialValue, callback, expected) => {
  const actual = myModule.reduce(input, callback, initialValue);
  console.log(`
        Inputs: ${input}
        Initial Value: ${initialValue}
        Actual: ${actual}
        Expected: ${expected}
        Assess: ${isEqualNum(actual, expected)}
      `);
};

console.log("[reduce]: Testing started");
testReduce([1, 2, 3, 4], 0, (a, b) => a + b, 10);
testReduce([0, 1, 1, 5], 5, (a, b) => a + b, 12);
testReduce([1, 2, 3, 4], 0, (a, b) => a * b, 24);
console.log("[reduce]: Testing done");

const testFilter = (input, callback, expected) => {
  const actual = myModule.filter(input, callback);
  console.log(`
  Inputs: ${input}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};

console.log("[filter]: Testing started");
testFilter([1, 2, 3, 4], (a) => a % 2 === 0, [2, 4]);
testFilter(["wolf", "football", "mega", "basketball"], (a) => a.length > 5, [
  "football",
  "basketball",
]);
testFilter([1, "two", 3, 4], (a) => typeof a === "string", ["two"]);
console.log("[filter]: Testing done");

const testForEach = (arr, callback, expected) => {
  const actual = myModule.forEach(arr, callback);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[forEach]: Testing started");
testForEach([1, 2, 3], (num, i, array) => (array[i] = num * 2), [2, 4, 6]);
testForEach(["one", "two", "three"], (num) => num, ["one", "two", "three"]);
testForEach(
  [1, 2, 3, 4, 5],
  (num, i, array) => {
    if (array[i] % 2 === 0) {
      return (array[i] = num * 2);
    }
  },
  [1, 4, 3, 8, 5]
);
console.log("[forEach]: Testing done");

const testTake = (arr, n, expected) => {
  const actual = myModule.take(arr, n);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[take]: Testing started");
testTake([], 3, []);
testTake([1, 2, 3], 2, [1, 2]);
testTake([1, 2, 3], 7, [1, 2, 3]);
console.log("[take]: Testing done");

const testSkip = (arr, n, expected) => {
  const actual = myModule.skip(arr, n);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[skip]: Testing started");
testSkip([], 3, []);
testSkip([1, 2, 3], 2, [3]);
testSkip([1, 2, 3], 7, []);
console.log("[skip]: Testing done");

const testSome = (arr, callback, expected) => {
  const actual = [myModule.some(arr, callback)];
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[some]: Testing started");
testSome([1, 4, -6, 5], (item) => item > 3, [true]);
testSome([1, 4, "test"], (item) => item === "test", [true]);
testSome([10, 10, 10], (item) => item < 3, [false]);
console.log("[some]: Testing done");

const testEvery = (arr, callback, expected) => {
  const actual = myModule.every(arr, callback);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqualNum(actual, expected)}
`);
};
console.log("[every]: Testing started");
testEvery([1, 4, -6, 5], (item) => item > 3, false);
testEvery([1, 4, "test"], (item) => item === "test", false);
testEvery([10, 10, 10], (item) => item > 3, true);
console.log("[every]: Testing done");

const testMax = (arr, expected) => {
  const actual = [myModule.max(arr)];
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[max]: Testing started");
testMax([1, 2, 3, 100], [100]);
testMax([-Infinity, -1000000000, 0, 100000000], [100000000]);
testMax([-Infinity, -Infinity, -Infinity], [-Infinity]);
console.log("[max]: Testing done");

const testMin = (arr, expected) => {
  const actual = [myModule.min(arr)];
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[min]: Testing started");
testMin([1, 2, 3, 100], [1]);
testMin([-Infinity, -1000000000, 0, 100000000], [-Infinity]);
testMin([-Infinity, -Infinity, -Infinity], [-Infinity]);
console.log("[min]: Testing done");

const testKeys = (obj, expected) => {
  const actual = myModule.keys(obj);
  console.log(`
  Inputs: ${JSON.stringify(obj)}
  Actual: ${actual}
  Expected: ${expected}
`);
};
console.log("[keys]: Testing started");
testKeys({ 1: "one", 2: "two", 3: "three" }, ["1", "2", "3"]);
testKeys({ 3: "one", 1: "two", 3: "three" }, ["1", "3"]);
testKeys({ one: 1, two: "two" }, ["one", "two"]);
console.log("[keys]: Testing done");

const testValues = (obj, expected) => {
  const actual = myModule.values(obj);
  console.log(`
  Inputs: ${JSON.stringify(obj)}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[values]: Testing started");
testValues(["x", "y", "z"], ["x", "y", "z"]);
testValues({ 0: "23", 1: "gg", 2: "ff" }, ["23", "gg", "ff"]);
testValues({ 70: "x", 21: "y", 35: "z" }, ["y", "z", "x"]);
console.log("[values]: Testing done");

const testPairs = (obj, expected) => {
  const actual = myModule.pairs(obj);
  console.log(`
  Inputs: ${JSON.stringify(obj)}
  Actual: ${actual}
  Expected: ${expected}
`);
};
console.log("[pairs]: Testing started");
testPairs({ 0: "23", 1: "gg", 2: "ff" }, [
  [0, "23"],
  [1, "gg"],
  [2, "ff"],
]);
testPairs({ 70: "x", 21: "y", 35: "z" }, [
  [21, "y"],
  [35, "z"],
  [70, "x"],
]);
testPairs({ 7: 1 }, [[7, "1"]]);
console.log("[pairs]: Testing done");

const testFromPairs = (obj, expected) => {
  const actual = myModule.fromPairs(obj);
  console.log(`
  Inputs: ${obj}
  Actual: ${JSON.stringify(actual)}
  Expected: ${JSON.stringify(expected)}
`);
};
console.log("[fromPairs]: Testing started");
testFromPairs(
  [
    [0, "23"],
    [1, "gg"],
    [2, "ff"],
  ],
  { 0: "23", 1: "gg", 2: "ff" }
);
testFromPairs(
  [
    [21, "y"],
    [35, "z"],
    [70, "x"],
  ],
  { 70: "x", 21: "y", 35: "z" }
);
testFromPairs([[7, "1"]], { 7: "1" });
console.log("[fromPairs]: Testing done");

const testChain = (arr, numTake, numSkip, expected) => {
  const actual = myModule.chain(arr).take(numTake).skip(numSkip).value();
  console.log(`
  Inputs: [${arr}]
  Actual: [${actual}]
  Expected: [${expected}]
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[chain]: Testing started");
testChain([1, 2, 3, 4, 5], 4, 2, [3, 4]);
testChain([1, 2, 3], 101, 2, [3]);
testChain([1, 2, 3], 2, 0, [1, 2]);
testChain([1, 2, 3], 0, 0, []);
testChain([1, 2, 3, 4], 0, 10, []);
testChain(["one", "two", "three", "four"], 3, 10, []);
console.log("[chain]: Testing done");

let obj = {
  1: "siu",
  2: "uis",
};

console.log(myModule.keys(obj));
