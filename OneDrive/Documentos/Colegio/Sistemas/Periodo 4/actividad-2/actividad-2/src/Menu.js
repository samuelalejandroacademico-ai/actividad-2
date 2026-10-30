import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">PixelVault Games</h2>
      <ul>
        <li>Catálogo</li>
        <li>Novedades</li>
        <li>Consolas</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;