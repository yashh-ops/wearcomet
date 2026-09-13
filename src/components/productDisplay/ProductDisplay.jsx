import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import "./ProductDisplay.css";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.badge && (
        <span
          className={
            "product-card__badge " +
            (product.badge.includes("WOMEN")
              ? "product-card__badge--pink"
              : "product-card__badge--dark")
          }
        >
          {product.badge}
        </span>
      )}

      <div className="product-card__image-wrap">
        <img
          src={hovered ? product.secondaryImage : product.primaryImage}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      <div className="product-card__info">
        <div>
          <p className="product-card__name">{product.name}</p>
          <p className="product-card__subtitle">{product.subtitle}</p>
        </div>
        <p className="product-card__price">₹ {product.price}</p>
      </div>
    </Link>
  );
};

const ProductDisplay = () => {
  return (
    <section className="product-display">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductDisplay;
