import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [mensaje, setMensaje] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje ");
    setMensaje("");
  };

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <p>¿Tienes sugerencias o dudas? Envíanos un mensaje.</p>
      <form onSubmit={enviar}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea
          placeholder="Escribe tu mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
