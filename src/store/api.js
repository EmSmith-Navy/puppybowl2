import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useAddPuppyMutation } from "../features/puppies/puppySlice";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fsa-puppy-bowl.herokuapp.com" }),
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/puppies",
    }),
  }),
});

// src/features/puppies/puppySlice.js

// import api from "./puppyApi";

// Define the endpoints
const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => "puppies", // Endpoint to fetch all puppies
      providesTags: ["Puppy"], // Tag for caching
    }),
    getPuppy: build.query({
      query: (puppyId) => `puppies/${puppyId}`, // Endpoint to fetch a single puppy by ID
      providesTags: ["Puppy"], // Tag for caching
    }),
    addPuppy: build.mutation({
      query: (newPuppy) => ({
        url: "puppies",
        method: "POST",
        body: newPuppy, // New puppy data to be added
      }),
      invalidatesTags: ["Puppy"], // Invalidate the "Puppy" tag
    }),
    deletePuppy: build.mutation({
      query: (puppyId) => ({
        url: `puppies/${puppyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"], // Invalidate the "Puppy" tag
    }),
  }),
});

// Export hooks for the defined endpoints
export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;

// Export the API reducer
export default api.reducer;
