// The optional chaining operator (?.) allows you to safely access deeply nested object properties
// without causing an error if an intermediate property doesn’t exist.

// Instead of throwing TypeError: Cannot read property 'x' of undefined,
// it simply returns undefined when something in the chain is missing.
// -------------------
// without optional chaining
// const user = {
//   name: "Anurudh",
//   address: { city: "Delhi" }
// };

// console.log(user.address.city); //  Delhi
// console.log(user.contact.phone); //  Error: Cannot read property 'phone' of undefined

// --------
// with optional chaining
// console.log(user?.contact?.phone); // undefined  (no error)
// JavaScript stops execution when it finds undefined or null,
// and just returns undefined — preventing runtime crashes.
// ---------------

//  Syntax and Use Cases
// Pattern	Description	Example
// Object- property	Safely access nested property	user?.address?.city
// Array- index	Safely access array elements	arr?.[0]
// Function- call	Safely call a function if it exists	user.getName?.()
// Combination-	Mix with other operators	user?.friends?.[0]?.name
// ----------

//  Example Scenarios
//  1️ Accessing Nested Object Data (e.g., API responses)
// const apiResponse = {
//   user: {
//     profile: { name: "Anurudh" }
//   }
// };

// console.log(apiResponse?.user?.profile?.name); // "Anurudh"
// console.log(apiResponse?.account?.email); // undefined (no error)

//  When to use:
// When working with APIs or external data that may have missing fields.

//  Where:
// Frontend apps (React/Vue)
// Backend data validation (Node.js)

//  Why:
// Prevents crashes due to undefined data in deeply nested responses.

// 2️ Accessing Optional Array Elements
// const users = [{ name: "Anurudh" }];

// console.log(users?.[0]?.name); // "Anurudh"
// console.log(users?.[1]?.name); // undefined (safe)

//  When: Iterating or accessing dynamic list elements
//  Where: UI rendering loops (React), data transformation
//  Why: Avoids runtime errors on missing indexes.

// 3️ Optional Function Calls
// const user = {
//   name: "Anurudh",
//   greet() { console.log("Hello"); }
// };

// user.greet?.(); //  "Hello"
// user.sayBye?.(); //  no error, just undefined

//  When: Function may or may not exist
//  Where: Plugin-based systems, callbacks, or optional hooks
// Why: Prevents “not a function” errors.
// -----------------------
// * Combining Optional Chaining with Nullish Coalescing (??)

// They are often used together.

// const user = { profile: null };

// const city = user?.profile?.address?.city ?? "Unknown";
// console.log(city); // "Unknown"

//  Optional chaining (?.) safely checks the path
//  Nullish coalescing (??) provides a fallback if undefined or null
// --------------

// Important Notes

// Works only with optional properties (undefined or null).
//  It won’t stop other errors (like syntax or type errors).

// Doesn’t prevent mistakes like using the wrong property name.

// Short-circuits — once it finds undefined or null, it stops checking further.
// ------------------
//  Summary Table
// Feature	Purpose	Example	Result
// Optional property	Avoid undefined error	obj?.prop	returns value or undefined
// Optional nested access	Safe deep property check	obj?.nested?.value	undefined if missing
// Optional function call	Avoid “not a function” error	obj.method?.()	safely skip
// Optional array access	Safe element read	arr?.[0]	element or undefined
// // ------------------------
// Real-World Uses
// Use Case	Where	Why
// Access API data safely	React / Angular	Some nested fields may not exist
// Render user info	React components	Avoid breaking UI if field missing
// Optional callbacks	Node.js / Event systems	Only call if defined
// Config / settings files	Full-stack apps	Optional values in configs
// Plugin systems	Modular apps	Functions may or may not exist

// ------------------
// In Short:
// ?. (optional chaining) allows you to safely access nested properties without throwing errors when something is missing.

//  When: Accessing uncertain or optional data
//  Where: API responses, React props, user input, or optional callbacks
//  Why: Prevents runtime crashes and makes code cleaner, safer, and readable
