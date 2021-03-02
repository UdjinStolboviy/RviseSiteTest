import React from "react";
import "./faqStyl.scss";

function FaqBlock() {
  return (
    <div className="content">
      <section className="faq">
        <div className="container">
          <div className="faq__block block">
            <h2>FAQ</h2>

            <div className="block__fqa">
              <div className="pages__control">
                <div className="fqa-litel">
                  <h3>Wann muss ich eine Facharbeit schreiben?</h3>
                  <p>
                    Eine Facharbeit wird für gewöhnlich in der Oberstufe
                    geschrieben. Sie stellt eine Art Vorbereitung auf das
                    wissenschaftliche Arbeiten an der Universität dar.
                  </p>
                </div>
                <div className="fqa-litel">
                  <h3>Was gehört in eine Facharbeit?</h3>
                  <p>
                    Die folgende Gliederung hat sich für eine Facharbeit <br />
                    1. Deckblatt 2. Inhaltsverzeichnis 3. Einleitung 4.
                    Darstellung des Facharbeitsthemas (= Hauptteil) 5. Fazit 6.
                    Anhang 7. Eigenständigkeitserklärung.
                  </p>
                </div>
                <div className="fqa-litel">
                  <h3>
                    Wie lange braucht man, um eine Facharbeit zu schreiben?
                  </h3>
                  <p>
                    Diese Frage kann nicht pauschal beantwortet werden, da sich
                    sowohl Deine Motivation als auch Deine Erfahrung bzw. Dein
                    Wissen bezüglich der Facharbeit auf den Arbeitsprozess
                    auswirken. Derweil arbeiten unsere Autoren höchst effizient
                    und liefern Deine wissenschaftliche Arbeit in möglichst
                    kurzer Zeit.
                  </p>
                </div>
              </div>
              <button className="button-fqa">
                Jetzt unverbindlich anfragen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default FaqBlock;
