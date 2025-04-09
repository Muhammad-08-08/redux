import { createSlice } from "@reduxjs/toolkit";
import { counterSliceType } from "../types/types";

export const counterSlice = createSlice({
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
