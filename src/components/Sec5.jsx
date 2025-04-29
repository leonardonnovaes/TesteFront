import { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/Sec5.css';

export default function Sec5() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Mensagem enviada!',
      text: `Obrigado pelo contato, ${form.name}!`,
      icon: 'success',
      confirmButtonText: 'Fechar'
    });

    setForm({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  return (
    <section className='sec5'>
      <h1>QUER SABER MAIS?</h1>
      <button id='contato' onClick={handleShowForm}>ENTRE EM CONTATO</button>

      {showForm && (
        <div className="form-card">
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
