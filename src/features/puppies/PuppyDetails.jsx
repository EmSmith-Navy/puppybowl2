import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "REPLACE_WITH_CODE";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Puppy'],
    endpoints: (builder) => ({
        getPuppies: builder.query({
            query: () => 'puppies',
            providesTags: ['Puppy'],
        }),
        getPuppy: builder.query({
            query: (puppyId) => `puppies/${puppyId}`,
            providesTags: ['Puppy'],
        }),
        addPuppy: builder.mutation({
            query: (newPuppy) => ({
                url: 'puppies',
                method: 'POST',
                body: newPuppy,
            }),
            invalidatesTags: ['Puppy'],
        }),
        deletePuppy: builder.mutation({
            query: (puppyId) => ({
                url: `puppies/${puppyId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Puppy'],
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useGetPuppiesQuery,
    useGetPuppyQuery,
    useAddPuppyMutation,
    useDeletePuppyMutation,
} = api;

export default api;
