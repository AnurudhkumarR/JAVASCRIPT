// when dealing with objects, arrays, and immutability (like in React, Redux, or APIs).
// -----------------------------

// What Are Shallow and Deep Copies?
// ShallowCopy-Copies only the top-level properties. Nested objects or arrays are still linked (reference) to the original.
// DeepCopy-Copies everything recursively, including nested objects, so the new copy is fully independent.
// -------------------------------

// Example: Shallow Copy
// const user = {
//   name: "Anurudh",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// const shallowCopy = { ...user }; // Spread operator
// shallowCopy.name = "Raj"; // changes only copy
// shallowCopy.address.city = "Mumbai"; // changes original!
// console.log(user.address.city); //  "Mumbai"

//  Why?
// Because address (a nested object) is copied by reference, not by value.
// Both user.address and shallowCopy.address point to the same object in memory.

// ----------------------------------------------
// Example: Deep Copy
// const user = {
//   name: "Anurudh",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// //  Deep copy (method 1)
// const deepCopy = JSON.parse(JSON.stringify(user));
// deepCopy.address.city = "Mumbai";
// console.log(user.address.city); // "Delhi"

//  The nested object address is completely separate,
// so changing one doesn’t affect the other.
// -----------------------------------------------------

// Shallow Copy Methods
// Method	Example	Notes
// Spread operator	{ ...obj } / [...arr]	Easy & common
// Object.assign()	Object.assign({}, obj)	Copies only top level
// Array.slice()	arr.slice()	Copies only first level
// Array.concat()	arr.concat()	Copies array, not nested objects
// -------------------------------------
// Deep Copy Methods
// Method	Example	Notes
// JSON.parse(JSON.stringify(obj))	Easy but limited (no undefined, functions, or symbols)
// structuredClone(obj)	 New built-in, supports complex data
// Recursion	Write your own deep clone function
// Lodash library	_.cloneDeep(obj)	Most reliable, widely used

// // -------------------------------------------

// Real Development Scenarios
// Scenario	Type Used	Why
// Updating React state	Shallow copy with spread	You usually update top-level keys (e.g., {...state, name: 'New'})
// API data transformation	Deep copy	To modify nested structures safely
// Redux reducers	Deep copy (or immutable approach)	To prevent accidental mutation of store
// Cloning configurations	Deep copy	Avoid shared references in nested settings
// Temporary object edits	Shallow copy	If you only modify top-level values
// Copying DOM objects / Maps	Deep copy	They store references internally

// -------------------------------
// Visual Difference-
// Original: user = { name: "A", address: { city: "Delhi" } }

// Shallow Copy  → shares same address object
//    user.address === copy.address  true

// Deep Copy → independent address object
//    user.address === copy.address  false
// ------------------------------
// Example in React (Important in Dev)

// When updating nested state:

// const [user, setUser] = useState({
//   name: "Anurudh",
//   address: { city: "Delhi", pin: 110001 }
// });

// //  Wrong - mutates original state
// user.address.city = "Mumbai";

// //  Correct - use deep copy
// setUser({
//   ...user,
//   address: { ...user.address, city: "Mumbai" }
// });

//  This uses shallow copy at each level,
// making sure React sees the change (immutability principle).
// --------------------------------------

// Summary Table
// Feature	Shallow Copy	Deep Copy
// Level	Top-level only	All nested levels
// Nested Object	Reference copied	Cloned completely
// Memory	Shared references	Independent
// Performance	Faster	Slower
// Common Methods	Spread (...), Object.assign()	structuredClone(), JSON.parse(JSON.stringify()), _.cloneDeep()
// Used When	Only top-level changes	Complete isolation needed
