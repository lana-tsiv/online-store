import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ICard} from "../../models";
import {dataCard} from "../../data/dataCard";

export interface CounterState {
    categoryId: number,
    sort: {
        name: string,
        sortProperty: string
    },
    items: Array<ICard>,
}

console.log(dataCard)
const initialState: CounterState = {
    categoryId: 0,
    sort: {
        name: 'No selected',
        sortProperty: '',
    },
    items: [...dataCard],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setSortByDefault: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.id - b.id)
        },
        setSortByPriceAsc: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.price - b.price)
        },
        setSortByPriceDesc: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.price - b.price).reverse()
        },
        setSortByBrandAsc: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.brand.localeCompare(b.brand))
        },
        setSortByBrandDesc: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.brand.localeCompare(b.brand)).reverse()
        },
        setSortByStock: (state, action) => {
            action.payload.sort((a: ICard, b: ICard) => a.stock - b.stock)
        },
        setFilterByCategory: (state, action) => {
            state.items = dataCard.filter(i=> i.category === action.payload)
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload
        },
    },
})

export const {
    setCategoryId,
    setSort,
    incrementByAmount,
    setSortByDefault,
    setSortByPriceAsc,
    setSortByPriceDesc,
    setSortByBrandAsc,
    setSortByBrandDesc,
    setSortByStock,
    setFilterByCategory
} = filterSlice.actions

export default filterSlice.reducer