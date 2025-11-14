import React from "react";
import "./GameTrackerLanding.css";
import { Link } from "react-router-dom";

export default function GameTrackerLanding() {
  return (
    <div className="landing-container">
      {/* NAVBAR */}
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

      {/* HERO */}
      <main className="hero">
        <h2>TU ESPACIO GAMER</h2>
        <h1>Organiza, juega y reseña</h1>

        <p>
          Controla tus videojuegos favoritos, registra tus horas jugadas, 
          comparte reseñas y lleva tu progreso con estilo.
        </p>

        <Link to="/biblioteca">
          <button className="explore-btn">Explorar biblioteca →</button>
        </Link>
      </main>
      {/* SECCIÓN DE JUEGOS POPULARES */}
<section className="popular-section">
  <h2 className="popular-title">🎮 Juegos Populares</h2>

  <div className="popular-grid">
    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/08/Fortnite_Season_5_poster.jpg" alt="Fortnite" />
      <h3>Fortnite</h3>
    </div>

    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/3/3c/Call_of_Duty_Warzone_cover.jpg" alt="Warzone" />
      <h3>Call of Duty: Warzone</h3>
    </div>

    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Valorant_poster.jpg" alt="Valorant" />
      <h3>Valorant</h3>
    </div>

    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" alt="Minecraft" />
      <h3>Minecraft</h3>
    </div>

    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/6/6c/Roblox_Logo_2022.jpg" alt="Roblox" />
      <h3>Roblox</h3>
    </div>

    <div className="popular-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/2/2d/FIFA_23_Cover.jpg" alt="FIFA" />
      <h3>FIFA</h3>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 GameTracker — Tu espacio gamer
      </footer>
    </div>
  );
}
