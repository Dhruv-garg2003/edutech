
import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4003/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();

    if (res.status === 200 && data.msg === 'user exists and password is correct') {
      alert('User logged in successfully!');
      history.push('/');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div className="containerlogin">
      <div className="form-container" id="login-form">
        <h1 className='loginh'>Login</h1>
        <form className='formlo' onSubmit={handleSubmit}>
          <label className='loginlabel' htmlFor="username">Username</label>
          <input className='loginin' type="text" id="username" name="username" required onChange={handleInput} />
          <label className='loginlabel' htmlFor="password">Password</label>
          <input className='loginin' type="password" id="password" name="password" required onChange={handleInput} />
          <button className='loginbt' type="submit">Login</button>
        </form>
        <p className='loginp'>Don't have an account? <a className='logina' href='/signup'>Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
