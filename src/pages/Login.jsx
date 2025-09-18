import React,{useState} from "react";
import loginimg from "../assets/login-img.PNG";
import "../styles/global.css"; // we’ll add CSS separately

function Login() {
  const [isChecked,setIsChecked]=useState(false);
  return (
    <div className="login-container">
      {/* Top Image */}
      <img src={loginimg} alt="Login" className="login-image" />

      {/* Heading */}
      <h2 className="login-heading">Login or Signup</h2>

      {/* Input box */}
      <div className="input-wrapper">
        <input
          type="tel"
          className="mobile-input"
          placeholder="+91 | Mobile Number"
          required
        />
        <span className="required-star">*</span>
      </div>

      {/* Checkbox + text */}
      <label className="terms-text">
        <input type="checkbox" checked={isChecked} /> By continuing I agree to the{" "}
        <span className="pink-link">
          <a href="/terms">Terms Of Use</a>
        </span>{" "}
        &{" "}
        <span className="pink-link">
          <a href="/privacy">Privacy Policy</a>
        </span>{" "}
        and I am above 18 years old.
      </label>

      {/* Button */}
      <button className="continue-btn">CONTINUE</button>

      {/* Help text */}
      <p className="help-text">
        Have trouble logging in?{" "}
        <span className="pink-link">
          <a href="/help">Get Help</a>
        </span>
      </p>
    </div>
  );
}

export default Login;
