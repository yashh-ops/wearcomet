import { useRef } from "react";
import { productFeatures } from "../../data/products";
import "./FeatureShowcase.css";

const FeatureShowcase = ({ product }) => {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstChild?.offsetWidth || 400;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="feature-showcase">
      <div className="feature-showcase__track" ref={trackRef}>
        {productFeatures.map((feature, index) => (
          <div className="feature-slide" key={feature.id}>
            <div className="feature-slide__image-wrap">
              <img
                src={product.gallery[index % product.gallery.length]}
                alt={feature.title}
                className="feature-slide__image"
              />
            </div>
            <div className="feature-slide__text">
              <p className="feature-slide__eyebrow">{feature.eyebrow}</p>
              <h3 className="feature-slide__title">{feature.title}</h3>
              <p className="feature-slide__body">{feature.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="feature-showcase__controls">
        <button
          type="button"
          className="feature-showcase__arrow"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous feature"
        >
          ‹
        </button>
        <button
          type="button"
          className="feature-showcase__arrow"
          onClick={() => scrollByCard(1)}
          aria-label="Next feature"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default FeatureShowcase;
