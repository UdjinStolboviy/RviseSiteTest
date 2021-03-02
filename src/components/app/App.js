import "./App.scss";
import Header from "../header";
import Promo from "../promo/";
import MarkerSection from "../markerSection";
import Calculator from "../calculator";
import Testimonials from "../testimonials";
import Carousels from "../carousel";
import SpecialistSection from "../specialistSection";
import AdvantagesSection from "../advantagesSection";
import TypicalSection from "../typicalSection";
import FaqBlock from "../faq";

function App() {
  return (
    <div className="app">
      <main className="page">
        <div className="main-screen">
          <Header />
          <Promo />
          <MarkerSection />
          <Calculator />
          <Testimonials />
          <Carousels />
          <SpecialistSection />
          <AdvantagesSection />
          <TypicalSection />
          <FaqBlock />
        </div>
      </main>
    </div>
  );
}

export default App;
