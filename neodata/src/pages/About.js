import "../styles/About.css";

// Importe as imagens diretamente
import lucasImg from "../assets/images/lucas.jpg";
import marianaImg from "../assets/images/mariana.jpg";
import joaoImg from "../assets/images/joao.jpg";
import fernandaImg from "../assets/images/fernanda.jpg";
import ricardoImg from "../assets/images/ricardo.jpg";
import anaImg from "../assets/images/ana.jpg";
import pauloImg from "../assets/images/paulo.jpg";
import julianaImg from "../assets/images/juliana.jpg";

export default function About() {
  return (
    <section>
      <h1>Sobre Nós</h1>
      <p>
        A NeoData Solutions nasceu para revolucionar o armazenamento e análise de dados, garantindo segurança e performance para empresas. Nossa missão é otimizar processos, nossa visão é liderar a inovação e nossos valores incluem transparência, eficiência e excelência.
      </p>
      
      <h2>Nossos Funcionários</h2>
      
      <div className="team">
        <div className="employee">
          <img src={lucasImg} alt="Lucas Silva" className="employee-photo" />
          <h3>Lucas Silva - CEO</h3>
          <p>Lucas fundou a NeoData Solutions após perceber a crescente demanda por soluções mais rápidas e seguras para armazenamento de dados. Com mais de 10 anos de experiência no setor, ele tem como objetivo transformar o mercado com inovação constante.</p>
        </div>
        
        <div className="employee">
          <img src={marianaImg} alt="Mariana Costa" className="employee-photo" />
          <h3>Mariana Costa - CTO</h3>
          <p>Mariana é a mente por trás das inovações tecnológicas da NeoData Solutions. Com uma paixão por inteligência artificial, ela lidera a equipe de desenvolvimento, garantindo que nossos produtos estejam sempre à frente no mercado.</p>
        </div>
        
        <div className="employee">
          <img src={joaoImg} alt="João Pereira" className="employee-photo" />
          <h3>João Pereira - Diretor de Marketing</h3>
          <p>Com vasta experiência em marketing digital, João é responsável por criar estratégias criativas e eficazes para expandir a presença da empresa no mercado. Ele acredita no poder de uma marca sólida para impulsionar o crescimento de negócios.</p>
        </div>
        
        <div className="employee">
          <img src={fernandaImg} alt="Fernanda Almeida" className="employee-photo" />
          <h3>Fernanda Almeida - Gerente de Operações</h3>
          <p>Fernanda coordena todos os processos internos da empresa. Sua experiência em gestão de operações garante que os projetos sejam entregues no prazo, com qualidade e eficiência, sempre com foco na melhoria contínua.</p>
        </div>
        
        <div className="employee">
          <img src={ricardoImg} alt="Ricardo Gomes" className="employee-photo" />
          <h3>Ricardo Gomes - Analista de Dados</h3>
          <p>Ricardo é apaixonado por dados e estatísticas. Ele usa suas habilidades analíticas para fornecer insights valiosos para os clientes da NeoData Solutions, ajudando as empresas a tomar decisões mais informadas e estratégicas.</p>
        </div>
        
        <div className="employee">
          <img src={anaImg} alt="Ana Souza" className="employee-photo" />
          <h3>Ana Souza - Desenvolvedora Full Stack</h3>
          <p>Ana é uma desenvolvedora talentosa que gosta de trabalhar tanto no frontend quanto no backend. Ela está sempre atualizada com as últimas tendências em desenvolvimento e se dedica a criar soluções eficientes e escaláveis.</p>
        </div>
        
        <div className="employee">
          <img src={pauloImg} alt="Paulo Oliveira" className="employee-photo" />
          <h3>Paulo Oliveira - Especialista em Segurança da Informação</h3>
          <p>Com vasta experiência em cibersegurança, Paulo é responsável por garantir que todos os dados da empresa e dos nossos clientes estejam seguros. Ele desenvolve políticas e práticas rigorosas para proteger contra ameaças externas e internas.</p>
        </div>
        
        <div className="employee">
          <img src={julianaImg} alt="Juliana Martins" className="employee-photo" />
          <h3>Juliana Martins - Coordenadora de Recursos Humanos</h3>
          <p>Juliana é responsável pela gestão de pessoas dentro da empresa. Ela acredita que uma equipe bem treinada e motivada é a chave para o sucesso, e trabalha com foco no desenvolvimento profissional e bem-estar dos colaboradores.</p>
        </div>
      </div>
    </section>
  );
}
