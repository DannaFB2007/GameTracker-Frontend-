import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🔐 Iniciar sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button>Entrar</button>
      </div>
    </div>
  );
}
