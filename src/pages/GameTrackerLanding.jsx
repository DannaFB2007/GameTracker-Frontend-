import React from "react";
import { Link } from "react-router-dom";
import "./GameTrackerLanding.css";

export default function GameTrackerLanding() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">🎮 GameTracker</h1>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/biblioteca">Biblioteca</Link></li>
          <li><Link to="/reseñas">Reseñas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <Link to="/login" className="register-btn">Iniciar sesión</Link>
      </nav>

      <main className="content">
        <div className="text-section">
          <h2 className="subtitle">Tu espacio gamer</h2>
          <h1 className="title">Organiza, juega y reseña</h1>
          <p className="description">
            Lleva el control de tus videojuegos favoritos, registra tus horas jugadas,
            puntúa tus experiencias y comparte reseñas con otros gamers.
          </p>
          <Link to="/biblioteca" className="learn-more">Explorar biblioteca →</Link>
        </div>

        <div className="image-section">
          <img
            src="https://img.freepik.com/foto-gratis/paisaje-fantasia-cientifica_23-2151892577.jpg?semt=ais_hybrid&w=740&q=80"
            alt="GameTracker"
          />
        </div>
      </main>

      <footer className="footer">
        © 2025 GameTracker. 
      </footer>
    </div>
  );
}
