import "./SecondHero.css";

const SecondHero = () => {
  return (
    <section className="second-hero">
      <div className="second-hero__image-wrap">
        <img
          src="/images/second-hero.jpg"
          alt="Astra sneaker collection in multiple colors"
          className="second-hero__image"
        />

        <div className="second-hero__content">
          <a href="/collections/astra" className="second-hero__btn">
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
