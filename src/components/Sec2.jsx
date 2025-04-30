import '../styles/Sec2.css'
// Importa o hook useState do React para manipular o estado do modal
import { useState } from 'react';
import nextFiap from '../assets/imgs/fiap-next.jpg';
import btnup from '../assets/imgs/buttontop.png';

export default function Sec2() {

  // Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre o modal (define o estado como true)
  const openModal = () => setIsModalOpen(true);

  // Fecha o modal (define o estado como false)
  const closeModal = () => setIsModalOpen(false);

  // Função que rola a página suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // JSX da seção
  return (
    <section className='sec2'> {/* Início da seção com classe sec2 */}

      {/* Bloco com texto e imagem clicável que abre o modal */}
      <div className='sec2-text'>
        <h1>EDUCAÇÃO E TECH</h1>
        <div id='imgtext'>
          <p>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema 
            de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, 
            a instituição é referência quando se trata de formar profissionais capacitados para 
            os desafios do futuro...
          </p>

          {/* Imagem que abre o modal ao ser clicada */}
          <img 
            src={nextFiap} 
            alt="img next-fiap" 
            onClick={openModal} // Abre o modal
            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Segundo bloco com mais informações e lista de cursos */}
      <div className='sec2-text'>
        <div id='sec2-ul'>
          <p>
            Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina 
            apenas tecnologia, mas também negócios, inovação e liderança...
          </p>

          <ul>
            <p>/ Tecnologia e Desenvolvimento</p>
            <li>- Desenvolvimento de Software</li>
            <li>- Inteligência Artificial</li>
            <li>- Data Science</li>
            <li>- Cibersegurança</li>
          </ul>

          <p>/ UX/UI, Marketing Digital</p>
          <p>/ Metodologias e Gestão</p>
          <p>
            / Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras 
            abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
          </p>
        </div>
      </div>

      {/* Modal que aparece sobre a tela quando isModalOpen for true */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}> {/* Fecha o modal ao clicar fora */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Impede que o clique dentro do conteúdo feche o modal */}
            <img
              src={nextFiap}
              alt="Imagem em Modal"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      )}

      {/* Botão flutuante que rola a página até o topo */}
      <button className="buttontop" onClick={scrollToTop}>
        <img src={btnup} alt="Ícone para voltar ao topo" />
      </button>

    </section>
  )
}
