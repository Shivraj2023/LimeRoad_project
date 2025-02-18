import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import your CSS file

const Login = () => {
  const [mobile, setMobile] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" // 
          alt="User"
          className="login-avatar"
        />
        <h2 className="login-title">
          <i className="fa-solid fa-user"></i> SIGN IN
        </h2>
        <p className="login-subtext">sign in to proceed further</p>
      </div>

      <div className="login-form">
        <label className="login-label">Mobile Number</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="login-input"
        />

        <button className="login-button" disabled={!mobile}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Login;
