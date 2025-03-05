import { useState } from "react";

const useCounter = (initialState) => {
  const [counter, setCounter ] = useState(initialState);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return [counter, increment, decrement]
  // return {
  //   counter,
  //   increment,
  //   decrement
  // }
}


export default useCounter;