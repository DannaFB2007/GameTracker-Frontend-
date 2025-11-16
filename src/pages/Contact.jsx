import React, { useState } from "react";
import "./Contact.css";


export default function Contact() {
  const [mensaje, setMensaje] = useState("");

  return (
    <>
     

      <div className="contact-container">
        <div className="contact-box">
          <h2>📩 Contáctanos</h2>

          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu correo" />

          <textarea
            placeholder="Escribe tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <button>Enviar</button>
        </div>
      </div>
    </>
  );
}
