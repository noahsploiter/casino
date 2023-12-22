import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/hero" element={<Hero />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
