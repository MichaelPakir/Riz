import React, { useState } from "react";
import { auth } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "./../pages/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Register() {
  const location = useLocation();
  const pathname = location.pathname;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isLogin = pathname.startsWith("/login");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
      console.log("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div>
        {isLogin ? <h2>Login Page</h2> : <h2>Signup Page</h2>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Comfirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        {isLogin ? (
          <button onClick={handleSignUp}>Log In</button>
        ) : (
          <button onClick={handleSignUp}>Sign Up</button>
        )}

        {isLogin ? (
          <Link to={"/"}>go to login</Link>
        ) : (
          <Link to={"/login"}>go to signup</Link>
        )}
      </div>
    </div>
  );
}

export default Register;
