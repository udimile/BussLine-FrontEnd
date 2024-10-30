import "./about.css";

export default function About() {
  return (
    <>
      <div className="container">
        <header>
          <a href="#" className="back-button">
            ←
          </a>
          <h1>Sobre</h1>
          <div className="icon-switch">
            <div className="circle"></div>
          </div>
        </header>

        <section className="content">
          <div className="question-tag">Quem somos?</div>
          <p className="description">
            Somos um aplicativo de ônibus escolares exclusivo para os alunos de
            escolas públicas e particulares residentes da Região Metropolitana
            de Salvador. Estamos aqui para te levar para sua instituição de
            ensino de maneira rápida, prática e segura!
          </p>
          <footer className="footer">
            <a href="#" className="terms-link">
              Termos de uso e condições
            </a>
            <p className="mpv">MPV</p>
          </footer>
        </section>
      </div>
    </>
  );
}
