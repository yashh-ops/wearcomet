import "./ProductDisplayTwo.css";

// Collection images already contain their own shoe names.
const collections = [
  {
    id: "x-lows",
    name: "X LOWS",
    image: "/images/collections/x-lows.jpg",
    link: "/collections/x-lows",
  },
  {
    id: "aeon",
    name: "AEON",
    image: "/images/collections/aeon.jpg",
    link: "/collections/aeon",
  },
  {
    id: "astra",
    name: "ASTRA",
    image: "/images/collections/astra.jpg",
    link: "/collections/astra",
  },
  {
    id: "aeres",
    name: "AERES",
    image: "/images/collections/aeres.jpg",
    link: "/collections/aeres",
  },
];

const ProductDisplayTwo = () => {
  return (
    <section className="product-display-two">
      {collections.map((collection) => (
        <a
          href={collection.link}
          key={collection.id}
          className="collection-card"
        >
          <img
            src={collection.image}
            alt={collection.name}
            className="collection-card__image"
          />

          <span className="collection-card__shop">SHOP NOW</span>
        </a>
      ))}
    </section>
  );
};

export default ProductDisplayTwo;
