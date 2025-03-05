import React from "react";
import useInput from "../hooks/useInput";

const Form = () => {
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange, clearPassword] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} and password: ${password}`)
    clearPassword();
  }

  return (
    <div>
      <h1>Form!</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Email</label>
        <input type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="">Password</label>
        <input type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>Login!</button>
      </form>

    </div>
  )
};

export default Form;
