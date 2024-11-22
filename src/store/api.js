import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAddPuppyMutation } from "../features/puppies/puppySlice";

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

// Export the API reducer
export default api.reducer;
