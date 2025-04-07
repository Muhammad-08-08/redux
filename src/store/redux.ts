import { configureStore, createSlice } from "@reduxjs/toolkit";

interface counterSliceType {
  value: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 } as counterSliceType,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
