import { useState } from 'react';
// Importa a biblioteca de alertas personalizados (SweetAlert2)
import Swal from 'sweetalert2';
import '../styles/Sec5.css';

export default function Sec5() {

  // Estado para controlar a exibição do formulário
  const [showForm, setShowForm] = useState(false);

  // Estado para armazenar os dados preenchidos no formulário
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Função chamada ao clicar no botão "ENTRE EM CONTATO"
  const handleShowForm = () => {
    setShowForm(true); // Torna o formulário visível
  };

  // Atualiza o estado do formulário conforme os campos são preenchidos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Exibe o alerta personalizado com nome do usuário
    Swal.fire({
      title: 'Mensagem enviada!',
      text: `Obrigado pelo contato, ${form.name}!`,
      icon: 'success',
      confirmButtonText: 'Fechar'
    });

    // Limpa os campos e esconde o formulário novamente
    setForm({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  // JSX do componente
  return (
    <section className='sec5'> {/* Container principal da seção */}
      <h1>QUER SABER MAIS?</h1>
      <button id='contato' onClick={handleShowForm}>ENTRE EM CONTATO</button>

      {/* Condicional para exibir o formulário somente quando showForm for true */}
      {showForm && (
        <div className="form-card"> {/* Container do formulário */}
          <h2>Fale Conosco</h2>
          <form onSubmit={handleSubmit} className="form-content">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </section>
  );
}
