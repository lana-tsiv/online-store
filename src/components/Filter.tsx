import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import DoubleRangeSlider from "./DoubleRangeSlider";
import {
  setFilterByCategoryAndBrand,
  setSortByPriceAsc,
  setSortByStock,
} from "../redux/slices/filterSlice";
import { dataCard } from "../data/dataCard";

import "./../styles/Filter.css";

type FilterType = {
  brand: string;
  category: string;
};

const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    brands: {
      "NYX PROFESSIONAL MAKE UP": false,
      MAYBELLINE: false,
      "L'OREAL": false,
      "MAX FACTOR": false,
    },
    //
    categories: {
      lipstick: false,
      mascara: false,
      "eye shadow": false,
      foundation: false,
    },
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

  const sortDataPrice = dispatch(setSortByPriceAsc(dataCard));
  const minValuePrice = Math.floor(sortDataPrice.payload[0].price);
  const maxValuePrice = Math.ceil(
    sortDataPrice.payload[sortDataPrice.payload.length - 1].price
  );

  const sortDataStock = dispatch(setSortByStock(dataCard));
  const minValueStock = sortDataStock.payload[0].stock;
  const maxValueStock =
    sortDataStock.payload[sortDataStock.payload.length - 1].stock;

  const findCategory = dataCard.reduce((acc: any, item) => {
    if (!acc.find((accItems: any) => item.category === accItems.category)) {
      acc.push({ category: item.category, brand: item.brand });
      acc.sort((a: any, b: any) => a.category.localeCompare(b));
    }
    return acc;
  }, []);

  const findBrand = dataCard.reduce((acc: any, item) => {
    if (!acc.find((accItems: any) => item.brand === accItems.brand)) {
      acc.push({ category: item.category, brand: item.brand });
      acc.sort((a: any, b: any) => a.brand.localeCompare(b));
    }
    return acc;
  }, []);

  const [key, setKey] = useState(0);
  const resetClick = () => setKey((key) => key + 1);

  return (
    <div className="filter">
      <div className="filter__buttons-wrap">
        <button className="filter__button" onClick={resetClick}>
          Reset
        </button>
        <button className="filter__button">Copy link</button>
      </div>
      <p className="filter-type__title">Category</p>
      <div className="filter-type checkbox-container category">
        <Fragment key={key}>
          {findCategory.map((item: any, index: number) => {
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
        <Fragment key={key}>
          {findBrand.map((item: any, index: number) => {
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
            console.log(`min = ${min}, max = ${max}`)
          }
        />
      </div>
      <div className="filter-type slider-container stock">
        <p className="filter-type__title">Stock</p>
        <DoubleRangeSlider
          min={minValueStock}
          max={maxValueStock}
          onChange={({ min, max }: { min: number; max: number }) =>
            console.log(`min = ${min}, max = ${max}`)
          }
        />
      </div>
    </div>
  );
};

export default Filter;
