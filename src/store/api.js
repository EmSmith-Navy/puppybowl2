import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL for the Puppy Bowl API
// The base URL is https://fsa-puppy-bowl.herokuapp.com
// The first segment of the path is /api, every endpoint available to you has that prefix.
// If you stop there (i.e. if you go to https://fsa-puppy-bowl.herokuapp.com/api), you will find this documentation.
// The next segment of the path is your cohort name, e.g. /2109-UNF-HY-WEB-PT or /2206-CPU-RM-WEB-PT
// The last segment of the path is based on the resource or action you are taking, e.g. /puppies to fetch all puppies.

const COHORT_CODE = "REPLACE_WITH_COHORT_NAME"; // Replace with your actual cohort name
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// Configure createApi with API_URL and add "Puppy" as a tag type
const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Puppy'], // Adding "Puppy" as a tag type
    endpoints: (builder) => ({
        getPuppies: builder.query({
            query: () => 'puppies', // Endpoint to fetch all puppies
            providesTags: ['Puppy'], // Tag for caching
        }),
        getPuppy: builder.query({
            query: (puppyId) => `puppies/${puppyId}`, // Endpoint to fetch a single puppy by ID
            providesTags: ['Puppy'], // Tag for caching
        }),
        addPuppy: builder.mutation({
            query: (newPuppy) => ({
                url: 'puppies',
                method: 'POST',
                body: newPuppy, // New puppy data to be added
            }),
            invalidatesTags: ['Puppy'], // Invalidate the "Puppy" tag after adding
        }),
        deletePuppy: builder.mutation({
            query: (puppyId) => ({
                url: `puppies/${puppyId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Puppy'], // Invalidate the "Puppy" tag after deletion
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useGetPuppiesQuery,
    useGetPuppyQuery,
    useAddPuppyMutation,
    useDeletePuppyMutation, // Ensure this is exported
} = api;

export default api;
