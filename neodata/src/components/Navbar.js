import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre Nós</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/client-portal">Portal do Cliente</Link></li>
        <li><Link to="/employee-portal">Portal do Funcionário</Link></li>
      </ul>
    </nav>
  );
}
