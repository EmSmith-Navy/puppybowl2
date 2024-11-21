import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://your-api-url.com/api' }), // Replace with your API base URL
    endpoints: (builder) => ({
        getPuppies: builder.query({
            query: () => 'puppies', // Adjust the endpoint as needed
        }),
        getPuppy: builder.query({
            query: (id) => `puppies/${id}`, // Fetch a specific puppy by ID
        }),
        // Add more endpoints as needed
    }),
});

// Export hooks for usage in functional components
export const { useGetPuppiesQuery, useGetPuppyQuery } = api;

// Export the API slice reducer
export default api.reducer;
