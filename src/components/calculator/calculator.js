import React from "react";
import "./calculatorStyl.scss";

function Calculator() {
  return (
    <div className="content">
      <section className="calculator">
        <div className="container">
          <div className="calculator__block block">
            <h2>Berechne den Preis</h2>
            <p>
              Bitte fülle alle nötigen Felder aus und der Preisrechner zeigt dir
              den Preis
            </p>
            <div className="block__dropdown">
              <div className="pages__control">
                <div className="drow-litel">Schreiben &gt;</div>
                <div className="drow-litel">Bachelor &gt;</div>
                <div className="drow-litel">- 100 +</div>
                <div className="drow-litel">12 Nov 2020</div>
                <div className=" drow-litel drow-price">€ 56.25</div>
              </div>
              <div className="pages__total">
                <div className="drow-big">Hausarbeit &gt;</div>
                <div className="drow-big">
                  Sprach- & Kulturwissenschaften &gt;
                </div>
                <button className="button-calc">Anfragen</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Calculator;
