import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.countValue += 1;
    },
    decrement: (state) => {
      state.countValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.countValue += action.payload; // disaridan gelen dinamik veri kadar arttir
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //baska dosyada increment ve decrement'İ cagirmak icin (dispatch ile dagitmak icin)

export default counterSlice.reducer; //redux store olustururken ise reducer'a ihtiyacimiz var (	Store içinde kullanmak için)
