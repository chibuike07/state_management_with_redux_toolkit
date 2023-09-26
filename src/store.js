import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Store/index";

export const store = configureStore({
  reducer: rootReducer,
});
