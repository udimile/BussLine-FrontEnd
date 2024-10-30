import "./helpCenter.css";

export default function HelpCenter() {
  return (
    <>
      <div className="container">
        <header>
          <a href="#" className="back-button">
            ←
          </a>
          <h1>Central de ajuda</h1>
          <div className="icon-switch">
            <div className="circle"></div>
          </div>
        </header>
        <div className="search-container">
          <input type="text" placeholder="Procurar" className="search-bar" />
        </div>

        <h2>
          Perguntas Frequentes <span>&#9660;</span>
        </h2>

        <div className="faq-list">
          <button className="faq-item">+ Sobre o aplicativo</button>
          <button className="faq-item">+ Como relatar acidentes</button>
          <button className="faq-item">+ Reportar problema</button>
          <button className="faq-item">+ Favoritos</button>
          <button className="faq-item">+ Suporte online</button>
          <button className="faq-item">+ Informação de cadastro</button>
          <button className="faq-item">+ Previsão de ônibus</button>
          <button className="faq-item">+ Mais dúvidas</button>
        </div>

        <footer>
          <span className="location-icon">&#128205;</span>
          <span className="bus-icon">&#128652;</span>
        </footer>
      </div>
    </>
  );
}
