import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/neodata.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="NeoData Solutions" className="logo" id="logo" />
      </Link>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        ☰
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>Sobre Nós</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Serviços</Link></li>
        <li><Link to="/clients" onClick={closeMenu}>Clientes</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contato</Link></li>
        <li><Link to="/client-portal" onClick={closeMenu}>Portal do Cliente</Link></li>
      </ul>
    </nav>
  );
}
