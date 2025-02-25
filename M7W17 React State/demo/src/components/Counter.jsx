 
let count = 0;
// Save values in Memory
// Whenever a value is UPDATED re run the function (Re render the component)
// State
// Hooks that react provides
// React.useState
// Hooks are anything with the word use in front of it
// useState, useReducer and useEffect

import { useState } from "react";

const Counter = (props) => {
  // useState has 2 parts 
  // const arr = useState(0);
  // const getter = arr[0];
  // const setter = arr[1];
  // const [counter, setCounter] = useState(0);
  const increment = () => {
    // counter++
    props.setCounter(props.counter + 1);
  }

  return(
    <div>
      <h1>Counter: {props.counter}</h1>
      {/* <button onClick={() => increment()}>Increment</button>
      <button onClick={() => count++}>Increment</button> */}
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter;


// Find the element
// Put a EventListener to it
// click $('button').on('click', () => counter++)
// click $('button').on('click', increment)