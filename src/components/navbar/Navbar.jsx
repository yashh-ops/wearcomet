import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.avif";

const menDropdown = ["X Lows", "Aeon", "Aeres", "The Vault"];
const womenDropdown = ["Astra", "X Lows", "Aeres", "The Vault"];

const navLinks = [
  {
    label: "Men",
    dropdown: menDropdown,
  },
  {
    label: "Women",
    dropdown: womenDropdown,
  },
  {
    label: "The Vault",
    dropdown: null,
    path: "/pages/vault",
  },
  {
    label: "About Us",
    dropdown: null,
    path: "/about",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const currentPath = window.location.pathname;

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* LOGO */}
        <a href="/" className="navbar__logo">
          <img src={logo} alt="Comet" />
        </a>

        {/* NAVIGATION */}
        <nav className="navbar__links">
          {navLinks.map((link) => {
            const isActive = link.path && currentPath === link.path;

            return (
              <div
                key={link.label}
                className={`navbar__item ${
                  isActive ? "navbar__item--active" : ""
                }`}
                onMouseEnter={() => link.dropdown && setOpenMenu(link.label)}
                onMouseLeave={() => link.dropdown && setOpenMenu(null)}
              >
                {link.dropdown ? (
                  <span className="navbar__link">
                    {link.label}

                    <svg
                      className="navbar__caret"
                      viewBox="0 0 12 8"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <a href={link.path} className="navbar__link">
                    {link.label}
                  </a>
                )}

                {/* DROPDOWN */}
                {link.dropdown && openMenu === link.label && (
                  <div className="navbar__dropdown">
                    {link.dropdown.map((item) => (
                      <a key={item} href="/" className="navbar__dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT ICONS */}
        <div className="navbar__icons">
          {/* SEARCH */}
          <button className="navbar__icon-btn" aria-label="Search">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle
                cx="13.5"
                cy="13.5"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <line
                x1="20"
                y1="20"
                x2="27"
                y2="27"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* ACCOUNT */}
          <button className="navbar__icon-btn" aria-label="Account">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle
                cx="16"
                cy="10"
                r="5"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M6 28C7.5 21.8 11.2 19 16 19C20.8 19 24.5 21.8 26 28"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* BAG / CART */}
          <button
            className="navbar__icon-btn navbar__cart"
            aria-label="Shopping bag"
          >
            <svg viewBox="0 0 40 32" fill="none" aria-hidden="true">
              <path
                d="M4 9H36V27H4V9Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <path
                d="M12 9V7C12 3.7 14.7 1.5 20 1.5C25.3 1.5 28 3.7 28 7V9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              <line
                x1="4"
                y1="13"
                x2="36"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>

            <span className="navbar__cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
