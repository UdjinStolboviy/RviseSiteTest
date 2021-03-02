import React from "react";
import "./advantagesStyl.scss";
import advantagesImg from "./img/advantages-image.png";

function AdvantagesSection() {
  return (
    <div className="content">
      <section className="promo">
        <div className="container">
          <div className="promo__block block mod__advantages-block">
            <div className="promo__colum colum__mod-advantages">
              <div className="block__promo-img">
                <img
                  className="advantages__img"
                  src={advantagesImg}
                  alt="advantagesImg"
                />
              </div>
            </div>
            <div classNam="promo__colum">
              <div className="block__promo-content advantages__mod-content">
                <h2 classNam="block__promo-titel">
                  Deine Vorteile auf einen Blick
                </h2>
                <span className="span-row"></span>
                <p className="block__promo-text">
                  Wir arbeiten auf wissenschaftlichem Niveau und fertigen Deine
                  Facharbeit in Rekordzeit an.
                </p>
                <p className="block__promo-text">
                  <span className="span-row"></span>
                  Egal, ob Komplettlösung (= Erstellen einer Facharbeit) oder
                  einzelne Leistung (Korrekturlesen o.Ä.) - unsere Experten
                  wissen, worauf es ankommt.
                </p>
                <p className="block__promo-text">
                  <span className="span-row"></span>
                  Du profitierst von kostengünstigen Preisen und einer
                  professionellen Betreuung.
                </p>
                <p className="block__promo-text">
                  <span className="span-row"></span>
                  Wir behandeln Deinen Auftrag diskret.
                </p>
                <p className="block__promo-text">
                  <span className="span-row"></span>
                  Wir halten unsere Termine garantiert ein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdvantagesSection;
