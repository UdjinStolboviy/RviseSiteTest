import React from "react";
import "./markerStyl.scss";
import markerImg from "./img/requirements-image.png";
import carImg from "./img/IconCar.svg";

function markerSection() {
  return (
    <div className="content">
      <section className="promo">
        <div className="container">
          <div className="promo__block block mod__marker-block">
            <div className="promo__colum colum__mod-marker">
              <div className="block__promo-img">
                <img className="marker__img" src={markerImg} alt="markerImg" />
                <div className="marker-car">
                  <div className="car__title">
                    <img className="car__img" src={carImg} alt="carImg" />
                    <h3>Merke:</h3>
                  </div>
                  <p>
                    Das Verfassen einer Facharbeit stellt eine Art Vorbereitung
                    auf den Studienabschluss dar; nicht selten brauchen die
                    angehenden Studenten und Studentinnen Hilfe, um sich nicht
                    in den Mustern, denen sie folgen sollten, zu verlieren.
                  </p>
                </div>
              </div>
            </div>
            <div classNam="promo__colum">
              <div className="block__promo-content marker__mod-content">
                <h2 classNam="block__promo-titel">
                  Die Anforderungen an eine Facharbeit
                </h2>
                <p className="block__promo-text">
                  In Deutschland, sprich: an verschiedenen Schulen bestehen zum
                  Teil deutliche Unterschiede hinsichtlich den Anforderungen an
                  eine Facharbeit; sie beziehen sich vor allem auf den Umfang,
                  die gewährte Schreibfrist und den Grad an notwendigen
                  Kompetenzen. Zudem können die Erwartungen der einzelnen
                  Dozenten mehr oder weniger weit auseinanderliegen.
                  <br />
                  <br />
                  Da die wissenschaftliche Aufgabe normalerweise die erste
                  Begegnung mit dem akademischen Anspruch an Selbständigkeit,
                  Wissensvolumen und Kohärenz ist, stellt die Facharbeit für die
                  meisten Schüler und Schülerinnen eine große Herausforderung
                  dar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default markerSection;
