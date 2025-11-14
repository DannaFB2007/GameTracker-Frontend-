import React from "react";
import { Link } from "react-router-dom";
import "./GameTrackerLanding.css";

export default function GameTrackerLanding() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">GameTracker</h1>

        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/biblioteca">Biblioteca</Link>
          </li>
          <li>
            <Link to="/reseñas">Reseñas</Link>
          </li>
          <li>
            <Link to="/estadisticas">Estadísticas</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        <Link to="/login">
          <button className="login-btn">Iniciar sesión</button>
        </Link>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <h2>Tu espacio gamer</h2>
          <h1>Organiza, juega y reseña</h1>
          <p>
            Controla tus videojuegos favoritos, registra tus horas jugadas,
            comparte reseñas y lleva tu progreso con estilo.
          </p>

          <Link to="/biblioteca">
            <button className="explore-btn">Explorar biblioteca →</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src="/images/hero.png" alt="GameTracker" />
        </div>
      </main>

      <footer className="footer">
        © 2025 GameTracker — Tu espacio gamer
      </footer>
    </div>
  );
}
