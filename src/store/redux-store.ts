import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlice } from "./todoSlice";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, todo: todoSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increment, decrement } = counterSlice.actions;
export const { add, deleted, completed, inputValue, update, editInputValue } =
  todoSlice.actions;
