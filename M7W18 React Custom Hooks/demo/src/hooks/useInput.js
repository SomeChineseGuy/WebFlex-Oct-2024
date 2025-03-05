import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("")
  // const [email, setEmail ] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const clearValue = () => {
    setValue("")
  }

  return [value, handleChange, clearValue];

}

export default useInput;