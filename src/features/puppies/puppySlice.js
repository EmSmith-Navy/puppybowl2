import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => 'puppies', // Endpoint to fetch all puppies
      providesTags: ['Puppy'], // Tag for caching
      // Optional: transformResponse can be added here
      // transformResponse: (response) => { ... },
    }),
    getPuppy: build.query({
      query: (puppyId) => `puppies/${puppyId}`, // Endpoint to fetch a single puppy by ID
      providesTags: ['Puppy'], // Tag for caching
      // Optional: transformResponse can be added here
      // transformResponse: (response) => { ... },
    }),
    addPuppy: build.mutation({
      query: (newPuppy) => ({
        url: 'puppies',
        method: 'POST',
        body: newPuppy, // New puppy data to be added
      }),
      invalidatesTags: ['Puppy'], // Invalidate the "Puppy" tag after adding
      // Optional: transformResponse can be added here
      // transformResponse: (response) => { ... },
    }),
    deletePuppy: build.mutation({
      query: (puppyId) => ({
        url: `puppies/${puppyId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Puppy'], // Invalidate the "Puppy" tag after deletion
      // Optional: transformResponse can be added here
      // transformResponse: (response) => { ... },
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;

export default puppyApi;
