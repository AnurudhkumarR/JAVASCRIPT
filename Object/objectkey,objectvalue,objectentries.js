// All three are Object static methods used to extract information from objects.

// Method	Returns	Type of Data	Use Case
// Object.keys(obj)	Array of keys	["name", "age"]	When you need property names
// Object.values(obj)	Array of values	["Anurudh", 25]	When you need property values
// Object.entries(obj)	Array of key–value pairs	[["name","Anurudh"], ["age",25]]	When you need both keys and values (for looping or mapping)
// ----------------

const user = {
  name: "Anurudh",
  age: 25,
  city: "Delhi",
};
// ---------------------------

// 1️ Object.keys()
//  Definition:
// Returns an array of the object’s own enumerable property names.

// const keys = Object.keys(user);
// console.log(keys); // ["name", "age", "city"]

//  Use Cases:
// When you need to loop through all keys
// To count number of properties (Object.keys(obj).length)

// To filter or map object keys
// Object.keys(user).forEach(key => {
//   console.log(key); // name, age, city
// });

//  2️ Object.values()
//  Definition:
// Returns an array of the object’s own enumerable property values.

// const values = Object.values(user);
// console.log(values); // ["Anurudh", 25, "Delhi"]

//  Use Cases:
// When you only care about values
// For mathematical operations on numeric properties

// Example:

// const scores = { math: 90, english: 80, science: 70 };
// const total = Object.values(scores).reduce((a, b) => a + b);
// console.log(total); // 240

//  3️ Object.entries()
//  Definition:
// Returns an array of [key, value] pairs.

// const entries = Object.entries(user);
// console.log(entries);
// // [["name", "Anurudh"], ["age", 25], ["city", "Delhi"]]

//  Use Cases:
// When you need both keys and values
// Easily convert an object into a Map

// Use with array methods like forEach(), map(), or filter()
// Example:
// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });
// ------------------------------------------------------

// Converting Back from Entries → Object
// Sometimes you modify entries and want to convert them back:

// const updatedEntries = Object.entries(user).map(([key, value]) => [key, String(value)]);
// const newUser = Object.fromEntries(updatedEntries);

// console.log(newUser);
// // { name: "Anurudh", age: "25", city: "Delhi" }

// Object.fromEntries() does the reverse of Object.entries().

// ---------------------------------------------------------

// Real Development Scenarios
// Scenario	Example	Why
// Count properties	Object.keys(obj).length	Quick size check
// Filter object data	Object.entries(obj).filter(...)	Data processing
// Convert object → Map	new Map(Object.entries(obj))	Use Map methods
// Convert API data to table	Loop over Object.entries()	Display key–value pairs
// Clone or modify values	Object.fromEntries(Object.entries(obj).map(...))	Transform object easily
