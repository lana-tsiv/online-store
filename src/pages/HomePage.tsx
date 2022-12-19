import { Cards } from "../components/card";
import { dataCard } from "../data/dataCard";

const HomePage = () => {
  return (
      <div className="main-wrapper">
        <div className="filter">Filter</div>
        <div className="card">
          {dataCard.map((item) => (
            <Cards card={item} />
          ))}
        </div>
      </div>
  );
};

export default HomePage;
