// src/services/api.js
const API_URL = "https://gametracker-backend-crtb.onrender.com/api/juegos";

// Obtener todos los juegos
export async function getJuegos() {
  const res = await fetch(API_URL);
  return res.json();
}

// Agregar un nuevo juego
export async function addJuego(juego) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(juego),
  });
  return res.json();
}

// Eliminar un juego
export async function deleteJuego(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}
