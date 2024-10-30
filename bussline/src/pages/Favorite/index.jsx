import "./favorite.css";

export default function Favorite() {
  return (
    <>
      <div className="container">
        <header>
          <a href="#" className="back-button">
            ←
          </a>
          <h1>Favoritos</h1>
          <div className="icon-switch">
            <div className="circle"></div>
          </div>
        </header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar destinos"
            className="search-bar"
          />
          <button className="star-button">&#9733;</button>
        </div>
        <div className="destination-card">
          <div className="star-icon">&#9733;</div>
          <div className="destination-info">
            <h2>UCSal - Universidade Católica do Salvador</h2>
            <p>Av. Prof. Pinto de Aguiar, 2589 - Pituaçu</p>
          </div>
        </div>
      </div>
    </>
  );
}
