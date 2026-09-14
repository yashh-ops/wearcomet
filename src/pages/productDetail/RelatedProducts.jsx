import { Link } from "react-router-dom";
import products from "../../data/products";
import "./RelatedProducts.css";

const RelatedProducts = ({ currentId }) => {
  const related = products.filter((product) => product.id !== currentId).slice(0, 4);

  return (
    <section className="related-products">
      <h2 className="related-products__heading">YOU MIGHT ALSO LIKE</h2>

      <div className="related-products__grid">
        {related.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="related-card"
          >
            <div className="related-card__image-wrap">
              <img
                src={product.primaryImage}
                alt={product.name}
                className="related-card__image"
              />
            </div>
            <div className="related-card__info">
              <div>
                <p className="related-card__name">{product.name}</p>
                <p className="related-card__subtitle">{product.subtitle}</p>
              </div>
              <p className="related-card__price">₹ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
