import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createOrder } from "./OrderAPI"


const initialState = {
  orders: [],
  status: 'idle',
  currentOrder :null,
}

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

export const orderSlice = createSlice({
  name: "order",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.orders.push(action.payload)
        state.currentOrder = action.payload
      })
      
     
  },
})

export const {  } = orderSlice.actions


export const selectCurrentOrder = (state) => state.order.currentOrder
export const selectOrders = (state) => state.order.orders



export default orderSlice.reducer
