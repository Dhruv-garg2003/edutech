import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';

function Register() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const history = useHistory()

  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:4003/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    console.log(data)

    if(data.msg === 'user created'){
      history.push('/login')
    } else {
      alert('User already exists')
    }

  }

  return (
    <>
    <div className="containerlogin">
    <div className="form-container" id="signup-form" >
      <h1 className='loginh'>Sign Up</h1>
      <form className='formlo' onSubmit={handleSubmit}>
        <label className='loginlabel' htmlFor="new-username" >Username</label>
        <input className='loginin' type="text" id="new-username" name="username" required onChange={handleInput}/>
        <label className='loginlabel' htmlFor="new-email">Email</label>
        <input type="email" className='loginin' id="new-email" name="new-email" required />
        <label className='loginlabel' htmlFor="new-password">Password</label>
        <input type="password" id="new-password" className='loginin' name="password" required onChange={handleInput} />
        <button className='loginbt' type="submit">Sign Up</button>
      </form>
      <p className='loginp'>Already have an account? <a href='/login' className='logina' id="login-link">Login</a></p>
    </div>
    </div>
    </>
  );
}

export default Register;
