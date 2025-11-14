import React, { useEffect, useState } from "react";
import "./GameDashboard.css";
import { getJuegos, addJuego, deleteJuego } from "../services/api";

export default function GameDashboard() {
  const [juegos, setJuegos] = useState([]);
  const [nuevoJuego, setNuevoJuego] = useState({
    nombre: "",
    genero: "",
    plataforma: "",
    calificacion: ""
  });

  // Cargar juegos desde el backend
  const cargarJuegos = async () => {
    const data = await getJuegos();
    setJuegos(data);
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  // Manejar inputs del formulario
  const manejarCambio = (e) => {
    setNuevoJuego({ ...nuevoJuego, [e.target.name]: e.target.value });
  };

  // Agregar juego
  const manejarAgregar = async (e) => {
    e.preventDefault();
    await addJuego(nuevoJuego);
    cargarJuegos();
    setNuevoJuego({ nombre: "", genero: "", plataforma: "", calificacion: "" });
  };

  // Eliminar juego
  const manejarEliminar = async (id) => {
    await deleteJuego(id);
    cargarJuegos();
  };

  return (
    <div className="biblioteca-container">

      <h1 className="titulo">📚 Biblioteca de Juegos</h1>

      {/* Formulario para agregar */}
      <form className="formulario" onSubmit={manejarAgregar}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del juego"
          value={nuevoJuego.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="text"
          name="genero"
          placeholder="Género"
          value={nuevoJuego.genero}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="plataforma"
          placeholder="Plataforma"
          value={nuevoJuego.plataforma}
          onChange={manejarCambio}
        />
        <input
          type="number"
          name="calificacion"
          placeholder="Calificación"
          value={nuevoJuego.calificacion}
          onChange={manejarCambio}
        />

        <button type="submit" className="agregar-btn">Agregar</button>
      </form>

      {/* Grid de juegos */}
      <section className="game-grid">
        {juegos.length > 0 ? (
          juegos.map((juego) => (
            <div key={juego._id} className="game-card">
              <h3>{juego.nombre}</h3>
              <p>🎮 {juego.genero}</p>
              <p>🕹️ {juego.plataforma}</p>
              <p>⭐ {juego.calificacion}</p>
              <button className="eliminar-btn" onClick={() => manejarEliminar(juego._id)}>
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p className="no-juegos">No hay juegos en tu biblioteca.</p>
        )}
      </section>
    </div>
  );
}
