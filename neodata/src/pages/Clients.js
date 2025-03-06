import "../styles/Clients.css";
import empresax from "../assets/images/empresax.png";
import empresay from "../assets/images/empresay.png";

export default function Clients() {
  return (
    <section>
      <h1>Nossos Clientes</h1>
      
      <div className="client">
        <p>"A NeoData transformou nossa gestão de dados!" <br/>
          <img src={empresax} alt="Logo da Empresa X" /> <br/> Empresa X</p>
        
      </div>
      
      <div className="client">
        <p>"Mais eficiência e segurança para nossos sistemas." <br/>
          <img src={empresay} alt="Logo da Empresa Y" />
          <br/>Empresa Y</p>
        
      </div>
    </section>
  );
}