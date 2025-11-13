import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const iniciarSesion = (e) => {
    e.preventDefault();
    if (usuario === "admin" && clave === "1234") {
      alert("Inicio de sesión exitoso ✅");
    } else {
      alert("Usuario o contraseña incorrectos ❌");
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={iniciarSesion}>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
