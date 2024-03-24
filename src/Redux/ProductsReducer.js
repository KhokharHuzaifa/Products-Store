import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'productSlice',
    initialState:{
        value:[]
    },
    reducers: {
        StoreProducts: (state,action) => {
            state.value=action.payload
        }
    }
})
export const {StoreProducts} = ProductSlice.actions