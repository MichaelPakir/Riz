import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login"

const MainLayout = () => {
  return (
    <div>
      <Login />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
