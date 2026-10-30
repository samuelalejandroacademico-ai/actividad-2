import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      {/* Sección Inicio */}
      <section id="inicio" className="bloque-seccion">
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

        {mostrarMensaje && (
          <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primer videojuego digital.</p>
        )}
      </section>

      {/* Sección Catálogo */}
      <section id="catalogo" className="bloque-seccion">
        <h2>Catálogo Destacado</h2>
        <div className="grid-catalogo">
          <div className="tarjeta-juego">
            <h3>Cyber Odyssey 2077</h3>
            <p>Plataforma: PC / PS5 / Xbox</p> 
            <span className="precio">$60.000</span>
          </div>
          <div className="tarjeta-juego">
            <h3>Realm of Fantasy</h3>
            <p>Plataforma: PC / Nintendo Switch</p>
            <span className="precio">$120.000$</span>
          </div>
          <div className="tarjeta-juego">
            <h3>Galactic Tactics</h3>
            <p>Plataforma: PC / PS5</p>
            <span className="precio">$80.000$</span>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section id="nosotros" className="bloque-seccion">
        <h2>Sobre Nosotros</h2>
        <p className="texto-nosotros">
          En <strong>PixelVault Games</strong> somos apasionados por la cultura gamer. Nos dedicamos a proveer las últimas novedades en videojuegos digitales, ediciones de colección y hardware de alto rendimiento para jugadores de todos los niveles.
        </p>
      </section>
    </main>
  );
}

export default SeccionPrincipal;