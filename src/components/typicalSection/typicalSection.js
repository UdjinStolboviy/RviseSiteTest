import React from "react";
import "./typicalStyl.scss";
import typicalImg from "./img/man-image.png";
import typicalBgImg from "./img/bg-typecol.png";

function TypicalSection() {
  return (
    <div className="content">
      <section className="promo">
        <div className="container">
          <div className="promo__block block mod__typical-block">
            <div classNam="promo__colum">
              <div className="block__promo-content typical__mod-content">
                <h2 classNam="block__promo-titel">
                  Unbedingt beachten: typische Fehler, die Lernende begehen
                </h2>
                <p className="block__promo-text">
                  Das Befolgen sämtlicher wissenschaftlicher Regeln und die
                  sinnvolle, verständliche Darstellung der wesentlichen Aspekte
                  eines Themas können trotz den obigen Hilfen eine große
                  Herausforderung sein. Und zwar insbesondere für den
                  „Anfänger“. Es kann z.B. passieren, dass man bei der schier
                  unendlichen Auswahl an Sekundärliteratur den Überblick
                  verliert. Und obwohl die Fragestellung aus allen möglichen
                  Perspektiven erörtert werden soll, ist beispielsweise dennoch
                  auf eine Balance zwischen der Anzahl an Perspektiven und deren
                  Zusammenhang zur Fragestellung zu achten. <br />
                  <br />
                  Des Weiteren sammeln viele Studierende zu wenige Quellen; sie
                  beschränken sich auf leicht zugängliche und somit nicht immer
                  dem akademischen Standard entsprechende Literatur. Hieraus
                  ergibt sich auch die Gefahr, dass die Informationen eines
                  Werks unpassend und/oder überholt sind.
                </p>
                <div className="typical__litel-img-marc">
                  <img src={typicalBgImg} alt="TypicalSectionImg" />
                </div>
              </div>
            </div>
            <div className="promo__colum colum__mod-typical">
              <div className="block__promo-img">
                <img
                  className="typical__img"
                  src={typicalImg}
                  alt="TypicalSectionImg"
                />
                <p>
                  Tippfehler, grammatikalische Fehler und eine unpassende äußere
                  Form (Schriftgröße etc.) machen ebenfalls einen schlechten
                  Eindruck. Um dies zu vermeiden, muss die Facharbeit immer
                  wieder überprüft und korrigiert werden. Ein Dozent wird sofort
                  merken, wenn nicht gründlich gearbeitet wurde! Eine unachtsame
                  Arbeitsweise steht synonym für die negativ behaftete
                  Einstellung des/der Studierenden zu der Aufgabe und somit
                  gegen den Autor selbst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TypicalSection;
