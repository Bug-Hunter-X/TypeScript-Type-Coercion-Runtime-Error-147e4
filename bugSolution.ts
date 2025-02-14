function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Type safety works here
console.log(result); // Output: 8

//Solution
try {
  result = subtract(5, Number("3")); //Explicit type conversion
  console.log(result); // Output: 2
} catch (error) {
  console.error("An error occurred:", error);
}

//Alternative solution using type guards:
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function subtractSafe(a: number, b: any): number {
    if (isNumber(b)) {
        return a - b; 
    } else {
        throw new Error('Argument b is not a number');
    }
}

//Example of safe subtraction:
 try {
     result = subtractSafe(5, "3");
 } catch (error) {
     console.error("An error occurred:", error);
 }