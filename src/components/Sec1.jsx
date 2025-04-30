import '../styles/Sec1.css'
// Importa a imagem usada no botão de rolagem
import btndown from '../assets/imgs/btn-scroll-down.png'

export default function Sec1() {

  // Função chamada ao clicar no botão "Scroll down"
  // Ela rola suavemente até a próxima seção com a classe 'sec2'
  function ProximaPagina(){
    const section = document.querySelector('.sec2'); // Busca a próxima seção
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Rola até ela suavemente
    }
  }

  // JSX retornado pelo componente
  return (
    // Seção principal com conteúdo promocional
    <section className='MaiorFacul'>
      {/* Div que contém os textos de destaque */}
      <div className='Text'>
        <h1 className='tittle1'>A MAIOR FACULDADE</h1> {/* Título em destaque */}
        <h1 className='tittle2'>DE TECNOLOGIA</h1> {/* Subtítulo */}
        <p>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade 
          que prepara profissionais para o futuro, com um ensino prático, 
          professores atuantes no mercado e desafios reais que conectam os alunos 
          às grandes empresas.
        </p> {/* Parágrafo descritivo */}
      </div>

      {/* Botão que, ao ser clicado, chama a função ProximaPagina */}
      <button id='button-down' onClick={ProximaPagina}>
        <p>Scroll down</p> {/* Texto do botão */}
        <img src={btndown}></img> {/* Ícone de seta para baixo */}
      </button>
    </section>
  )
}
