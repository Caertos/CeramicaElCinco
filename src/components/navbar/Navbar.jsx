import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    "Inicio",
    "¿Quienes Somos?",
    "Producto",
    "¿Cómo lo hacemos?",
    "Galería",
    "Contáctanos"
  ];

  const handleClick = (index) => {
    if (index !== navItems.length - 1) {
      setActiveIndex(index);
    }
  };

  const handleContactClick = () => {
    // Comportamiento especial para el botón de contacto
    // Por ejemplo, abrir un modal o redirigir
    alert("Contacto");
  };

  return (
    <div className="navbar-container">
      <img className="logo" src="/LogoCEC.svg" alt="" />
      <nav>
        <ul className="nav-list">
          {navItems.map((item, idx) => {
            const isContact = idx === navItems.length - 1;
            return (
              <li
                key={item}
                className={
                  isContact
                    ? "contact-button"
                    : "nav-button" + (activeIndex === idx ? " active" : "")
                }
                onClick={
                  isContact
                    ? handleContactClick
                    : () => handleClick(idx)
                }
              >
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
