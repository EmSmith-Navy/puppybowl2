import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api"; // Import the API slice reducer
import { api } from "./api"; // Import the API slice

const store = configureStore({
  reducer: {
    [api.reducerPath]: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the API middleware
});

export default store;
