function expect(val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
}

// Test cases
const func1 = () => ({ "value": expect(5).toBe(5) });
console.log(func1()); // Output: {"value": true}

try {
  const func2 = () => expect(5).toBe(null);
  console.log(func2());
} catch (error) {
  console.log({ "error": error.message }); // Output: {"error": "Not Equal"}
}

const func3 = () => ({ "value": expect(5).notToBe(null) });
console.log(func3()); // Output: {"value": true}
