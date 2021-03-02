/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./footerStyl.scss";
import imgMain from "./img/footer-content.png";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="main-footer">
            <img className="img-main" src={imgMain} alt="imgMain" />

            {/* <div className="about-company"></div>

          <div className="services-footer"></div>
          <div className="services-add"></div>

          <div className="social-info">
            <h2>Контактная информация</h2>
            <p>
              Заводская улица, 2В, Буча,
              <br />
              Киевская область, 08292
            </p>
            <h3>ПН - ПТ: 09:00 - 18:00</h3>
            <h3>+38(097)123-45-67</h3>
            <div className="social-icons">
              <img className="img-fb" src={fb} alt="FB" />
              <img className="img-ins" src={inst} alt="INS" />
              <img className="img-youtub" src={youtub} alt="YT" />
              <img className="img-google" src={google} alt="Google" />
            </div>
          </div> */}
          </div>
          <div className="dev"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
