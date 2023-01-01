import {createSlice} from '@reduxjs/toolkit'
import {ICard} from "../../models";

export interface ICardStore extends ICard {
    count: number
}

const getItems = ()  => {
        const localItems = localStorage.getItem('items');
        return localItems ? JSON.parse(localItems) : [];
}

const getTotalPrice = ()  => {
    const localTotalPrice = localStorage.getItem('totalPrice');
    return localTotalPrice ? Number(JSON.parse(localTotalPrice)) : 0;
}

export interface CounterState {
    totalPrice: number,
    items: Array<ICardStore>,
}

const initialState: CounterState = {
    totalPrice: getTotalPrice(),
    items: getItems(),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state: CounterState, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1});
            }
            state.totalPrice = Number(state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0).toFixed(2));

        },
        removeItem: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if (findItem && findItem.count > 1) {
                findItem.count--
            } else {
                state.items = state.items.filter((obj) => obj.id !== action.payload.id)
            }

            state.totalPrice = Number((state.totalPrice - action.payload.price).toFixed(2));
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
})

export const {addItem, removeItem, clearItems} = cartSlice.actions

export default cartSlice.reducer