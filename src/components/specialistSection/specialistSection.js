import React from "react";
import "./specialistStyl.scss";
import specialistImg from "./img/specialist-image.png";

function SpecialistSection() {
  return (
    <div className="content">
      <section className="promo">
        <div className="container">
          <div className="promo__block block mod__specialist-block">
            <div classNam="promo__colum">
              <div className="block__promo-content specialist__mod-content">
                <h2 classNam="block__promo-titel">
                  Unsere Ghostwriter für Deine Facharbeit - 3 Phasen des
                  Schreibens
                </h2>
                <p className="block__promo-text">
                  Entscheidest Du Dich dazu, uns mit dem Schreiben Deiner
                  Facharbeit zu beauftragen (beispielsweise, da Du den
                  Abgabetermin sonst nicht einhalten kannst), profitierst Du von
                  vielen Vorteilen (s.u.). Unsere Autoren arbeiten höchst
                  professionell und erstellen Deine wissenschaftliche Arbeit in
                  drei Phasen:
                </p>
                <div className="specialist__litel-text">
                  <p className="text-green">--- Vorbereitungsphase</p>
                  <p>-- category name / disactive</p>
                  <p>-- Nachbereitungsphase</p>
                </div>
              </div>
            </div>
            <div className="promo__colum colum__mod-specialist">
              <div className="block__promo-img">
                <img
                  className="specialist__img"
                  src={specialistImg}
                  alt="specialistImg"
                />
                <p>
                  In der Vorbereitungsphase findet der Ghostwriter ein
                  geeignetes Thema und er recherchiert nach wissenschaftlicher
                  Literatur. Darauf aufbauend erstellt er die Gliederung für
                  Deine Facharbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SpecialistSection;
