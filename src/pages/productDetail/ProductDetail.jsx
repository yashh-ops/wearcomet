import { useState, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import products from "../../data/products";
import FeatureShowcase from "./FeatureShowcase";
import ProductReviews from "./ProductReviews";
import RelatedProducts from "./RelatedProducts";
import PressSection from "../../components/pressSection/PressSection";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedColor, setSelectedColor] = useState(id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [openDetails, setOpenDetails] = useState(true);
  const [openMaterials, setOpenMaterials] = useState(false);

  const galleryRef = useRef(null);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Only allow 2 product images
  const galleryImages = product.gallery.slice(0, 2);

  // Desktop mouse-wheel scrolling
  const handleGalleryWheel = (e) => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
      <section className="product-detail">
        {/* =========================================
            LEFT: ONE FIXED IMAGE VIEWER
        ========================================= */}
        <div className="product-detail__gallery">
          <div
            className="product-detail__gallery-track"
            ref={galleryRef}
            onWheel={handleGalleryWheel}
          >
            {galleryImages.map((image, index) => (
              <div
                className="product-detail__gallery-item"
                key={`${image}-${index}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="product-detail__gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            RIGHT: PRODUCT INFORMATION
        ========================================= */}
        <div className="product-detail__panel">
          <div className="product-detail__panel-inner">
            <p className="product-detail__subtitle">{product.subtitle}</p>

            <h1 className="product-detail__name">{product.name}</h1>

            <hr className="product-detail__divider" />

            {/* COLORS */}
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

            {/* SIZES */}
            <div className="product-detail__section">
              <div className="product-detail__label-row">
                <h3 className="product-detail__label">SELECT SIZES</h3>

                <button type="button" className="product-detail__size-guide">
                  SIZE GUIDE
                  <span className="product-detail__q">?</span>
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

            {/* PRICE */}
            <div className="product-detail__price-box">
              <span className="product-detail__price-icon">🏷</span>

              <div>
                <p className="product-detail__price-line">
                  Get it at:{" "}
                  <strong>
                    ₹ {product.discountPrice.toLocaleString("en-IN")}
                    .00
                  </strong>
                </p>

                <p className="product-detail__coupon-line">
                  Apply <strong>{product.couponCode}</strong> at checkout to
                  avail.
                </p>
              </div>

              <button
                type="button"
                className="product-detail__copy"
                aria-label="Copy coupon code"
                onClick={() =>
                  navigator.clipboard?.writeText(product.couponCode)
                }
              >
                ⧉
              </button>
            </div>

            {/* ACTIONS */}
            <div className="product-detail__actions">
              <button type="button" className="product-detail__add">
                ADD TO CART
              </button>

              <button type="button" className="product-detail__buy">
                BUY NOW
              </button>
            </div>

            {/* PERKS */}
            <div className="product-detail__perks">
              <p>
                <span className="product-detail__perk-icon">↺</span>
                Free 7-day returns and exchanges
              </p>

              <p>
                <span className="product-detail__perk-icon">🚚</span>
                Free shipping
              </p>

              <p>
                <span className="product-detail__perk-icon">📦</span>
                Delivery in 3-5 days
              </p>
            </div>

            {/* PRODUCT DETAILS */}
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

            {/* MATERIALS */}
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

      {/* FEATURE SECTION */}
      <FeatureShowcase product={product} />

      {/* REVIEWS */}
      <ProductReviews />

      {/* PRESS */}
      <PressSection />

      {/* RELATED PRODUCTS */}
      <RelatedProducts currentId={product.id} />
    </>
  );
};

export default ProductDetail;
