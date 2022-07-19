import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
}

export const counterSlice = createSlice({
    name: 'backet',
    initialState,
    reducers: {
        addToBacket: (state, action) => {
            state.item = [...state.item, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.item.findIndex((item) => item.id === action.payload.id)
            let newBacket = [...state.item];
            if (index >= 0) {
                newBacket.splice(index, 1);
            } else {
                console.warn(`The Item Is not Present In The Basket`)
            }
            state.item = newBacket;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBacket, removeFromBasket } = counterSlice.actions

export const selectBacketItem = (state) => state.backet.item;

export const selectItemWIthItemId = (state, id) => state.backet.item.filter((item) => item.id === id)

export default counterSlice.reducer