import React, { useEffect } from "react";
import "../Home/LandingPage.css";
import { handleScrollTo, LandingPageScript } from "../Home/script";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LandingPageImages/logo.svg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  useEffect(() => {
    LandingPageScript();
  }, []);

  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg margin-0-imp">
                <Link className="navbar-brand" to="index.html">
                  <img src={Logo} alt="Logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    {navItems.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <Link
                          className="page-scroll"
                          onClick={() => handleScrollTo(item.id)}
                          role="button"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
