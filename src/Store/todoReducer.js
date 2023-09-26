import { createSlice } from "@reduxjs/toolkit";
import { findDuplicate } from "../Util/todoUtil";
import { useDispatch } from "react-redux";
const initialState = {
  items: [],
  errors: "",
};

const todoViewSlice = createSlice({
  name: "todo-view",
  initialState: initialState,
  reducers: {
    addTodo: (state, actions) => {
      const { payload } = actions;
      return { ...state, items: [...state.items, payload] };
    },

    fetchTodo: (state, actions) => {
      const { payload } = actions;
      return { ...state, items: payload };
    },

    removeDuplicateTodo: (state) => {
      const findDuplicateTodo = state?.items.filter(
        (value, idx, cloneArr) =>
          idx === cloneArr.findIndex((val) => value.text === val.text)
      );
      return { ...state, items: findDuplicateTodo };
    },

    deleteTodo: (state, actions) => {
      const { payload } = actions;
      const removeTodo =
        state?.items.length > 0 &&
        state?.items.filter(({ id }) => id !== payload);

      return { ...state, items: removeTodo };
    },

    editTodo: (state, actions) => {
      const { id, todo: text } = actions.payload;

      state?.items.length > 0 &&
        state?.items.forEach((todo) => {
          if (todo?.id === id) {
            todo.text = text;
          }
          return todo;
        });
    },

    toastError: (state, actions) => {
      const { payload } = actions;
      return { ...state, error: payload };
    },
  },
});

export const {
  addTodo,
  fetchTodo,
  toastError,
  removeDuplicateTodo,
  editTodo,
  deleteTodo,
} = todoViewSlice.actions;

export default todoViewSlice.reducer;
