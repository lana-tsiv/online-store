import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    categoryId: number,
    sort: {
        name: string,
        sortProperty: string
    }
}

const initialState: CounterState = {
    categoryId: 0,
    sort: {
        name: 'No selected',
        sortProperty: 'price'
    }
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
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload
        },
    },
})

export const { setCategoryId, setSort, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer