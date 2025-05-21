import React, { useState } from "react";
import Register from "../components/Register";
import Logout from "../components/Logout";
function Home() {
  const [setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
      <Logout />
    </div>
  );
}
export default Home;
