import React, { useState } from 'react';
import { assets } from '../../assets/asset'
import './Login.css'

const Login = ({setShowlogin}) => {
  const [curr, setCurr] = useState("Login");

  return (
    <div className="Login" style={{ padding: "30px" }}>
      <div className="login-container">
        <div className="login-title">
          <h2>{curr}</h2>
           <img onClick={()=>setShowlogin(false)} src={assets.cross_icon}></img>
        </div>

        <div className="login-inputs">
          {curr === "Sign Up" && <input type="text" placeholder="Enter your name" />}
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter Password" />
        </div>

        <button>{curr === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-condition">
          <input type="checkbox" />
          <p>
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {curr === "Login" ? (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => {setCurr("Sign Up");}}>
              Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}<span onClick={() => {setCurr("Login"); }} >
            Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
