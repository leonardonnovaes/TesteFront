import '../styles/Sec1.css'
import btndown from 'src/assets/imgs/btn-scroll-down.png' 
export default function Sec1() {

  function ProximaPagina(){
    const section = document.querySelector('.sec2');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className='MaiorFacul'>
      <div className='Text'>
        <h1 className='tittle1'>A MAIOR FACULDADE</h1>
        <h1 className='tittle2'>DE TECNOLOGIA</h1>
        <p>Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas. </p>
      </div>
      <button id='button-down' onClick={ProximaPagina}><p>Scroll down</p> <img src={btndown}></img></button>
    </section>
  )
}