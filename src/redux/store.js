import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
