import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const {increment, counter, decrement} = useCounter(200);
  // const {counter: counter2, increment: increment2, decrement: decrement2} = useCounter(-90);

  const [counter, increment, decrement] = useCounter(200);
  const [counter2, increment2, decrement2] = useCounter(90);
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <h1>Counter: {counter2}</h1>
        <button onClick={increment2}>Increment</button>
        <button onClick={decrement2}>Decrement</button>
      </div>
    </div>
  )
};

export default Counter;
