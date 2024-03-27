import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value:[]
  },
  reducers: {
    AddToCart: (state,action)=>{
      state.value.find((i)=>i.id==action.payload.id)?
      console.log('exist'):
      state.value.push(action.payload);
    },
    delCartProduct: (state,action)=>{
      const removedProduct = state.value.filter((item) => item.id != action.payload)
        state.value=removedProduct
    }
  }
})

export const {AddToCart,delCartProduct} = CartSlice.actions