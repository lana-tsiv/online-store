import { createSlice } from "@reduxjs/toolkit";

import { ICard } from "../../models";
import { dataCard } from "../../data/dataCard";

export interface CounterState {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  items: Array<ICard>;
}

const initialState: CounterState = {
  categoryId: 0,
  sort: {
    name: "No selected",
    sortProperty: "",
  },
  items: [...dataCard],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSortByDefault: (state, action) => {
      state.items = [...action.payload].sort(
        (a: ICard, b: ICard) => a.id - b.id
      );
    },
    setSortByPriceAsc: (state, action) => {
      state.items = [...action.payload].sort(
        (a: ICard, b: ICard) => a.price - b.price
      );
    },
    setSortByPriceDesc: (state, action) => {
      state.items = [...action.payload]
        .sort((a: ICard, b: ICard) => a.price - b.price)
        .reverse();
    },
    setSortByBrandAsc: (state, action) => {
      state.items = [...action.payload].sort((a: ICard, b: ICard) =>
        a.brand.localeCompare(b.brand)
      );
    },
    setSortByBrandDesc: (state, action) => {
      state.items = [...action.payload]
        .sort((a: ICard, b: ICard) => a.brand.localeCompare(b.brand))
        .reverse();
    },
    setSortByStock: (state, action) => {
      state.items = [...action.payload].sort(
        (a: ICard, b: ICard) => a.stock - b.stock
      );
    },

    setFilterByPrice: (state, action) => {
      state.items = [...action.payload.items].filter(
        (card: ICard) =>
          card.price >= action.payload.min && card.price <= action.payload.max
      );
    },

    setFilterByStock: (state, action) => {
      state.items = [...action.payload.items].filter(
        (card: ICard) =>
          card.stock >= action.payload.min && card.stock <= action.payload.max
      );
    },

    setFilterByCategoryAndBrand: (state, action) => {
      state.items = dataCard.filter((card) => {
        if (
          Object.values(action.payload.brands).every((item) => !item) &&
          Object.values(action.payload.categories).every((item) => !item)
        ) {
          return card;
        } else if (
          Object.values(action.payload.brands).every((item) => !item)
        ) {
          return action.payload.categories[card.category];
        } else if (
          Object.values(action.payload.categories).every((item) => !item)
        ) {
          return action.payload.brands[card.brand];
        } else {
          return (
            action.payload.brands[card.brand] &&
            action.payload.categories[card.category]
          );
        }
      });
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setSortByDefault,
  setSortByPriceAsc,
  setSortByPriceDesc,
  setSortByBrandAsc,
  setSortByBrandDesc,
  setSortByStock,
  setFilterByPrice,
  setFilterByStock,
  setFilterByCategoryAndBrand,
} = filterSlice.actions;

export default filterSlice.reducer;
