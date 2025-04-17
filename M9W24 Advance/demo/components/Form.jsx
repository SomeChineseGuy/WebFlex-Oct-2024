"use client"
import React, {useState} from "react";
import axios from 'axios'

const UserForm = () => {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete('/api/users', {email, password}).then(({data}) => {
      console.log(data);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="">password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
};

export default UserForm;
