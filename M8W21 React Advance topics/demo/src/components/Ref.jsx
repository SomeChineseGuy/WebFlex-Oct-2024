import React, { useState, useRef } from "react";

const Ref = () => {
  const [value, setValue ] = useState("");
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(inputRef.current.value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>This is the Ref component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" value={value} onChange={handleChange} />
        <br />
        <label htmlFor="name">Username: </label>
        <input type="text" ref={inputRef} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Ref;
