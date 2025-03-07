import { useState } from 'react';
import '../styles/Services.css';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { title: 'Armazenamento de Dados', description: 'Oferecemos soluções seguras e escaláveis para armazenar seus dados com total confiabilidade.' },
    { title: 'Análise de Big Data', description: 'Transformamos grandes volumes de dados em insights valiosos para a sua empresa.' },
    { title: 'Automação de Processos', description: 'Reduza o tempo e custo operacional automatizando tarefas repetitivas e otimizando fluxos de trabalho.' },
    { title: 'Segurança da Informação', description: 'Proteja seus dados contra ameaças cibernéticas com nossas soluções de segurança avançadas.' }
  ];

  const handleToggle = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section>
      <h1>Nossos Serviços</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleToggle(index)} 
            className={`service-item ${activeService === index ? 'active' : ''}`}
          >
            <strong>{service.title}</strong>
            {activeService === index && <p>{service.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
