import { configureStore, createSlice } from "@reduxjs/toolkit";
import { counterSliceType, todoSliceType } from "../types/types";

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

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      {
        id: 1,
        name: "Todo 1",
        completed: true,
      },
    ],
    input: "",
    editInput: "",
  } as todoSliceType,
  reducers: {
    add: (state, { payload }) => {
      state.todo.push({
        id: Math.floor(Math.random() * 10000),
        name: payload,
        completed: false,
      });
    },
    completed: (state, { payload }) => {
      const todoCompleted = state.todo.find((item) => item.id === payload);
      if (todoCompleted) {
        todoCompleted.completed = !todoCompleted.completed;
      }
    },
    deleted: (state, { payload }) => {
      state.todo = state.todo.filter((item) => item.id !== payload);
    },

    inputValue: (state, { payload }) => {
      state.input = payload;
    },
    editInputValue: (state, { payload }) => {
      state.editInput = payload;
    },
    update: (state, { payload }) => {
      const item = state.todo.find((t) => t.id === payload.id);
      if (item) {
        item.name = payload.name;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { add, deleted, completed, inputValue, update, editInputValue } =
  todoSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, todo: todoSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
