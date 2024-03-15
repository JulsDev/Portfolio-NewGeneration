import './Parallax.scss';

const Parallax = () => {
  return (
    <div className="parallax-mount-section">
      <div className="parallax__layer">
        <img
          src={require("../../images/parallax/layer-0.jpg")}
          alt="Основной слой"
          className="parallax__image"
        />
      </div>
      <div className="parallax__layer">
        <img
          src={require("../../images/parallax/layer-1.png")}
          alt="Основные горы"
          className="parallax__image"
        />
      </div>
      <div className="parallax__layer">
        <img
          src={require("../../images/parallax/layer-2.png")}
          alt="Воздушный шар"
          className="parallax__image"
        />
      </div>
      <div className="parallax__layer">
        <img
          src={require("../../images/parallax/layer-4.png")}
          alt="Человек и камень"
          className="parallax__image"
        />
      </div>
    </div>                   
  )
}

export default Parallax;