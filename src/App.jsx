import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Favorites from "./pages/Favorites";
import Add from "./pages/Add";

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
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/menu" element={<Home navLinks={navLinks} />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
