const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

window.addEventListener(
  "click",
  (e) => {
    console.log("6. Window Event Listener");
  },
  { capture: false }
);

document.addEventListener(
  "click",
  (e) => {
    console.log("5. Document Event Listener");
  },
  { capture: false }
);

document.body.addEventListener(
  "click",
  (e) => {
    console.log("4. Body Event Listener");
  },
  { capture: false }
);

green.addEventListener(
  "click",
  (e) => {
    console.log("3. Green Event Listener");
  },
  { capture: false }
);

pink.addEventListener(
  "click",
  (e) => {
    console.log("2. Pink Event Listener");
  },
  { capture: false }
);

blue.addEventListener(
  "click",
  (e) => {
    console.log("1. Blue Event Listener");
  },
  { capture: false }
);

// { once: true } → The Key Part
// This is an event listener option (a third parameter object).
// The event listener will automatically remove itself after being triggered once.
// So the callback will run only one time, and any subsequent clicks will do nothing.
// Useful for confirmation popups, onboarding steps, or animations that should only happen once.
// Automatically cleans up listeners — you don’t need to manually call removeEventListener.
// Prevents unnecessary listeners from hanging around in memory.
blue.addEventListener(
  "click",
  (e) => {
    console.log("1. Blue Event Listener");
  },
  { once: true }
);
// t ensures the event listener is executed only once and then automatically removed after its first invocation.
// Property,	Meaning	and Common Use
// once	Removes listener after first trigger	One-time click or animation
// capture	Runs in capture phase before bubbling	Event flow control
// passive	Disables preventDefault() for performance	Touch or scroll events
