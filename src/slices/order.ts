import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface OrderItem{
    id:number;
    count:number;
}

export interface OrderState{
    order: OrderItem[] | null
}

const initialState:OrderState = {
    order: null
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:{}

})
