import React from "react";
import useInput from "../hooks/useInput";
import useArray from "../hooks/useArray";

const List = () => {
  const [value, onChange] = useInput();
  const {
    items,
    deleteItem,
    addItem
  } = useArray(['bread'])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(value)
  }

  return (
    <div>
      <h1>List!</h1>
      {items.map((item, i) => (
        <div key={i}>
          <p>{item} ------ <span onClick={() => deleteItem(i)}>X</span></p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">item : </label>
        <input type="text" value={value} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  )
};

export default List;
