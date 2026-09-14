import { useState } from "react";
import { reviewSummary, reviews } from "../../data/reviews";
import "./ProductReviews.css";

const stars = [1, 2, 3, 4, 5];

const StarRow = ({ count }) => (
  <div className="product-reviews__stars">
    {stars.map((star) => (
      <span
        key={star}
        className={
          "product-reviews__star" +
          (star <= count ? " product-reviews__star--filled" : "")
        }
      >
        ★
      </span>
    ))}
  </div>
);

const ProductReviews = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredReviews =
    activeFilter === "ALL"
      ? reviews
      : reviews.filter((review) => review.stars === Number(activeFilter));

  return (
    <section className="product-reviews">
      <div className="product-reviews__header">
        <h2 className="product-reviews__heading">REVIEWS</h2>
        <button type="button" className="product-reviews__write-btn">
          WRITE A REVIEW
        </button>
      </div>

      <div className="product-reviews__summary">
        <StarRow count={Math.round(reviewSummary.average)} />
        <span className="product-reviews__summary-text">
          {reviewSummary.average} (Based on {reviewSummary.totalCount} reviews)
        </span>
      </div>

      <div className="product-reviews__toolbar">
        <div className="product-reviews__filters">
          <button
            type="button"
            className={
              "product-reviews__filter" +
              (activeFilter === "ALL" ? " product-reviews__filter--active" : "")
            }
            onClick={() => setActiveFilter("ALL")}
          >
            ALL
          </button>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              type="button"
              key={star}
              className={
                "product-reviews__filter" +
                (activeFilter === String(star)
                  ? " product-reviews__filter--active"
                  : "")
              }
              onClick={() => setActiveFilter(String(star))}
            >
              ★ {star}
            </button>
          ))}
        </div>

        <button type="button" className="product-reviews__sort">
          Most Helpful <span>⌄</span>
        </button>
      </div>

      <div className="product-reviews__list">
        {filteredReviews.length === 0 && (
          <p className="product-reviews__empty">No reviews at this rating yet.</p>
        )}

        {filteredReviews.map((review) => (
          <article className="product-review" key={review.id}>
            <StarRow count={review.stars} />
            <h3 className="product-review__title">{review.title}</h3>
            <p className="product-review__meta">
              {review.name}
              <br />
              {review.location}
            </p>
            <p className="product-review__text">{review.text}</p>
            <div className="product-review__footer">
              <span>{review.date}</span>
              <span className="product-review__helpful">
                👍 {review.helpfulCount}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
