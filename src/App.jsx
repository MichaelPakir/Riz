import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Favorites from "./pages/Favorites";
import Add from "./pages/Add";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  const [navLinks] = useState([
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Edit",
      path: "/edit",
    },
    {
      label: "Favorites",
      path: "/favorites",
    },
    {
      label: "Add",
      path: "/add",
    },
    { label: "Login", path: "/login" },
  ]);

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout navLinks={navLinks} />}>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home navLinks={navLinks} />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
