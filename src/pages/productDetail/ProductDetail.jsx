import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedColor, setSelectedColor] = useState(id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [openDetails, setOpenDetails] = useState(true);
  const [openMaterials, setOpenMaterials] = useState(false);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="product-detail">
      <div className="product-detail__gallery">
        {product.gallery.map((image, index) => (
          <img
            key={image + index}
            src={image}
            alt={`${product.name} view ${index + 1}`}
            className="product-detail__gallery-image"
          />
        ))}
      </div>

      <div className="product-detail__panel">
        <div className="product-detail__panel-inner">
          <p className="product-detail__subtitle">{product.subtitle}</p>
          <h1 className="product-detail__name">{product.name}</h1>

          <hr className="product-detail__divider" />

          <div className="product-detail__section">
            <h3 className="product-detail__label">COLOR</h3>
            <div className="product-detail__colors">
              {product.colors.map((color) => (
                <Link
                  key={color.id}
                  to={`/products/${color.id}`}
                  onClick={() => setSelectedColor(color.id)}
                  className={
                    "product-detail__swatch" +
                    (selectedColor === color.id
                      ? " product-detail__swatch--active"
                      : "")
                  }
                >
                  <img src={color.swatch} alt={color.name} />
                </Link>
              ))}
              <Link to="/" className="product-detail__see-all">
                SEE ALL &gt;&gt;
              </Link>
            </div>
          </div>

          <div className="product-detail__section">
            <div className="product-detail__label-row">
              <h3 className="product-detail__label">SELECT SIZES</h3>
              <button type="button" className="product-detail__size-guide">
                SIZE GUIDE <span className="product-detail__q">?</span>
              </button>
            </div>
            <div className="product-detail__sizes">
              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={
                    "product-detail__size" +
                    (selectedSize === size
                      ? " product-detail__size--active"
                      : "")
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail__price-box">
            <span className="product-detail__price-icon">🏷</span>
            <div>
              <p className="product-detail__price-line">
                Get it at: <strong>₹ {product.discountPrice.toLocaleString("en-IN")}.00</strong>
              </p>
              <p className="product-detail__coupon-line">
                Apply <strong>{product.couponCode}</strong> at checkout to avail.
              </p>
            </div>
            <button
              type="button"
              className="product-detail__copy"
              aria-label="Copy coupon code"
              onClick={() => navigator.clipboard?.writeText(product.couponCode)}
            >
              ⧉
            </button>
          </div>

          <div className="product-detail__actions">
            <button type="button" className="product-detail__add">
              ADD TO CART
            </button>
            <button type="button" className="product-detail__buy">
              BUY NOW
            </button>
          </div>

          <div className="product-detail__perks">
            <p>
              <span className="product-detail__perk-icon">↺</span> Free 7-day
              returns and exchanges
            </p>
            <p>
              <span className="product-detail__perk-icon">🚚</span> Free
              shipping
            </p>
            <p>
              <span className="product-detail__perk-icon">📦</span> Delivery in
              3-5 days
            </p>
          </div>

          <div className="product-detail__accordion">
            <button
              type="button"
              className="product-detail__accordion-head"
              onClick={() => setOpenDetails((prev) => !prev)}
            >
              PRODUCT DETAILS
              <span>{openDetails ? "−" : "+"}</span>
            </button>
            {openDetails && (
              <p className="product-detail__accordion-body">
                {product.details}
              </p>
            )}
          </div>

          <div className="product-detail__accordion">
            <button
              type="button"
              className="product-detail__accordion-head"
              onClick={() => setOpenMaterials((prev) => !prev)}
            >
              MATERIALS
              <span>{openMaterials ? "−" : "+"}</span>
            </button>
            {openMaterials && (
              <p className="product-detail__accordion-body">
                {product.materials}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
