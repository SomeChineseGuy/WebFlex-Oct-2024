import React, { useCallback, useEffect, useMemo, useState } from "react";

const Effect = () => {
const [counter, setCounter ] = useState(0)

  // first render and all rerenders
  useEffect(() => {
    console.log('Normal useEffect');
  })

  // 
  useEffect(() => {
    console.log('Only in initial render');

    return () => {

    }
  }, [])

  //
  useEffect(() => {
    const interv = setInterval(() => {
      console.log('New Time has come');
    }, 2000)
    return () => {
      clearInterval(interv)
    }
  }, [counter])



  console.log('fire');
  return (
    <div>
      <h1>Effect! {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
};

export default Effect;
