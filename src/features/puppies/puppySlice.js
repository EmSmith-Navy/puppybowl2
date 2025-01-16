import api from "../../store/api";

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
