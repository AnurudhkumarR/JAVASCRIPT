// Cloning means creating a copy of an existing object.
// Depending on your needs, it can be either a:

// Shallow copy → copies top-level properties only (references remain for nested objects).
// Deep copy → copies everything recursively (fully independent).

//  1️ Shallow Clone (Top-Level Only)
// Methods:
// a-spread opertor(...)
// const user = { name: "Anurudh", age: 25 };
// const clone = { ...user };
// console.log(clone);

// When to use:
// When object has only primitive values (no nested objects).
// In React state updates (to avoid mutating original object).

//  Where:
// Frontend apps (React, Angular)
// Shallow state updates
// Simple configuration copies

//  Why:
// Easy, fast, and clean syntax.

// b- using object.assign()
// const user = { name: "Anurudh", age: 25 };
// const clone = Object.assign({}, user);
// console.log(clone);
//  When to use:

// When you need a quick shallow clone (same as spread).
// Supported in older browsers (pre-ES6).

// Where:
// Backend (Node.js) or frontend (legacy support).

// Why:
// Safe way to copy without modifying original.
// ---------------------------
// 2️ Deep Clone (Full Copy)
//  Methods:
// a) Using JSON.parse(JSON.stringify())
// const user = { name: "Anurudh", address: { city: "Delhi" } };
// const deepClone = JSON.parse(JSON.stringify(user));

//  When to use:
// When object contains nested structures.
// When you want to fully separate cloned data from original.

//  Where:
// API responses, data transformation, caching, Redux state management.

//  Why:
// Converts to JSON string → recreates new memory copy (breaks references).

// Limitations:
// Doesn’t handle undefined, functions, Dates, or Symbols.
// --
// b) Using structuredClone() (Modern Built-in)
// const user = { name: "Anurudh", address: { city: "Delhi" } };
// const deepClone = structuredClone(user);

//  When to use:
// Modern browsers / Node.js 17+
// When object may contain Dates, nested objects, arrays, Maps, etc.

//  Where:
// Modern web apps, Node.js 18+, or PWAs.

//  Why:
// Deep copies almost everything safely.
// // --
// c) Using Lodash cloneDeep()
// import _ from "lodash";
// const user = { name: "Anurudh", address: { city: "Delhi" } };
// const deepClone = _.cloneDeep(user);

//  When to use:
// Large-scale projects (React, Node, TypeScript).
// When object may include complex structures (nested arrays, objects, Dates).

//  Where:
// Enterprise apps, backend APIs, Redux store, GraphQL layers.

//  Why:
// Most reliable and production-safe deep cloning method.
// ---------------------------------------------------
// Real Development Scenarios
// Scenario	Type of Clone	Why
// Updating shallow React state	Shallow ({ ...state })	Avoid mutation
// Copying API response for manipulation	Deep	Prevent changing original data
// Redux or Zustand state management	Deep	Immutable updates
// Cloning configuration or settings	Deep	Avoid shared references
// Creating backup of object before update	Deep	Restore if needed
// ------------------------------------

// Method	Type	Supports Nested?	Keeps Functions?	Common Use
// Spread (...)	Shallow	 No	 Yes	Simple state updates
// Object.assign()	Shallow	 No	 Yes	Older browser support
// JSON.parse(JSON.stringify())	Deep	 Yes	 No	Clean data clone
// structuredClone()	Deep	 Yes	 Yes	Modern projects
// _.cloneDeep() (Lodash)	Deep	 Yes	 Yes	Complex or enterprise-level apps

// In Short
// Shallow clone: { ...obj } or Object.assign()
// Deep clone: structuredClone(obj) or JSON.parse(JSON.stringify(obj))
//  Use shallow clone → when updating state or copying flat objects.
//  Use deep clone → when working with nested data (APIs, configs, or Redux).
