import {createSlice} from '@reduxjs/toolkit'
import {ICard} from "../../models";

export interface ICardStore extends ICard {
    count: number
}

const getItems = () => {
    const localItems = localStorage.getItem('items');
    return localItems ? JSON.parse(localItems) : [];
}

const getTotalPrice = () => {
    const localTotalPrice = localStorage.getItem('totalPrice');
    return localTotalPrice ? Number(JSON.parse(localTotalPrice)) : 0;
}

const setDiscountTotal = (discountTotal: number) => {
    localStorage.setItem('discountTotal', JSON.stringify(discountTotal))
}

const getDiscountTotal = () => {
    const discountTotal = localStorage.getItem('discountTotal');
    return discountTotal ? Number(JSON.parse(discountTotal)) : 0;
}

const setCoupon = (coupon: string[]) => {
    localStorage.setItem('coupon', JSON.stringify(coupon))
}

const getCoupon = () => {
    const coupon = localStorage.getItem('coupon')
    return coupon ? JSON.parse(coupon) : [];
}

const discountMap: Record<string, number> = {'RS': 0.1, 'EPM': 0.1};

const calculateDiscount = (coupons: string[], totalNumber: number) => {
    let discount = 0;
    coupons.forEach((item) => {
        if (discountMap[item]) {
            discount += totalNumber * discountMap[item]
        }
    })
    return discount;
}

export interface CounterState {
    totalPrice: number,
    items: Array<ICardStore>,
    discountTotal: number,
    coupon: string[],
}

const initialState: CounterState = {
    totalPrice: getTotalPrice(),
    items: getItems(),
    discountTotal: getDiscountTotal(),
    coupon: getCoupon(),
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

            state.discountTotal = calculateDiscount(state.coupon, state.totalPrice)

            setDiscountTotal(state.discountTotal)
            setCoupon(state.coupon)
        },
        removeItem: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if (findItem && findItem.count > 1) {
                findItem.count--
            } else {
                state.items = state.items.filter((obj) => obj.id !== action.payload.id)
            }

            state.totalPrice = Number((state.totalPrice - action.payload.price).toFixed(2));

            state.discountTotal = calculateDiscount(state.coupon, state.totalPrice)

            setDiscountTotal(state.discountTotal)

            if (state.items.length === 0) {
                state.coupon = []
            }
            setCoupon(state.coupon)
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.discountTotal = 0;
            state.coupon = []
            setDiscountTotal(state.discountTotal)
            setCoupon(state.coupon)
        },
        calcDiscount: (state, action) => {
            if(!state.coupon.includes(action.payload)) state.coupon.push(action.payload)
            state.discountTotal = Number((calculateDiscount(state.coupon, state.totalPrice)).toFixed(2));
            setDiscountTotal(state.discountTotal)
            setCoupon(state.coupon)
        },
        removeCoupon: (state, action) => {
            const index = state.coupon.indexOf(action.payload);
            if(state.coupon.length === 1) state.coupon.splice(0, 1)
            else if (index !== -1) {
                state.coupon = state.coupon.splice(index, 1)
            }
            setDiscountTotal(state.discountTotal)
            setCoupon(state.coupon)
            state.discountTotal = Number((calculateDiscount(state.coupon, state.totalPrice)).toFixed(2));

        }
    },
})

export const {addItem, removeItem, clearItems, calcDiscount, removeCoupon} = cartSlice.actions

export default cartSlice.reducer