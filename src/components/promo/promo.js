import React from "react";
import "./promoStyl.scss";
import promoImg from "./img/promo-image.png";

function Promo() {
  return (
    <div className="content">
      <section className="promo">
        <div className="container">
          <div className="promo__block block">
            <div classNam="promo__colum">
              <div className="block__promo-content">
                <h2 classNam="block__promo-titel">
                  Die Facharbeit schreiben – Anforderungen, Gliederung und
                  typische Fehler
                </h2>
                <p className="block__promo-text">
                  Du bist auf der Suche nach einem
                  <span> professionellen Ghostwriter</span>, kannst aber den
                  passenden Autor nicht finden? Kein Wunder, denn im Internet
                  gibt es eine schier unendliche Anzahl an Angeboten! Da kann
                  man sich bei der Auswahl leicht irren. Aber nicht bei uns! Die
                  Autoren unserer Agentur schreiben wissenschaftliche
                  Facharbeiten in bester Qualität, die sich stets nach den
                  Bedürfnissen des Auftraggebers richten. <br />
                  <br />
                  Wir bieten unseren Kunden eine lange Reihe von
                  Schreibdienstleistungen: <span> Themenfindung</span>, Hilfe
                  bei der Literaturrecherche, Verfassen von wissenschaftlichen
                  Arbeiten (Haus-,{" "}
                  <span> Seminar-, Bachelor-, Masterarbeit </span>
                  usw.), <span>Korrekturlesen, Lektorat</span> und
                  <span> Plagiatsprüfung.</span> Diese Leistungen stehen nicht
                  nur auf Deutsch, sondern beispielsweise auch auf
                  <span> Englisch </span>zur Verfügung.
                </p>
                <button>Probier jetzt aus</button>
              </div>
            </div>
            <div classNam="promo__colum">
              <div className="block__promo-img">
                <img src={promoImg} alt="promoImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Promo;
