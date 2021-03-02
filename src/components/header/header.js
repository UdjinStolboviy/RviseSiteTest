/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./header.scss";
import searchImg from "./img/search-alt.svg";
import mobileImg from "./img/mobile-vibration.png";
import logo from "./img/logo.png";

function Header() {
  const [toggle, toggleClass] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <nav className="header__menu menu">
              <div
                className={
                  toggle
                    ? "menu__icon icon-menu"
                    : "menu__icon icon-menu active"
                }
                onClick={() => toggleClass(!toggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={toggle ? "menu__body" : "menu__body active"}>
                <div className="menu__search-alt">
                  <img src={searchImg} alt="searchImg" />
                </div>
                <div className="menu__phone-number">
                  <img src={mobileImg} alt="mobileImg" />
                  <h2 className="menu__phone-text">Anruf</h2>
                </div>
                <ul className="menu__list">
                  <li>
                    <a href="re" className="menu__link">
                      Generatoren
                    </a>
                  </li>
                  <li>
                    <a href="re" className="menu__link">
                      Preise
                    </a>
                  </li>
                  <li>
                    <a href="re" className="menu__link">
                      Wie funktioniert es?
                    </a>
                  </li>
                  <li>
                    <a href="re" className="menu__link">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="re" className="menu__link">
                      Kontakt
                    </a>
                  </li>
                </ul>
                <button className="btn__anfr">Anfragen</button>
                <button className="btn__anmeld">Andrew</button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
