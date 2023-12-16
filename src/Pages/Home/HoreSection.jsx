export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Привет, Я Авазбек</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Фронтед</span>{" "}
              <br />
              Девелопер
            </h1>
            <p className="hero--section-description">
              
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Связаться со мной</button>
        </div>
        <div className="hero--section--img">
          {/* <img src="./img/hero_img.png" alt="Hero Section" /> */} 
        </div>
      </section>
    );
  }
  