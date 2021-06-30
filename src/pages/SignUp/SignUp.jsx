import React from 'react';
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <form className="form">
        <h2>Register an account</h2>
        <div className="form-input">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Username" required />
        </div>
        <div className="form-input">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-input">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-input">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <button type="submit" className="btn signUpBtn">Submit</button>
      </form>
    </div>
  )
};

export default SignUp;
