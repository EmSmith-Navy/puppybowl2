import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-url.com" }),
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/puppies",
    }),
  }),
});

// Export the auto-generated hook for the `getPuppies` query
export const { useGetPuppiesQuery } = api;

// Configure the store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
