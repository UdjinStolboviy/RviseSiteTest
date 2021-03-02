import "./App.scss";
import Header from "../header";
import Promo from "../promo/";
import MarkerSection from "../markerSection";
import Calculator from "../calculator";
import Testimonials from "../testimonials";

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
        </div>
      </main>
    </div>
  );
}

export default App;
