import React from "react";
import "./testimonialsStyl.scss";
import stepImg from "./img/Steps.png";

function Testimonials() {
  return (
    <div className="content">
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__block block">
            <h2>Die Facharbeit in wenigen Schritten schreiben</h2>
            <p>
              In den nächsten Abschnitten liest Du, wie eine Facharbeit Schritt
              für Schritt erstellt wird.
              <br /> Ein Tipp vorweg: Die Länge der wissenschaftlichen Arbeit
              beträgt i.d.R. zwischen zehn und 12 Seiten.
            </p>
            <div className="block__step-img">
              <img src={stepImg} alt="stepImg" />
            </div>
            <div className="block__step-info">
              <div className="step-info__left">
                <h4>Schritt 3</h4>
                <h2 className="text__title-step">Die Facharbeit schreiben:</h2>
                <p className="text__p-step">-- Einführung</p>
                <p className="text__p-step text-green">
                  -- Die Einleitung schreiben
                </p>
                <p className="text__p-step">-- Den Hauptteil verfassen</p>
                <p className="text__p-step">-- Das Fazit schreiben</p>
                <p className="text__p-step">
                  -- Richtig zitieren will gelernt sein!
                </p>
              </div>
              <div className="step-info__right">
                <p>Die Einleitung enthält diese Elemente:</p>
                <p>
                  <span className="text-green-span">1.</span> Einführung in das
                  Thema und die Frage, die behandelt wird.
                </p>
                <p>
                  <span className="text-green-span">2.</span> Übersicht über die
                  inhaltliche Vorgehensweise und die Struktur der Arbeit.
                </p>
                <p>
                  <span className="text-green-span">3.</span>
                  Formulierung des Ziels der Arbeit und Erläuterung der
                  notwendigen Schritte, um dieses zu erreichen.
                </p>
                <p>
                  <span className="text-green-span">Übrigens:</span>
                  <br />
                  <br />
                  Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials;
