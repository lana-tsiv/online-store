import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import DoubleRangeSlider from "./DoubleRangeSlider";
import {
  setFilterByCategoryAndBrand,
  setFilterByPrice,
  setFilterByStock,
} from "../redux/slices/filterSlice";
import { dataCard } from "../data/dataCard";

import "./../styles/Filter.css";
import { RootState } from "../redux/store";

type FilterType = {
  brand: string;
  category: string;
};

const defaultFiltersState = {
  brands: {
    "NYX PROFESSIONAL MAKE UP": false,
    MAYBELLINE: false,
    "L'OREAL": false,
    "MAX FACTOR": false,
  },
  categories: {
    lipstick: false,
    mascara: false,
    "eye shadow": false,
    foundation: false,
  },
};

const Filter = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.filter);

  const minValuePrice = Math.floor(
    dataCard.sort((a, b) => a.price - b.price)[0].price
  );
  const maxValuePrice = Math.ceil(
    dataCard.sort((a, b) => b.price - a.price)[0].price
  );

  const minValueStock = Math.floor(
    dataCard.sort((a, b) => a.stock - b.stock)[0].stock
  );
  const maxValueStock = Math.ceil(
    dataCard.sort((a, b) => b.stock - a.stock)[0].stock
  );

  const [filter, setFilter] = useState(defaultFiltersState);
  const [priceFilter, setPriceFilter] = useState({
    min: 8,
    max: maxValuePrice,
  });

  const [stockFilter, setStockFilter] = useState({
    min: minValueStock,
    max: maxValueStock,
  });

  const checkHandler = (item: FilterType, switcher: string) => {
    if (switcher === "category") {
      setFilter({
        ...filter,
        categories: {
          ...filter.categories,
          [item.category]:
            !filter.categories[item.category as keyof typeof filter.categories],
        },
      });

      dispatch(
        setFilterByCategoryAndBrand({
          ...filter,
          categories: {
            ...filter.categories,
            [item.category]:
              !filter.categories[
                item.category as keyof typeof filter.categories
              ],
          },
        })
      );
    } else if (switcher === "brand") {
      setFilter({
        ...filter,
        brands: {
          ...filter.brands,
          [item.brand]:
            !filter.brands[item.brand as keyof typeof filter.brands],
        },
      });

      dispatch(
        setFilterByCategoryAndBrand({
          ...filter,
          brands: {
            ...filter.brands,
            [item.brand]:
              !filter.brands[item.brand as keyof typeof filter.brands],
          },
        })
      );
    }
  };

  useEffect(() => {
    dispatch(setFilterByPrice({ ...priceFilter, items }));
  }, [priceFilter]);

  useEffect(() => {
    dispatch(setFilterByStock({ ...stockFilter, items }));
  }, [stockFilter]);

  const findCategory = dataCard.reduce((acc: { category: string, brand: string }[], item) => {
    if (!acc.find((accItems) => item.category === accItems.category)) {
      acc.push({ category: item.category, brand: item.brand });
      acc.sort((a, b) => a.category.localeCompare(b.category));
    }
    return acc;
  }, []);

  const findBrand = dataCard.reduce((acc: { category: string, brand: string }[], item) => {
    if (!acc.find((accItems) => item.brand === accItems.brand)) {
      acc.push({ category: item.category, brand: item.brand });
      acc.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    return acc;
  }, []);

  return (
    <div className="filter">
      <div className="filter__buttons-wrap">
        <button
          className="filter__button"
          onClick={() => {
            setFilter(defaultFiltersState);
            dispatch(setFilterByCategoryAndBrand(defaultFiltersState));
          }}
        >
          Reset
        </button>
        <button className="filter__button">Copy link</button>
      </div>
      <p className="filter-type__title">Category</p>
      <div className="filter-type checkbox-container category">
        <Fragment>
          {findCategory.map((item, index: number) => {
            return (
              <div key={item.category + index} className="checkbox-item">
                <div className="checkbox-item__input-wrap">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id={item.category}
                    name={item.category}
                    defaultChecked={false}
                    checked={
                      filter.categories[
                        item.category as keyof typeof filter.categories
                      ]
                    }
                    onChange={() => checkHandler(item, "category")}
                  />
                  <label className="checkbox-item__label" htmlFor="lipstic">
                    {item.category}
                  </label>
                </div>
                <p className="checkbox-item__quantity">4/4</p>
              </div>
            );
          })}
        </Fragment>
      </div>
      <p className="filter-type__title">Brand name</p>
      <div className="filter-type checkbox-container brand-name">
        <Fragment>
          {findBrand.map((item, index: number) => {
            return (
              <div key={item.brand + index} className="checkbox-item">
                <div className="checkbox-item__input-wrap">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id={item.brand}
                    name={item.brand}
                    defaultChecked={false}
                    checked={
                      filter.brands[item.brand as keyof typeof filter.brands]
                    }
                    onChange={() => checkHandler(item, "brand")}
                  />
                  <label className="checkbox-item__label" htmlFor="lipstic">
                    {item.brand}
                  </label>
                </div>
                <p className="checkbox-item__quantity">4/4</p>
              </div>
            );
          })}
        </Fragment>
      </div>
      <div className="filter-type slider-container price">
        <p className="filter-type__title">Price</p>
        <DoubleRangeSlider
          min={minValuePrice}
          max={maxValuePrice}
          onChange={({ min, max }: { min: number; max: number }) =>
            setPriceFilter({ min, max })
          }
        />
      </div>
      <div className="filter-type slider-container stock">
        <p className="filter-type__title">Stock</p>
        <DoubleRangeSlider
          min={minValueStock}
          max={maxValueStock}
          onChange={({ min, max }: { min: number; max: number }) =>
            setStockFilter({ min, max })
          }
        />
      </div>
    </div>
  );
};

export default Filter;
