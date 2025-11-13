import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameTrackerLanding from "./pages/GameTrackerLanding";
import GameDashboard from "./pages/GameDashboard";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameTrackerLanding />} />
        <Route path="/biblioteca" element={<GameDashboard />} />
        <Route path="/reseñas" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
