import React from "react";
import "./GameTrackerLanding.css";

export default function GameTrackerLanding() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">GameTracker</h1>
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Biblioteca</li>
          <li>Reseñas</li>
          <li>Estadísticas</li>
          <li>Contacto</li>
        </ul>
        <button className="login-btn">Iniciar sesión</button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <h2>Tu espacio gamer</h2>
          <h1>Organiza, juega y reseña</h1>
          <p>
            Controla tus videojuegos favoritos, registra tus horas jugadas,
            comparte reseñas y lleva tu progreso con estilo.
          </p>
          <button className="explore-btn">Explorar biblioteca →</button>
        </div>

        <div className="hero-image">
          <img src="/images/hero.png" alt="GameTracker" />
        </div>
      </main>

      <footer className="footer">© 2025 GameTracker — Tu espacio gamer</footer>
    </div>
  );
}
