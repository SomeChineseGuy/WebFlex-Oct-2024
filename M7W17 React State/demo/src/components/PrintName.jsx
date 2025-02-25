import { useState } from "react";

const PrintName = () => {
  const [username, setUsername] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const userTypeName = formData.get('name')
    setUsername(userTypeName)
  }

  return(
    <div>
      <h1>Print my name</h1>
      <h1>{username}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
};

export default PrintName;