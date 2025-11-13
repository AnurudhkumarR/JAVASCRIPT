## Event Flow-

Capture (down) → Target → Bubble (up)
This propagation path lets developers intercept, modify, stop, or delegate event handling.

## Define-

Event Flow defines how events propagate through the DOM in three distinct phases: capturing, target, and bubbling.
Understanding this is essential for building reliable UI interactions, event delegation, and preventing unwanted side effects.

CAPTURING PHASE (top-down):
window
↑
document
↑
html
↑
body
↑
div.parent
↑
button.child ← TARGET PHASE
↓
BUBBLING PHASE (bottom-up):
div.parent
↓
body
↓
html
↓
document
↓
window

---

-----------------------------------SUMMARY-------
“JavaScript events propagate in a three-phase cycle: capturing → target → bubbling. Capturing flows from the window to the target, bubbling flows back up from target to window. We can use the capture option, stopPropagation(), and event.target/currentTarget to control and optimize this flow.

This understanding is crucial for implementing patterns like event delegation, avoiding double-handling, and building high-performance, scalable UI systems.”

“Event Flow enables event delegation, where we attach a single listener to a parent instead of many listeners to child elements.”
-End--------------

## Event Flow Controllers —Family-Wise Classification-

1. Propagation Controller
   Control how far an event travels.

a) event.stopPropagation()
Stops event from bubbling/capturing any further.

b) event.stopImmediatePropagation()
Stops everything:
further propagation
other listeners on same element

c) event.cancelBubble = true
Old alias for stopPropagation (legacy).

2. Default Behavior Controllers
   Control the browser’s default action.

a) event.preventDefault()
Stops default action (form submit, link navigation, checkbox toggle).

b) passive: true (listener option)
Prevents calling preventDefault() on scroll/touch events.
Used for performance.

3. Listener Behavior Controllers
   Control how a listener behaves when attached.

a) Capture Phase Listener
addEventListener("click", handler, { capture: true })
Runs in capturing phase (top → down).

b) Bubble Phase Listener
Default phase:
addEventListener("click", handler)

c) once: true
Listener runs only one time:
addEventListener("click", handler, { once: true })

d) removeEventListener()
Manually removes a listener → stops future flow.

4. Structural / Architectural Flow Control
   Not methods — but patterns that control event flow by design.

a) Event Delegation
Putting listener on a parent instead of many children.

parent.addEventListener("click", (e) => {
if (e.target.matches(".item")) {
// handle item click
}
});

b) Event Phases
Understanding and choosing:
Capturing (top → down)
Target
Bubbling (bottom → up)
These phases themselves are part of event flow control.

---

## Define for interview event controlling-

“Event flow controllers fall into four families: propagation controllers (stopPropagation, stopImmediatePropagation), default behavior controllers (preventDefault, passive listeners), listener behavior controllers (capture, once, removeEventListener), and architectural controllers such as event delegation and phase selection. These collectively allow full control over how events travel and behave in the DOM.”

<!-- // Controlling Event Flow:
// addEventListener(eventType, handler, useCapture): The useCapture argument (a boolean) determines whether the handler is registered for the capturing phase (true) or the bubbling phase (false or omitted).
// event.stopPropagation(): This method can be called within an event handler to prevent the event from continuing its journey through the capturing or bubbling phases. This means no further handlers in the current phase or subsequent phases will be executed for that event.
// event.stopImmediatePropagation(): This not only stops the event flow but also prevents any other handlers on the same element from being executed, even if they were registered earlier. -->
