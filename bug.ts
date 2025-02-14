function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Type safety works here
console.log(result); // Output: 8

result = subtract(5, "3"); // Type error should be caught
console.log(result); // This will cause runtime error