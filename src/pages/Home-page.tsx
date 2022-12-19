import { Cards } from "../components/card";
import { dataCard } from "../data/dataCard";

const Homepage = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="filter"></div>
        <div className="card">
          {dataCard.map((item) => (
            <Cards card={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
