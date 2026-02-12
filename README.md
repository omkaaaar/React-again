## Project: React-again

This small React project is a playground for learning core React concepts while building simple components.

**What I've learned so far:**

- **Component structure:** How to organize components inside `src/Components` and subfolders for child components.
- **Props:** Passing data from parent to child with props, and using them inside functional components.
- **State:** Using `useState` to hold local component state and render UI updates.
- **State Lifting:** Moving state up to a common parent so multiple child components can share and update the same state. Example: `StateLifting.jsx` holds `name` and passes `value` and `handleChangeName` to `StateLiftingExample.jsx`.
- **Controlled components:** Wiring form inputs with `value` and `onChange` so React controls input state.
- **Event handling:** Passing functions as props to handle user events in children and update parent state.
- **Debugging common mistakes:** Recognized and fixed a bug where the app rendered the child component directly (so the handler prop was missing), causing `handleChangeName is not a function`.
- **Dev tools & workflow:** Running the Vite dev server (`npm run dev`) and using the browser console to inspect runtime errors.
