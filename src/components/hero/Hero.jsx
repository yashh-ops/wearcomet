import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Built On Richness</p>
        <h1 className="hero__title">OAKWOOD</h1>
        <div className="hero__actions">
          <a href="/collections/men-sneakers" className="hero__btn">
            SHOP MEN
          </a>
          <a href="/collections/women-sneakers" className="hero__btn">
            SHOP WOMEN
          </a>
        </div>
      </div>

      <div className="hero__image-wrap">
        {/* Place image at: public/images/hero-oakwood.jpg */}
        <img
          src="/images/hero.jpg"
          alt="Oakwood sneaker worn with denim"
          className="hero__image"
        />
      </div>
    </section>
  );
};

export default Hero;
