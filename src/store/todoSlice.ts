import { createSlice } from "@reduxjs/toolkit";
import { todoSliceType } from "../types/types";

export const todoSlice = createSlice({
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
      state.input = "";
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
