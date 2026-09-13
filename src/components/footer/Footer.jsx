import "./Footer.css";

const aboutLinks = [
  "ABOUT US",
  "COMET DESIGN LAB",
  "THE VAULT",
  "ONLY FEW LEFT",
  "THE GARAGE",
  "GIFTING GUIDE",
  "REFER A FRIEND",
];

const quickLinks = [
  "HOME",
  "STORE LOCATOR",
  "RETURN AND EXCHANGE PORTAL",
  "CONTACT US",
  "CARE",
  "FAQ",
  "FIND YOUR SILHOUETTE",
  "BRAND ASSETS",
  "T&C",
  "RETURN EXCHANGE AND REFUND POLICY",
  "PRIVACY POLICY",
  "SHIPPING POLICY",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h4 className="footer__title">
            <span className="footer__icon">✉</span> GET IN TOUCH
          </h4>

          <p className="footer__line">
            <span className="footer__icon">☎</span> Whatsapp:{" "}
            <a href="https://wa.me/919606081463" className="footer__link">
              +91 9606081463
            </a>
          </p>
          <p className="footer__line">
            Support:{" "}
            <a href="mailto:hello@wearcomet.com" className="footer__link">
              hello@wearcomet.com
            </a>
          </p>
          <p className="footer__line">
            Gifting and Corporate Orders:{" "}
            <a
              href="mailto:bulkorders@wearcomet.com"
              className="footer__link"
            >
              bulkorders@wearcomet.com
            </a>
          </p>
          <p className="footer__line">
            Marketing &amp; Partnership:{" "}
            <a
              href="mailto:partnerships@wearcomet.com"
              className="footer__link"
            >
              partnerships@wearcomet.com
            </a>
          </p>
          <p className="footer__line">
            Careers: <a href="/careers" className="footer__link">Apply Here</a>
          </p>

          <hr className="footer__divider" />

          <h4 className="footer__title">
            <span className="footer__icon">📍</span> REACH US
          </h4>
          <p className="footer__address">
            3rd Floor, No.616, 15th Main Rd, 4th Block,
            <br />
            Koramangala, Bengaluru, Karnataka, India, 560034
          </p>
          <p className="footer__address">
            <a href="https://www.wearcomet.com" className="footer__link">
              https://www.wearcomet.com
            </a>
            <br />
            Above is the only official website of COMET.
            <br />
            We have no other domain.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">
            <span className="footer__icon">◎</span> SOCIAL
          </h4>
          <div className="footer__socials">
            <a href="/" aria-label="Instagram" className="footer__social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="/" aria-label="LinkedIn" className="footer__social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="8" cy="8.5" r="1.1" fill="currentColor" />
                <line x1="8" y1="11.5" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 17v-3.2c0-1.5 1-2.3 2.2-2.3s2.1.8 2.1 2.3V17" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
          </div>

          <hr className="footer__divider" />

          <h4 className="footer__title">
            <span className="footer__icon">✦</span> ABOUT US
          </h4>
          <ul className="footer__list">
            {aboutLinks.map((item) => (
              <li key={item}>
                <a href="/" className="footer__list-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">
            <span className="footer__icon">⊘</span> QUICK LINKS
          </h4>
          <ul className="footer__list">
            {quickLinks.map((item) => (
              <li key={item}>
                <a href="/" className="footer__list-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__country">
          <span>IN</span> India <span className="footer__caret">⌄</span>
        </div>
        <p className="footer__copyright">
          © 2026, Grails Marketing Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
