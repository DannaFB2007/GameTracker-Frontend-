import React, { useEffect, useState } from "react";
import { getJuegos } from "../services/api";
import "./Reviews.css";

export default function Reviews() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    getJuegos().then(setJuegos);
  }, []);

  return (
    <div className="reviews-container">
      <header>
        <h1>Reseñas de Juegos</h1>
        <p>Lee y comparte opiniones sobre tus videojuegos favoritos.</p>
      </header>

      <section className="reviews-grid">
        {juegos.length === 0 ? (
          <p>No hay juegos aún.</p>
        ) : (
          juegos.map((juego, index) => (
            <div key={index} className="review-card">
              <h3>{juego.nombre}</h3>
              <p><strong>Género:</strong> {juego.genero}</p>
              <p><strong>Plataforma:</strong> {juego.plataforma}</p>
              <p><strong>Calificación:</strong> ⭐ {juego.calificacion}/10</p>
              <textarea placeholder="Escribe tu reseña..." />
              <button>Enviar Reseña</button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

