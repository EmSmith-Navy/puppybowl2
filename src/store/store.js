import { configureStore } from "@reduxjs/toolkit";
// import api from "../api/puppyBowlApi"; 
import api from "./api";

// Configure the store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
