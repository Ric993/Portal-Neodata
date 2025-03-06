import "../styles/FixedSidebar.css"

export default function FixedSidebar() {
    return (
      <aside className="fixed-sidebar">
        <h2>Saiba Mais</h2>
        <p>Quer entender como podemos ajudar sua empresa? Oferecemos soluções personalizadas para armazenamento, segurança e análise de dados.</p>
        <ul>
          <li>🔹 Consultoria especializada</li>
          <li>🔹 Infraestrutura escalável</li>
          <li>🔹 Segurança avançada</li>
        </ul>
        <button onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
  Fale Conosco
</button>

      </aside>
    );
  }
  