// Both rest (...rest) and spread (...spread) use the same syntax (...),
// but they do opposite things depending on the context.

// 1️ The Main Difference
// Operator	Purpose	Works In	Meaning
// Rest (...rest)	Collects multiple values into one array/object	Function parameters or destructuring	Gather values
// Spread (...spread)	Spreads an array/object into individual elements	Function calls, array/object literals	Expand values
// --------------------------------------------
// REST OPERATOR (...rest)
//  Definition:
// The rest operator collects all remaining elements into an array (or object).
// It is used in function parameters and destructuring.

//  Example 1: Rest in Function Parameters
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10
//  All arguments passed to sum are collected into an array named numbers.
// So, numbers = [1, 2, 3, 4].
// --
// Example 2: Rest in Array Destructuring

// const fruits = ["apple", "banana", "cherry", "mango"];
// const [first, second, ...restFruits] = fruits;
// console.log(first);      // apple
// console.log(second);     // banana
// console.log(restFruits); // ["cherry", "mango"]
//  restFruits gathers the remaining items into an array.
// --
// Example 3: Rest in Object Destructuring
// const user = { name: "Anurudh", age: 25, city: "Delhi", country: "India" };

// const { name, ...restInfo } = user;
// console.log(name);     // Anurudh
// console.log(restInfo); // { age: 25, city: "Delhi", country: "India"
//  restInfo gathers the remaining properties of user into a new object.
// // --
// When to Use Rest Operator
// Scenario	Why Use
// Unknown number of function arguments	e.g., sum(...numbers)
// Skip first few elements	e.g., [first, ...rest]
// Copy all remaining properties	e.g., { name, ...others }
// Cleaner, more flexible functions	No need for arguments object
// ----------------------------------------------------------------------------
// SPREAD OPERATOR (...spread)
//  Definition:
// The spread operator takes an iterable (like an array or object) and expands it into individual elements.
// It is used in function calls, array literals, and object literals.

//  Example 1: Spread in Function Calls
// const numbers = [1, 2, 3, 4];
// console.log(Math.max(...numbers)); // 4
//  The array [1, 2, 3, 4] is spread into individual values → Math.max(1, 2, 3, 4).
// --
// Example 2: Spread in Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]
// Combines two arrays easily (instead of using concat()).
// --
// Example 3: Spread for Copying Arrays
// const original = [1, 2, 3];
// const copy = [...original];
// copy.push(4);
// console.log(original); // [1, 2, 3]
// console.log(copy);     // [1, 2, 3, 4]
//  Creates a shallow copy of the array — not a reference.
// --
// Example 4: Spread in Objects
// const user = { name: "Anurudh", city: "Delhi" };
// const details = { age: 25, country: "India" };
// const merged = { ...user, ...details };
// console.log(merged);
// // { name: "Anurudh", city: "Delhi", age: 25, country: "India" }
// Merges multiple objects (like Object.assign()).
// --
// Example 5: Spread with New Properties
// const user = { name: "Anurudh", city: "Delhi" };
// const updated = { ...user, city: "Mumbai", age: 25 };
// console.log(updated);
// // { name: "Anurudh", city: "Mumbai", age: 25 }
//  Common in React — used for immutably updating state.
// --
// =----------------------------------------------
// When to Use Spread Operator
// Scenario	Why Use
// Function calls	Pass array as arguments (Math.max(...arr))
// Merge arrays	[...arr1, ...arr2]
// Copy arrays or objects	Avoid mutation or references
// Merge objects	{...obj1, ...obj2}
// React props	<Component {...props} />
// Update immutable state	{...oldState, newProp: value}
// // --
// Real Development Scenarios
//  1️ React Components
// const props = { name: "Anurudh", age: 25 };
// <Component {...props} />
// Spreads all props into the component easily.
// --
// 2️ Node.js Config
// const baseConfig = { db: "main", port: 3000 };
// const devConfig = { ...baseConfig, debug: true };
//  Merge or override config safely without mutation.
// // --
//  3️ API Parameter Handling
// function sendRequest(endpoint, ...params) {
//   console.log("Endpoint:", endpoint);
//   console.log("Params:", params);
// }
// sendRequest("/api", "GET", { id: 1 });
//  Collects variable-length parameters neatly.
// --
// -----------------------
// Summary Table
// Feature	Operator	Description	Example
// Gather items	...rest	Collects multiple items into array/object	function sum(...nums){}
// Expand items	...spread	Expands iterable/object into elements	Math.max(...nums)
// Used in	Rest: params/destructuring
// Spread: arrays/objects/function calls
// Purpose	Rest → collect	Spread → expand
// // --
//  In Short:
// Rest = Gather values into one.
// Spread = Expand one into many.

//  Rest = collect things together
//  Spread = break things apart
