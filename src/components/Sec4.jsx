import { useState } from 'react';
import '../styles/Sec4.css';
import fechar from '../assets/imgs/Fechar.png';
import abrir from '../assets/imgs/Abrir.png';


export default function Sec4() {

  // Estado que guarda o índice do item atualmente aberto (null = nenhum aberto)
  const [abertoIndex, setAbertoIndex] = useState(null);

  // Função que alterna o texto visível ao clicar no botão
  const toggleTexto = (index) => {
    if (abertoIndex === index) {
      setAbertoIndex(null); // Fecha se o mesmo item for clicado novamente
    } else {
      setAbertoIndex(index); // Abre o item clicado
    }
  };

  // Array com os conteúdos da seção (título e texto de cada item)
  const conteudos = [
    {
      titulo: "CONEXÃO COM O MERCADO DE TRABALHO",
      texto: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho..."
    },
    {
      titulo: "APRENDIZADO IMERSIVO",
      texto: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica..."
    },
    {
      titulo: "ENSINO PERSONALIZADO",
      texto: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais..."
    },
    {
      titulo: "INOVAÇÃO E TRANSFORMAÇÃO",
      texto: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital..."
    },
  ];

  // JSX do componente
  return (
    <section className="sec4"> {/* Seção principal com classe sec4 */}
      <div className="opc">
        <h1>NOSSA ESTRUTURA</h1> {/* Título da seção */}

        {/* Mapeia os conteúdos, criando um botão e texto para cada item */}
        {conteudos.map((conteudo, index) => (
          <div className="btn-opc" key={index}> {/* Bloco de cada item */}
            
            {/* Cabeçalho do item com título e botão de abrir/fechar */}
            <div className="btn-abrir">
              <h3>{conteudo.titulo}</h3>

              {/* Botão que alterna entre abrir e fechar o conteúdo */}
              <button className="abrir-btn" onClick={() => toggleTexto(index)}>
                <img
                  src={abertoIndex === index ? fechar : abrir} // Altera ícone conforme estado
                  alt="Botão"
                />
              </button>
            </div>

            {/* Exibe o texto somente se o item estiver aberto */}
            {abertoIndex === index && (
              <p>{conteudo.texto}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
