import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './../types/index'
import _, { uniqBy } from 'lodash'

interface CartState {
  cart: Product[] | null
}

const initialState: CartState = {
  cart: null,
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<Product>) {
      state.cart?.push(action.payload)
      uniqBy(state.cart, 'id')
    },
    remoteItem(state, action: PayloadAction<number>) {
      state.cart?.filter((item) => item.id !== action.payload)
    },
  },
})
