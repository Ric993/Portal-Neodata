import { useState } from "react";
import "../styles/FixedSidebar.css";

export default function FixedSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`fixed-sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "❮" : "❯"}
      </button>

      {isOpen && (
        <div className="sidebar-content">
          <h2>Saiba Mais</h2>
          <p>
            Quer entender como podemos ajudar sua empresa? Oferecemos soluções
            personalizadas para armazenamento, segurança e análise de dados.
          </p>
          <ul>
            <li>🔹 Consultoria especializada</li>
            <li>🔹 Infraestrutura escalável</li>
            <li>🔹 Segurança avançada</li>
          </ul>
          <button
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            Fale Conosco
          </button>
        </div>
      )}
    </aside>
  );
}
