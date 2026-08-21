import { createSlice } from '@reduxjs/toolkit'


export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    Cart : localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [],
    Wishlist: localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : []
  },
  reducers: {
    ProductReducer: (state,action) => {
      state.value = action.payload
    },
    CartReducer: (state,action) => {
      let exist = state.Cart.find((item)=> item.id == action.payload.id)
      if(!exist){
        state.Cart = [...state.Cart,action.payload]
        localStorage.setItem("Cart" , JSON.stringify(state.Cart))
      }
    },
    WishlistReducer: (state, action) => {
      const exists = state.Wishlist.some((item) => item.id === action.payload.id)
      state.Wishlist = exists
        ? state.Wishlist.filter((item) => item.id !== action.payload.id)
        : [...state.Wishlist, action.payload]
      localStorage.setItem("Wishlist", JSON.stringify(state.Wishlist))
    },
    removeReducer: (state,action) => {
      state.Cart = state.Cart.filter((item)=> item.id !== action.payload)
      localStorage.setItem("Cart" , JSON.stringify(state.Cart))
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer, CartReducer, WishlistReducer, removeReducer } = ProductSlice.actions

export default ProductSlice.reducer