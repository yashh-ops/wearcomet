import "./PressSection.css";

const pressLogos = [
  {
    id: "vogue",
    name: "Vogue",
    image: "/images/press/vogue.png",
  },
  {
    id: "gq",
    name: "GQ",
    image: "/images/press/gq.png",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    image: "/images/press/cosmopolitan.png",
  },
  {
    id: "elle",
    name: "Elle",
    image: "/images/press/elle.png",
  },
  {
    id: "rollingstone",
    name: "Rolling Stone",
    image: "/images/press/rollingstone.png",
  },
  {
    id: "grazia",
    name: "Grazia",
    image: "/images/press/grazia.png",
  },
];

const PressSection = () => {
  return (
    <section className="press-section">
      <h2 className="press-section__heading">AS APPRECIATED ON</h2>

      <div className="press-section__logos">
        {pressLogos.map((logo) => (
          <div className="press-logo" key={logo.id}>
            <img src={logo.image} alt={logo.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressSection;
