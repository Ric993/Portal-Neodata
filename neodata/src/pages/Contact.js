import "../styles/Contact.css"

export default function Contact() {
    return (
      <section>
        <h1>Contato</h1>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message"></textarea>
          
          <button type="submit">Enviar</button>
        </form>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua Exemplo, 123</p>
      </section>
    );
  }
  