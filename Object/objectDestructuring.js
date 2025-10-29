// What Is Object Destructuring?
// Object destructuring is a syntax that lets you extract values from objects (or nested objects) into individual variables — in a clean and readable way.
// ----------------------------------------
// const user = {
//   name: "Anurudh",
//   age: 25,
//   city: "Delhi",
// };

// //  Old way
// const name = user.name;
// const age = user.age;

// //  New way (destructuring)
// const { name, age } = user;

// console.log(name); // Anurudh
// console.log(age); // 25
// // ------------------------------
// Why Use Destructuring?
// Old Way	Problem
// Access each property manually	Verbose and repetitive
// Hard to read	Especially when there are many properties
// Not scalable	In large APIs, you often only need a few values

// Destructuring solves this by making code:
// Clean
// Short
// Easy to maintain
// Perfect for extracting data from APIs, props, and configs

// // ---------------------------------------------
// When & Where to Use
// Use Case	Example
// 1️ Extracting object data	From config or user object
// 2️ Function parameters	Especially in React components or APIs
// 3️ Default values	When some properties might be missing
// 4️ Renaming variables	Avoid name conflicts
// 5️ Nested objects	Extract deeply nested values
// --------------------------------------
// 1️ Extracting Object Data
// const settings = { theme: "dark", language: "en" };
// const { theme, language } = settings;
// console.log(theme); // dark
// // // --
// 2️ Destructuring in Function Parameters
//  Common in React or API handlers
// function greet({ name, age }) {
//   console.log(`Hello ${name}, age ${age}`);
// }

// const person = { name: "Anurudh", age: 25 };
// greet(person);

// Benefit:
// You can directly use name and age without writing person.name or person.age inside the function.
// --
// 3️ Setting Default Values
// const user = { name: "Anurudh" };
// const { name, age = 25 } = user; // default age
// console.log(age); // 25

//  Useful when the property might not exist (e.g., from incomplete API response).
// --
// 4️ Renaming Variables
// If you want to store the property in a variable with a different name:

// const user = { name: "Anurudh", city: "Delhi" };
// const { name: userName, city: location } = user;
// console.log(userName); // Anurudh
// console.log(location); // Delhi

//  Helps avoid naming conflicts (e.g., if name already used somewhere else).
// --
// 5️ Nested Object Destructuring
// const user = {
//   name: "Anurudh",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// // Nested destructuring
// const { address: { city, pin } } = user;
// console.log(city); // Delhi
// console.log(pin);  // 110001

//  Useful when data comes from nested APIs or configs.
// --
// 6️ Destructuring with Rest Operator (...)
// You can also collect the remaining properties into another object.

// const user = { name: "Anurudh", age: 25, city: "Delhi" };
// const { name, ...rest } = user;
// console.log(name); // Anurudh
// console.log(rest); // { age: 25, city: "Delhi" }

// Very useful when you need to separate one field (like id) and keep the rest for further use.
// --
// 7️ Destructuring Arrays from Object
// Sometimes, object values are arrays:

// const user = {
//   name: "Anurudh",
//   skills: ["JS", "React", "Node"]
// };
// const { skills: [firstSkill, secondSkill] } = user;
// console.log(firstSkill); // JS
// // --
// 8️ Combining Destructuring with Default + Rename
// const config = { theme: "dark" };
// const { theme: mode = "light", language = "en" } = config;
// console.log(mode);      // dark
// console.log(language);  // en
// ----------------------------------------------------------------------------

// In Real Development Scenarios
//  Example 1: React Component
// function Profile({ name, age, city }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age} years old from {city}</p>
//     </div>
//   );
// }
//  Clean parameter destructuring instead of writing props.name, props.age, etc.
// // --
// Example 2: API Response
// const response = {
//   status: 200,
//   data: { id: 1, name: "Anurudh", email: "anu@gmail.com" }
// };
// const { data: { name, email } } = response;
// console.log(name);  // Anurudh
// Makes working with nested API data super easy.
// --
// Example 3: Backend (Node.js)
// const { PORT = 3000, DB_URL } = process.env;
// console.log(`Server running on port ${PORT}`);

//  Useful for loading environment variables with default values.

// -----------------------------------------------------------------------------
// Summary Table
// Feature	Example	Purpose
// Basic destructure	{ name } = obj	Extract properties
// Default value	{ age = 25 } = obj	Avoid undefined
// Rename variable	{ name: userName } = obj	Change name
// Nested	{ address: { city } } = obj	Access deep values
// Rest operator	{ name, ...rest } = obj	Get remaining props
// Function params	function({name}){}	Clean arguments
// --------------------------------------------

// In Short:
// Destructuring = Easy unpacking of object properties into variables.

//  Use it when:
// You get data from APIs
// You pass props in React
// You use config or environment objects
// You handle function arguments cleanly
