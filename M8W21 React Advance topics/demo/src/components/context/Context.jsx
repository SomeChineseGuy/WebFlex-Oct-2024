import React, { useState } from "react";
import Parent from "./Parent";
import CounterContext from '../../context/CounterContext';

const Context = () => {
  const [counter, setCounter ] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const values = {
    counter,
    increment,
    decrement,
    username: 'Steve',
    num: 100
  }
  return (
    <CounterContext.Provider value={values}>
        <div>
          <h1>Context - Counter: {counter}</h1>


          <Parent />
          
        </div>
    </CounterContext.Provider>
  )
};

export default Context;
