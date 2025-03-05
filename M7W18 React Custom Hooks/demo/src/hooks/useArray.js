import { useState } from "react";

const useArray = (initialState) => {
  const [items, setItems ] = useState(initialState);

  const deleteItem = (i) => {
    const newArr = items.filter((item, idx) => i !== idx)
    setItems(newArr)
  }

  const addItem = (value) => {
    setItems([value, ...items])
  }

  return {
    items,
    deleteItem,
    addItem
  }
}

export default useArray;