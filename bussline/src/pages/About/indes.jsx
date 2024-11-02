import "./about.css";
import backIcon from "../../assets/back-icon.svg";

export default function About() {
  return (
  <>
  <body className="about">
    <header className="header_container_about">
      <section className="section_1">
          <div className="header">
            <div className="logo"></div>
            <button className="icon-button">
              <img src={backIcon} alt="Seta" />
            </button>
            <span className="rotas">Sobre</span>
          </div>
      </section>
    </header>

    <main>
      <section id="quemsomos">
        <p>Quem somos?</p>
      </section>
      <div>
        <section id="descricao">
            <p>
                Somos um aplicativo de ônibus escolares exclusivo para os alunos 
                de escolas públicas e particulares residentes da Região Metropolitana 
                de Salvador. Estamos aqui para te levar para sua instituição de ensino 
                de maneira rápida, prática e segura!
            </p>
        </section>
      </div>
    </main>

    <footer>
      <a>
        <div class="termos">
          <p>Termos de uso e condições</p>
        </div>
            
        <div class="outro">
          <p>MPV</p>
        </div>
      </a>
    </footer>
  </body>       
  </>
  );
}
