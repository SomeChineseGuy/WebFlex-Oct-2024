import { useState } from "react";

const List = () => {
  const [list, setList] = useState(["bread", "Ham", "Cheese", 'Beef']);

  const addItem = () => {
    console.log('fire');
    // const newList = list;
    setList(["Mayo", ...list])
  }

  const clickItem = () => {
    console.log('click');
  }

  return (
    <div>
      <h1>List</h1>
      {list.map((item, i) => {
        return (
          <p onClick={clickItem} key={i}>{item}</p>
        )
      })}

      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default List;