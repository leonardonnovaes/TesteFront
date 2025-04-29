import { useState } from 'react';
import '../styles/Sec4.css';
import fechar from '../assets/imgs/Fechar.png';
import abrir from '../assets/imgs/Abrir.png';

export default function Sec4() {
  const [abertoIndex, setAbertoIndex] = useState(null);

  const toggleTexto = (index) => {
    if (abertoIndex === index) {
      setAbertoIndex(null);
    } else {
      setAbertoIndex(index);
    }
  };

  const conteudos = [
    {
      titulo: "CONEXÃO COM O MERCADO DE TRABALHO",
      texto: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais."
    },
    {
      titulo: "APRENDIZADO IMERSIVO",
      texto: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica. Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira."
    },
    {
      titulo: "ENSINO PERSONALIZADO",
      texto: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor."
    },
    {
      titulo: "INOVAÇÃO E TRANSFORMAÇÃO",
      texto: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia."
    },
  ];

  return (
    <section className="sec4">
      <div className="opc">
        <h1>NOSSA ESTRUTURA</h1>

        {conteudos.map((conteudo, index) => (
          <div className="btn-opc" key={index}>
            <div className="btn-abrir">
              <h3>{conteudo.titulo}</h3>
              <button className="abrir-btn" onClick={() => toggleTexto(index)}>
                <img
                  src={
                    abertoIndex === index
                      ? {fechar} 
                      : {abrir}                 }
                  alt="Botão"
                />
              </button>
            </div>

            {abertoIndex === index && (
              <p>{conteudo.texto}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
