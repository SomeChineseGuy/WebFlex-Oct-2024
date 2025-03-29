import React, {useContext} from "react";
import CounterContext from "../../context/CounterContext";

const Child = () => {
  const {increment, decrement} = useContext(CounterContext)

  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Child;
