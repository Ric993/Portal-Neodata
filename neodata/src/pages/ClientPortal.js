import "../styles/ClientPortal.css";

export default function ClientPortal() {
    return (
      <section className="client-portal">
        <h1>Portal do Cliente</h1>
        <p>Acesse seus relatórios e informações sobre os serviços contratados.</p>
        
        {/* Dashboard */}
        <div className="dashboard">
          <h2>Visão Geral</h2>
          <ul>
            <li><strong>Último acesso:</strong> 05/03/2025</li>
            <li><strong>Status da conta:</strong> Ativa</li>
            <li><strong>Serviços contratados:</strong> Análise de Big Data, Segurança da Informação</li>
            <li><strong>Próximo pagamento:</strong> 15/03/2025</li>
          </ul>
        </div>
        
        {/* Relatórios */}
        <div className="reports">
          <h2>Relatórios Recentes</h2>
          <ul>
            <li>📌 <a href="#">Análise de Dados - Fevereiro 2025 (Baixar PDF)</a></li>
            <li>🔍 <a href="#">Segurança da Informação - Auditoria de Janeiro 2025 (Visualizar)</a></li>
            <li>📊 <a href="#">Performance dos Servidores - Últimos 30 dias (Baixar CSV)</a></li>
          </ul>
        </div>
        
        {/* Faturas */}
        <div className="invoices">
          <h2>Faturas</h2>
          <ul>
            <li>💳 <a href="#">Fatura de Fevereiro 2025 - Paga</a></li>
            <li>💳 <a href="#">Fatura de Janeiro 2025 - Paga</a></li>
            <li>💳 <a href="#">Fatura de Dezembro 2024 - Pendente</a></li>
          </ul>
        </div>
        
        {/* Perfil do Cliente */}
        <div className="client-profile">
          <h2>Perfil do Cliente</h2>
          <ul>
            <li><strong>Nome:</strong> João Silva</li>
            <li><strong>Email:</strong> joao.silva@email.com</li>
            <li><strong>Telefone:</strong> (11) 99999-8888</li>
            <li><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo - SP</li>
          </ul>
        </div>
        
        {/* Histórico de Atividades */}
        <div className="activity-history">
          <h2>Histórico de Atividades</h2>
          <ul>
            <li>🔹 Acessou o relatório de segurança em 02/03/2025</li>
            <li>🔹 Atualizou dados do perfil em 28/02/2025</li>
            <li>🔹 Pagou a fatura de fevereiro em 20/02/2025</li>
          </ul>
        </div>
        
        {/* Suporte */}
        <div className="support">
          <h2>Suporte</h2>
          <p>Fale com um especialista:</p>
          <ul>
            <li>📞 Chat online (Disponível das 9h às 18h)</li>
            <li>📧 E-mail: suporte@neodatasolutions.com</li>
            <li>📱 Telefone: (11) 1234-5678</li>
          </ul>
        </div>
      </section>
    );
}
