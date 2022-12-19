import "./styles/colors.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";
import Header from "./components/header";
import { Cards } from "./components/card";
import { dataCard } from "./data/dataCard";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="filter"></div>
        <div className="card">
          {dataCard.map((item) => (
            <Cards card={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
