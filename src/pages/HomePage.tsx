import { Cards } from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { ICard } from "../models";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { RootState } from "../redux/store";
import {
  setSortByDefault,
  setSortByBrandAsc,
  setSortByBrandDesc,
  setSortByPriceAsc,
  setSortByPriceDesc,
} from "../redux/slices/filterSlice";
import GridIcon from "./../assets/icons/grid.png";
import ListIcon from "./../assets/icons/list.png";
import NoFound from "./../assets/image/no-found.png";

type KEYS =
  | "brand"
  | "category"
  | "productName"
  | "description"
  | "price"
  | "stock";

const keysSearch: KEYS[] = [
  "brand",
  "category",
  "productName",
  "description",
  "price",
  "stock",
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.filter);

  const [view, setView] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const [filteredItems, setFilteredItems] = useState([...items]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const newItems = items.filter((item: ICard) => {
        return keysSearch.some((key: KEYS) =>
          item[key].toString().toLowerCase().includes(searchData.toLowerCase())
        );
      });
      setFilteredItems(newItems);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchData, filteredItems]);

  useEffect(() => {
    if (currentSort === "") dispatch(setSortByDefault(items));
    if (currentSort === "price") dispatch(setSortByPriceAsc(items));
    if (currentSort === "-price") dispatch(setSortByPriceDesc(items));
    if (currentSort === "brand") dispatch(setSortByBrandAsc(items));
    if (currentSort === "-brand") dispatch(setSortByBrandDesc(items));
  }, [currentSort]);

  const handleAddItem = (card: ICard) => {
    const item = {
      id: card.id,
      price: card.price,
      brand: card.brand,
      productName: card.productName,
      category: card.category,
      photos: card.photos,
      stock: card.stock,
    };

    dispatch(addItem(item));
  };

  const handleSearchChange = (value: string) => {
    setSearchData(value);
  };

  const changeView = () => {
    setView(!view);
  };

  return (
    <div className="main-wrapper">
      <div className="filter-wrap">
        <Filter />
      </div>
      <div className="card-wrap">
        <div className="sort-bar-wrapper">
          <Sort setCurrentSort={setCurrentSort} />
          <Search onChangeEvent={handleSearchChange} />
          <div className="toggle-wrap">
            <img
              onClick={changeView}
              className={`toggle ${!view ? "toggle__active" : ""} `}
              src={GridIcon}
              alt="grid"
            />
            <img
              onClick={changeView}
              className={`toggle ${view ? "toggle__active" : ""} `}
              src={ListIcon}
              alt="list"
            />
          </div>
        </div>
        <div className="card">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <Cards
                big={view}
                onClickAddItem={handleAddItem}
                key={item.id}
                card={item}
              />
            ))
          ) : (
            <div className="no-found-wrap">
              <div>
                <h2 className="no-found__title">No Result Found</h2>
                <p className="no-found__subtitle">Please try again</p>
              </div>
              <img
                src={NoFound}
                className="no-found__image"
                alt="no found data"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
