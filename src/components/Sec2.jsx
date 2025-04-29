import '../styles/Sec2.css'
import { useState } from 'react';
import nextFiap from '../assets/imgs/fiap-next.jpg';
import btnup from '../assets/imgs/buttontop.png';

export default function Sec2() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = ()=> setIsModalOpen(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <section className='sec2'>
      <div className='sec2-text'>
        <h1>EDUCAÇÃO E TECH</h1>
        <div id='imgtext'>
        <p>A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.</p>
        <img src={nextFiap} 
        alt="img next-fiap" 
        onClick={openModal}
        style={{cursor: 'pointer', width: '100%', height: 'auto'}}
        />
        </div>
      </div>
      <div className='sec2-text'>
        <div id='sec2-ul'>
          <p>Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:</p>
          <ul><p>/ Tecnologia e Desenvolvimento</p>
            <li>- Desenvolvimento de Software</li>
            <li>- Inteligência Artificial</li>
            <li>- Data Science</li>
            <li>- Cibersegurança</li>
          </ul>
          <p>/ UX/UI, Marketing Digita</p>
          <p>/ Metodologias e Gestão</p>
          <p>/ Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.</p>
        </div>
       

      </div>

    {isModalOpen && (
       <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={nextFiap}
              alt="Imagem em Modal"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

    )}
    <button className="buttontop" onClick={scrollToTop}>
          <img src={btnup} alt="" />
        </button>
    </section>
  )
}
