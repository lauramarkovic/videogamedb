import React, { useState } from 'react';
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  }

  return (
    <div className="signin">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Log in to your account</h2>
        <div className="form-input">
          <label for="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-input">
          <label for="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="sign-in-btns">
          <button type="submit" className="btn signInBtn">Sign In</button>
          <button type="submit" className="btn signInGoogleBtn">Sign in with Google</button>
        </div>
      </form>
    </div>
  )
};

export default SignIn;
