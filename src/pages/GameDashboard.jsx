import React, { useEffect, useState } from "react";
import "./GameDashboard.css";
import { getJuegos, addJuego, deleteJuego } from "../services/api";

export default function GameDashboard() {
  const [juegos, setJuegos] = useState([]);
  const [nuevoJuego, setNuevoJuego] = useState({
    nombre: "",
    genero: "",
    plataforma: "",
    calificacion: "",
  });

  // Cargar los juegos al iniciar
  useEffect(() => {
    cargarJuegos();
  }, []);

  async function cargarJuegos() {
    try {
      const data = await getJuegos();
      setJuegos(data);
    } catch (error) {
      console.error("Error al cargar los juegos:", error);
    }
  }

  // Agregar un nuevo juego
  async function manejarSubmit(e) {
    e.preventDefault();
    try {
      await addJuego(nuevoJuego);
      setNuevoJuego({ nombre: "", genero: "", plataforma: "", calificacion: "" });
      cargarJuegos();
    } catch (error) {
      console.error("Error al agregar el juego:", error);
    }
  }

  // Eliminar un juego
  async function manejarEliminar(id) {
    if (confirm("¿Seguro que quieres eliminar este juego?")) {
      try {
        await deleteJuego(id);
        cargarJuegos();
      } catch (error) {
        console.error("Error al eliminar el juego:", error);
      }
    }
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Biblioteca</h1>
        <p>Explora y organiza todos tus videojuegos favoritos.</p>
      </header>

      <form onSubmit={manejarSubmit} className="formulario-juego">
        <input
          type="text"
          placeholder="Nombre del juego"
          value={nuevoJuego.nombre}
          onChange={(e) => setNuevoJuego({ ...nuevoJuego, nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Género"
          value={nuevoJuego.genero}
          onChange={(e) => setNuevoJuego({ ...nuevoJuego, genero: e.target.value })}
        />
        <input
          type="text"
          placeholder="Plataforma"
          value={nuevoJuego.plataforma}
          onChange={(e) => setNuevoJuego({ ...nuevoJuego, plataforma: e.target.value })}
        />
        <input
          type="number"
          placeholder="Calificación (1-10)"
          value={nuevoJuego.calificacion}
          onChange={(e) => setNuevoJuego({ ...nuevoJuego, calificacion: e.target.value })}
        />
        <button type="submit">Agregar juego</button>
      </form>

      <section className="game-grid">
        {juegos.length > 0 ? (
          juegos.map((juego) => (
            <div key={juego._id} className="game-card">
              <h3>{juego.nombre}</h3>
              <p>🎮 {juego.genero}</p>
              <p>🕹️ {juego.plataforma}</p>
              <p>⭐ {juego.calificacion}</p>
              <button onClick={() => manejarEliminar(juego._id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No hay juegos en tu biblioteca.</p>
        )}
      </section>
    </div>
  );
}
