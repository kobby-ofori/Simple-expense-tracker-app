import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../slices/trackerSlice";

export const store = configureStore({
  reducer: { trackerReducer: trackerReducer },
});
