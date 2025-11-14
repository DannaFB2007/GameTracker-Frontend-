import React, { useState } from "react";
import "./Reviews.css";

export default function Reviews() {
  const [juego, setJuego] = useState("");
  const [review, setReview] = useState("");

  return (
    <div className="reviews-container">
      <div className="reviews-box">
        <h2>⭐ Reseñas</h2>

        <input
          type="text"
          placeholder="Nombre del juego"
          value={juego}
          onChange={(e) => setJuego(e.target.value)}
        />

        <textarea
          placeholder="Escribe tu reseña..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button>Enviar Reseña</button>
      </div>
    </div>
  );
}
