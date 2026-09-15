import { useState } from "react";
import "./ReviewsSection.css";

const testimonials = [
  {
    id: 1,
    image: "/images/reviews/customer-1.jpg",
    quote: "BUILT FOR THE LONG HAUL!",
    text: "Took these on a two-week trip and didn't pack any other pair. That's the kind of trust I have in them now. Held up through rain, uneven streets, and rushed airport sprints. Looked just as fresh on day fourteen as day one.",
    author: "AJAX",
  },

  {
    id: 2,
    image: "/images/reviews/customer-2.jpg",
    quote: "COMFORT I DIDN'T EXPECT",
    text: "Wore these on a full day of travel and they held up perfectly. Lightweight, breathable, and the sole doesn't feel flat after hours on your feet. Comet has quietly become my go-to brand for everyday sneakers.",
    author: "MIRAN",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const active = testimonials[activeIndex];

  const goTo = (index, slideDirection) => {
    setDirection(slideDirection);

    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-section__heading">WHAT'RE THEY SAYING?</h2>

      <div className="reviews-section__grid-bg">
        <div
          key={active.id}
          className={`review-card review-card--${direction}`}
        >
          {/* IMAGE */}

          <div className="review-card__image-wrap">
            <img
              src={active.image}
              alt="Customer wearing Comet sneakers"
              className="review-card__image"
            />
          </div>

          {/* CONTENT */}

          <div className="review-card__content">
            <div className="review-card__stars">★ ★ ★ ★ ★</div>

            <h3 className="review-card__quote">&ldquo;{active.quote}&rdquo;</h3>

            <p className="review-card__text">{active.text}</p>

            <div className="review-card__author">{active.author} ◉</div>
          </div>
        </div>

        {/* ARROWS */}

        <div className="reviews-section__controls">
          <button
            className="reviews-section__arrow"
            onClick={() => goTo(activeIndex - 1, "prev")}
            aria-label="Previous review"
          >
            ‹
          </button>

          <button
            className="reviews-section__arrow"
            onClick={() => goTo(activeIndex + 1, "next")}
            aria-label="Next review"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
