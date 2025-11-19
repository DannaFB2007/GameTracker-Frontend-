import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">GameTracker</h1>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/biblioteca">Biblioteca</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <Link to="/login">
        <button className="login-btn">Iniciar sesión</button>
      </Link>
    </nav>
  );
}
