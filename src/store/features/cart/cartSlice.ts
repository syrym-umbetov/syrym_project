import { createSlice } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { Data } from '../../../types';
import { fetchData, productsOptions } from '../../../utils/fetchData';

export interface CounterState {
  cartItems: [];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
} as CounterState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
