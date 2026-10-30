import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  // Usamos el estado para controlar si mostramos un mensaje secreto o descuento
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Level Up en tus Juegos Favoritos</h1>
      <p>Encuentra los mejores títulos, preventas y accesorios para todas las plataformas.</p>

      <img 
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
        alt="Imagen representativa de tienda de videojuegos" 
        className="imagen-destacada"
        style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {/* El mensaje solo aparece si el estado es verdadero */}
      {mostrarMensaje && (
        <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primer videojuego digital.</p>
      )}
    </main>
  );
}

export default SeccionPrincipal;